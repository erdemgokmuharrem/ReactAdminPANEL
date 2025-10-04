/**
 * CSV Export utility functions
 */

export interface ExportableData {
  [key: string]: string | number | boolean | Date | null | undefined
}

/**
 * Convert data to CSV format
 */
export const convertToCSV = (data: ExportableData[], headers?: string[]): string => {
  if (data.length === 0) return ''

  // Get headers from data if not provided
  const csvHeaders = headers || Object.keys(data[0])
  
  // Create CSV header row
  const headerRow = csvHeaders.join(',')
  
  // Create CSV data rows
  const dataRows = data.map(row => 
    csvHeaders.map(header => {
      const value = row[header]
      if (value === null || value === undefined) return ''
      
      // Escape commas and quotes in string values
      if (typeof value === 'string') {
        const escaped = value.replace(/"/g, '""')
        return `"${escaped}"`
      }
      
      return String(value)
    }).join(',')
  )
  
  return [headerRow, ...dataRows].join('\n')
}

/**
 * Download CSV file
 */
export const downloadCSV = (csvContent: string, filename: string): void => {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', filename)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }
}

/**
 * Export data as CSV file
 */
export const exportToCSV = (data: ExportableData[], filename: string, headers?: string[]): void => {
  const csvContent = convertToCSV(data, headers)
  downloadCSV(csvContent, filename)
}

/**
 * Format date for CSV export
 */
export const formatDateForCSV = (date: Date | string): string => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

/**
 * Format boolean for CSV export
 */
export const formatBooleanForCSV = (value: boolean): string => {
  return value ? 'Yes' : 'No'
}
