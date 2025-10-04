/**
 * File Upload utilities with S3-compatible adapter mock
 */

export interface UploadProgress {
  loaded: number
  total: number
  percentage: number
}

export interface UploadResult {
  success: boolean
  url?: string
  key?: string
  error?: string
}

export interface FileUploadOptions {
  onProgress?: (progress: UploadProgress) => void
  onSuccess?: (result: UploadResult) => void
  onError?: (error: string) => void
}

/**
 * Mock S3-compatible file upload
 */
export const uploadToS3 = async (
  file: File,
  options: FileUploadOptions = {}
): Promise<UploadResult> => {
  const { onProgress, onSuccess, onError } = options

  try {
    // Simulate upload progress
    const total = file.size
    let loaded = 0

    const progressInterval = setInterval(() => {
      loaded += Math.random() * (total / 10)
      if (loaded >= total) {
        loaded = total
        clearInterval(progressInterval)
      }

      const progress: UploadProgress = {
        loaded,
        total,
        percentage: Math.round((loaded / total) * 100),
      }

      onProgress?.(progress)
    }, 100)

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Generate mock URL
    const fileKey = `uploads/${Date.now()}-${file.name}`
    const mockUrl = `https://mock-s3-bucket.s3.amazonaws.com/${fileKey}`

    const result: UploadResult = {
      success: true,
      url: mockUrl,
      key: fileKey,
    }

    onSuccess?.(result)
    return result
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Upload failed'
    onError?.(errorMessage)
    return {
      success: false,
      error: errorMessage,
    }
  }
}

/**
 * Validate file type
 */
export const validateFileType = (file: File, allowedTypes: string[]): boolean => {
  return allowedTypes.includes(file.type)
}

/**
 * Validate file size
 */
export const validateFileSize = (file: File, maxSizeInMB: number): boolean => {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024
  return file.size <= maxSizeInBytes
}

/**
 * Get file extension
 */
export const getFileExtension = (filename: string): string => {
  return filename.split('.').pop()?.toLowerCase() || ''
}

/**
 * Format file size
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * Generate unique filename
 */
export const generateUniqueFilename = (originalName: string): string => {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 8)
  const extension = getFileExtension(originalName)
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '')
  
  return `${nameWithoutExt}-${timestamp}-${random}.${extension}`
}
