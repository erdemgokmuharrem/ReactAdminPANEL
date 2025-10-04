import { useState, useEffect } from 'react'
import {
  ServerIcon,
  CircleStackIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  ArrowPathIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

interface SystemMetric {
  name: string
  value: string
  status: 'good' | 'warning' | 'critical'
  trend: 'up' | 'down' | 'stable'
  unit: string
}

interface Service {
  name: string
  status: 'running' | 'stopped' | 'error'
  uptime: string
  lastCheck: string
  description: string
}

interface SystemAlert {
  id: string
  type: 'info' | 'warning' | 'error' | 'success'
  message: string
  timestamp: string
  resolved: boolean
}

const mockSystemMetrics: SystemMetric[] = [
  {
    name: 'CPU Usage',
    value: '45',
    status: 'good',
    trend: 'down',
    unit: '%'
  },
  {
    name: 'Memory Usage',
    value: '68',
    status: 'warning',
    trend: 'up',
    unit: '%'
  },
  {
    name: 'Disk Usage',
    value: '32',
    status: 'good',
    trend: 'stable',
    unit: '%'
  },
  {
    name: 'Network I/O',
    value: '23',
    status: 'good',
    trend: 'down',
    unit: '%'
  },
  {
    name: 'Database Connections',
    value: '12',
    status: 'good',
    trend: 'stable',
    unit: '/100'
  },
  {
    name: 'Response Time',
    value: '245',
    status: 'good',
    trend: 'down',
    unit: 'ms'
  }
]

const mockServices: Service[] = [
  {
    name: 'Web Server',
    status: 'running',
    uptime: '15 days, 3 hours',
    lastCheck: '2 minutes ago',
    description: 'Main web server process'
  },
  {
    name: 'Database',
    status: 'running',
    uptime: '15 days, 3 hours',
    lastCheck: '1 minute ago',
    description: 'PostgreSQL database service'
  },
  {
    name: 'Redis Cache',
    status: 'running',
    uptime: '12 days, 8 hours',
    lastCheck: '30 seconds ago',
    description: 'Redis caching service'
  },
  {
    name: 'Email Service',
    status: 'stopped',
    uptime: '0 days, 0 hours',
    lastCheck: '5 minutes ago',
    description: 'SMTP email service'
  },
  {
    name: 'File Storage',
    status: 'running',
    uptime: '15 days, 3 hours',
    lastCheck: '1 minute ago',
    description: 'S3-compatible file storage'
  },
  {
    name: 'Background Jobs',
    status: 'error',
    uptime: '2 days, 1 hour',
    lastCheck: '10 minutes ago',
    description: 'Queue worker processes'
  }
]

const mockSystemAlerts: SystemAlert[] = [
  {
    id: '1',
    type: 'warning',
    message: 'High memory usage detected (85%)',
    timestamp: '2024-01-15T10:30:00Z',
    resolved: false
  },
  {
    id: '2',
    type: 'error',
    message: 'Email service is down',
    timestamp: '2024-01-15T10:25:00Z',
    resolved: false
  },
  {
    id: '3',
    type: 'info',
    message: 'Database backup completed successfully',
    timestamp: '2024-01-15T10:20:00Z',
    resolved: true
  },
  {
    id: '4',
    type: 'success',
    message: 'System update completed',
    timestamp: '2024-01-15T10:15:00Z',
    resolved: true
  },
  {
    id: '5',
    type: 'warning',
    message: 'Disk space running low (80% used)',
    timestamp: '2024-01-15T10:10:00Z',
    resolved: false
  }
]

export const SystemPage: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const [systemMetrics] = useState<SystemMetric[]>(mockSystemMetrics)
  const [services] = useState<Service[]>(mockServices)
  const [systemAlerts] = useState<SystemAlert[]>(mockSystemAlerts)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
      case 'running':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />
      case 'critical':
      case 'error':
      case 'stopped':
        return <XCircleIcon className="h-5 w-5 text-red-500" />
      default:
        return <ClockIcon className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
      case 'running':
        return 'bg-green-100 text-green-800'
      case 'warning':
        return 'bg-yellow-100 text-yellow-800'
      case 'critical':
      case 'error':
      case 'stopped':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'info':
        return <ChartBarIcon className="h-5 w-5 text-blue-500" />
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />
      case 'error':
        return <XCircleIcon className="h-5 w-5 text-red-500" />
      case 'success':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      default:
        return <ClockIcon className="h-5 w-5 text-gray-500" />
    }
  }

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'info':
        return 'bg-blue-100 text-blue-800'
      case 'warning':
        return 'bg-yellow-100 text-yellow-800'
      case 'error':
        return 'bg-red-100 text-red-800'
      case 'success':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleServiceAction = (serviceName: string, action: 'start' | 'stop' | 'restart') => {
    console.log(`${action} service: ${serviceName}`)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">System Monitor</h1>
        <p className="mt-1 text-sm text-gray-500">
          Monitor system performance and manage services
        </p>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ServerIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">System Uptime</p>
              <p className="text-2xl font-semibold text-gray-900">15d 3h</p>
            </div>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Services Running</p>
              <p className="text-2xl font-semibold text-gray-900">
                {services.filter(s => s.status === 'running').length}/{services.length}
              </p>
            </div>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Active Alerts</p>
              <p className="text-2xl font-semibold text-gray-900">
                {systemAlerts.filter(a => !a.resolved).length}
              </p>
            </div>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ShieldCheckIcon className="h-6 w-6 text-purple-500" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Health Score</p>
              <p className="text-2xl font-semibold text-gray-900">87/100</p>
            </div>
          </div>
        </div>
      </div>

      {/* System Metrics */}
      <div className="card p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">System Metrics</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {systemMetrics.map((metric) => (
            <div key={metric.name} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-900">{metric.name}</h4>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(metric.status)}
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(metric.status)}`}>
                    {metric.status}
                  </span>
                </div>
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-semibold text-gray-900">
                  {metric.value}{metric.unit}
                </span>
                <span className={`text-sm ${
                  metric.trend === 'up' ? 'text-red-600' : 
                  metric.trend === 'down' ? 'text-green-600' : 
                  'text-gray-600'
                }`}>
                  {metric.trend === 'up' ? '↗' : metric.trend === 'down' ? '↘' : '→'}
                </span>
              </div>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      metric.status === 'good' ? 'bg-green-500' :
                      metric.status === 'warning' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${parseInt(metric.value)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="card p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Services</h3>
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {getStatusIcon(service.status)}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{service.name}</h4>
                  <p className="text-sm text-gray-500">{service.description}</p>
                  <div className="mt-1 text-xs text-gray-500">
                    <span>Uptime: {service.uptime}</span>
                    <span className="mx-2">•</span>
                    <span>Last check: {service.lastCheck}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(service.status)}`}>
                  {service.status}
                </span>
                <div className="flex space-x-1">
                  <button
                    onClick={() => handleServiceAction(service.name, 'start')}
                    className="px-2 py-1 text-xs font-medium text-green-600 bg-green-100 rounded hover:bg-green-200"
                    disabled={service.status === 'running'}
                  >
                    Start
                  </button>
                  <button
                    onClick={() => handleServiceAction(service.name, 'stop')}
                    className="px-2 py-1 text-xs font-medium text-red-600 bg-red-100 rounded hover:bg-red-200"
                    disabled={service.status === 'stopped'}
                  >
                    Stop
                  </button>
                  <button
                    onClick={() => handleServiceAction(service.name, 'restart')}
                    className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded hover:bg-blue-200"
                  >
                    Restart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Alerts */}
      <div className="card p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">System Alerts</h3>
        <div className="space-y-4">
          {systemAlerts.map((alert) => (
            <div key={alert.id} className={`flex items-start space-x-4 p-4 rounded-lg ${
              alert.resolved ? 'bg-gray-50' : 'bg-red-50'
            }`}>
              <div className="flex-shrink-0">
                {getAlertIcon(alert.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className={`text-sm font-medium ${
                    alert.resolved ? 'text-gray-900' : 'text-red-900'
                  }`}>
                    {alert.message}
                  </p>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getAlertColor(alert.type)}`}>
                    {alert.type}
                  </span>
                </div>
                <p className={`text-xs mt-1 ${
                  alert.resolved ? 'text-gray-500' : 'text-red-600'
                }`}>
                  {new Date(alert.timestamp).toLocaleString()}
                  {alert.resolved && ' • Resolved'}
                </p>
              </div>
              {!alert.resolved && (
                <button className="px-3 py-1 text-xs font-medium text-white bg-red-600 rounded hover:bg-red-700">
                  Resolve
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* System Actions */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">System Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              <ArrowPathIcon className="h-4 w-4 mr-2" />
              Restart System
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
              <WrenchScrewdriverIcon className="h-4 w-4 mr-2" />
              Run Maintenance
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700">
              <CircleStackIcon className="h-4 w-4 mr-2" />
              Backup Database
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700">
              <ChartBarIcon className="h-4 w-4 mr-2" />
              Generate Report
            </button>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">System Information</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">OS Version:</span>
              <span className="text-gray-900">Ubuntu 22.04 LTS</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Kernel:</span>
              <span className="text-gray-900">5.15.0-91-generic</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Architecture:</span>
              <span className="text-gray-900">x86_64</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">CPU Cores:</span>
              <span className="text-gray-900">8 cores</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Total Memory:</span>
              <span className="text-gray-900">16 GB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Total Disk:</span>
              <span className="text-gray-900">500 GB SSD</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Load Average:</span>
              <span className="text-gray-900">0.45, 0.52, 0.48</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
