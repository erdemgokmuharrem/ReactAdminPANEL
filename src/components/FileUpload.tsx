import { useState, useRef } from 'react'
import { CloudArrowUpIcon, XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { uploadToS3, validateFileType, validateFileSize, formatFileSize } from '../utils/fileUpload'
import { Button } from './Button'

interface FileUploadProps {
  onUploadComplete?: (url: string, key: string) => void
  onUploadError?: (error: string) => void
  acceptedTypes?: string[]
  maxSizeInMB?: number
  multiple?: boolean
  className?: string
}

interface UploadingFile {
  file: File
  progress: number
  status: 'uploading' | 'success' | 'error'
  url?: string
  key?: string
  error?: string
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onUploadComplete,
  onUploadError,
  acceptedTypes = ['image/*', 'application/pdf', 'text/*'],
  maxSizeInMB = 10,
  multiple = false,
  className = '',
}) => {
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return

    const fileArray = Array.from(files)
    const validFiles: File[] = []

    // Validate files
    fileArray.forEach(file => {
      if (!validateFileType(file, acceptedTypes)) {
        onUploadError?.(`File ${file.name} has an unsupported type`)
        return
      }

      if (!validateFileSize(file, maxSizeInMB)) {
        onUploadError?.(`File ${file.name} is too large. Maximum size is ${maxSizeInMB}MB`)
        return
      }

      validFiles.push(file)
    })

    if (validFiles.length === 0) return

    // Add files to uploading list
    const newUploadingFiles: UploadingFile[] = validFiles.map(file => ({
      file,
      progress: 0,
      status: 'uploading',
    }))

    setUploadingFiles(prev => [...prev, ...newUploadingFiles])

    // Start uploads
    validFiles.forEach((file, index) => {
      uploadToS3(file, {
        onProgress: (progress) => {
          setUploadingFiles(prev => 
            prev.map((uploadingFile, i) => 
              i === prev.length - validFiles.length + index
                ? { ...uploadingFile, progress: progress.percentage }
                : uploadingFile
            )
          )
        },
        onSuccess: (result) => {
          setUploadingFiles(prev => 
            prev.map((uploadingFile, i) => 
              i === prev.length - validFiles.length + index
                ? { 
                    ...uploadingFile, 
                    status: 'success', 
                    url: result.url, 
                    key: result.key 
                  }
                : uploadingFile
            )
          )
          onUploadComplete?.(result.url!, result.key!)
        },
        onError: (error) => {
          setUploadingFiles(prev => 
            prev.map((uploadingFile, i) => 
              i === prev.length - validFiles.length + index
                ? { ...uploadingFile, status: 'error', error }
                : uploadingFile
            )
          )
          onUploadError?.(error)
        },
      })
    })
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    handleFileSelect(e.dataTransfer.files)
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e.target.files)
  }

  const removeFile = (index: number) => {
    setUploadingFiles(prev => prev.filter((_, i) => i !== index))
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragOver
            ? 'border-primary-500 bg-primary-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            <button
              type="button"
              onClick={openFileDialog}
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              Click to upload
            </button>{' '}
            or drag and drop
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {acceptedTypes.join(', ')} up to {maxSizeInMB}MB
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple={multiple}
          accept={acceptedTypes.join(',')}
          onChange={handleFileInputChange}
          className="hidden"
        />
      </div>

      {/* Uploading Files */}
      {uploadingFiles.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">Uploading Files</h4>
          {uploadingFiles.map((uploadingFile, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  {uploadingFile.status === 'success' ? (
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  ) : uploadingFile.status === 'error' ? (
                    <XMarkIcon className="h-5 w-5 text-red-500" />
                  ) : (
                    <div className="h-5 w-5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {uploadingFile.file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(uploadingFile.file.size)}
                  </p>
                  {uploadingFile.status === 'uploading' && (
                    <div className="mt-1">
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div
                          className="bg-primary-600 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${uploadingFile.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {uploadingFile.progress}%
                      </p>
                    </div>
                  )}
                  {uploadingFile.status === 'error' && (
                    <p className="text-xs text-red-500 mt-1">
                      {uploadingFile.error}
                    </p>
                  )}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
              >
                <XMarkIcon className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
