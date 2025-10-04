import { useState, useEffect } from 'react'
import {
  DocumentTextIcon,
  ChartBarIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  EyeIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'

interface Report {
  id: string
  name: string
  type: 'analytics' | 'users' | 'system' | 'financial'
  description: string
  createdAt: string
  lastRun: string
  status: 'completed' | 'running' | 'failed'
  size: string
  format: 'pdf' | 'csv' | 'excel'
}

const mockReports: Report[] = [
  {
    id: '1',
    name: 'Monthly User Analytics',
    type: 'analytics',
    description: 'Comprehensive user engagement and activity report',
    createdAt: '2024-01-01T00:00:00Z',
    lastRun: '2024-01-15T10:30:00Z',
    status: 'completed',
    size: '2.4 MB',
    format: 'pdf'
  },
  {
    id: '2',
    name: 'User Registration Report',
    type: 'users',
    description: 'New user registrations and demographics',
    createdAt: '2024-01-05T00:00:00Z',
    lastRun: '2024-01-15T09:15:00Z',
    status: 'completed',
    size: '856 KB',
    format: 'csv'
  },
  {
    id: '3',
    name: 'System Performance Report',
    type: 'system',
    description: 'Server performance and resource utilization',
    createdAt: '2024-01-10T00:00:00Z',
    lastRun: '2024-01-15T08:45:00Z',
    status: 'running',
    size: '-',
    format: 'pdf'
  },
  {
    id: '4',
    name: 'Financial Summary',
    type: 'financial',
    description: 'Revenue, expenses, and profit analysis',
    createdAt: '2024-01-12T00:00:00Z',
    lastRun: '2024-01-14T16:20:00Z',
    status: 'completed',
    size: '1.8 MB',
    format: 'excel'
  },
  {
    id: '5',
    name: 'Error Log Analysis',
    type: 'system',
    description: 'System errors and exception analysis',
    createdAt: '2024-01-14T00:00:00Z',
    lastRun: '2024-01-15T07:30:00Z',
    status: 'failed',
    size: '-',
    format: 'pdf'
  }
]

export const ReportsPage: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const [reports] = useState<Report[]>(mockReports)
  const [selectedType, setSelectedType] = useState<string>('')
  const [selectedStatus, setSelectedStatus] = useState<string>('')

  useEffect(() => {
    setMounted(true)
  }, [])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'analytics':
        return <ChartBarIcon className="h-5 w-5 text-blue-500" />
      case 'users':
        return <DocumentTextIcon className="h-5 w-5 text-green-500" />
      case 'system':
        return <ChartBarIcon className="h-5 w-5 text-orange-500" />
      case 'financial':
        return <DocumentTextIcon className="h-5 w-5 text-purple-500" />
      default:
        return <DocumentTextIcon className="h-5 w-5 text-gray-500" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'analytics':
        return 'bg-blue-100 text-blue-800'
      case 'users':
        return 'bg-green-100 text-green-800'
      case 'system':
        return 'bg-orange-100 text-orange-800'
      case 'financial':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'running':
        return 'bg-yellow-100 text-yellow-800'
      case 'failed':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredReports = reports.filter(report => {
    const matchesType = !selectedType || report.type === selectedType
    const matchesStatus = !selectedStatus || report.status === selectedStatus
    return matchesType && matchesStatus
  })

  const handleGenerateReport = () => {
    // Implement report generation
    console.log('Generating new report...')
  }

  const handleDownloadReport = (report: Report) => {
    // Implement report download
    console.log('Downloading report:', report.name)
  }

  const handleViewReport = (report: Report) => {
    // Implement report viewing
    console.log('Viewing report:', report.name)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="mt-1 text-sm text-gray-500">
            Generate and manage system reports
          </p>
        </div>
        <button
          onClick={handleGenerateReport}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          Generate Report
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <DocumentTextIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Total Reports</p>
              <p className="text-2xl font-semibold text-gray-900">{reports.length}</p>
            </div>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ChartBarIcon className="h-6 w-6 text-green-500" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Completed</p>
              <p className="text-2xl font-semibold text-gray-900">
                {reports.filter(r => r.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CalendarIcon className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Running</p>
              <p className="text-2xl font-semibold text-gray-900">
                {reports.filter(r => r.status === 'running').length}
              </p>
            </div>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <DocumentTextIcon className="h-6 w-6 text-red-500" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Failed</p>
              <p className="text-2xl font-semibold text-gray-900">
                {reports.filter(r => r.status === 'failed').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">All Types</option>
              <option value="analytics">Analytics</option>
              <option value="users">Users</option>
              <option value="system">System</option>
              <option value="financial">Financial</option>
            </select>
          </div>
          <div className="flex-1">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">All Status</option>
              <option value="completed">Completed</option>
              <option value="running">Running</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredReports.map((report) => (
            <div key={report.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  {getTypeIcon(report.type)}
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">{report.name}</h3>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(report.type)}`}>
                      {report.type}
                    </span>
                  </div>
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                  {report.status}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{report.description}</p>
              
              <div className="space-y-2 text-sm text-gray-500 mb-4">
                <div className="flex justify-between">
                  <span>Created:</span>
                  <span>{new Date(report.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Run:</span>
                  <span>{new Date(report.lastRun).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Size:</span>
                  <span>{report.size}</span>
                </div>
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span className="uppercase">{report.format}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => handleViewReport(report)}
                  className="flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <EyeIcon className="h-4 w-4 mr-2" />
                  View
                </button>
                <button
                  onClick={() => handleDownloadReport(report)}
                  disabled={report.status !== 'completed'}
                  className="flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No reports found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your filter criteria or generate a new report.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
