import { useState, useEffect } from 'react'
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
  UserGroupIcon,
  ClockIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

interface SecurityEvent {
  id: string
  type: 'login' | 'logout' | 'failed_login' | 'password_change' | 'permission_change' | 'suspicious_activity'
  user: string
  ip: string
  location: string
  timestamp: string
  status: 'success' | 'warning' | 'error'
  description: string
}

interface SecurityPolicy {
  id: string
  name: string
  description: string
  enabled: boolean
  severity: 'low' | 'medium' | 'high' | 'critical'
}

const mockSecurityEvents: SecurityEvent[] = [
  {
    id: '1',
    type: 'failed_login',
    user: 'admin@example.com',
    ip: '192.168.1.100',
    location: 'Istanbul, Turkey',
    timestamp: '2024-01-15T10:30:00Z',
    status: 'error',
    description: 'Failed login attempt with incorrect password'
  },
  {
    id: '2',
    type: 'login',
    user: 'john.doe@example.com',
    ip: '192.168.1.101',
    location: 'Ankara, Turkey',
    timestamp: '2024-01-15T10:25:00Z',
    status: 'success',
    description: 'Successful login from new device'
  },
  {
    id: '3',
    type: 'password_change',
    user: 'jane.smith@example.com',
    ip: '192.168.1.102',
    location: 'Izmir, Turkey',
    timestamp: '2024-01-15T10:20:00Z',
    status: 'success',
    description: 'Password changed successfully'
  },
  {
    id: '4',
    type: 'suspicious_activity',
    user: 'unknown@example.com',
    ip: '203.0.113.1',
    location: 'Unknown',
    timestamp: '2024-01-15T10:15:00Z',
    status: 'warning',
    description: 'Multiple failed login attempts from same IP'
  },
  {
    id: '5',
    type: 'permission_change',
    user: 'admin@example.com',
    ip: '192.168.1.100',
    location: 'Istanbul, Turkey',
    timestamp: '2024-01-15T10:10:00Z',
    status: 'success',
    description: 'User permissions updated for user-123'
  }
]

const mockSecurityPolicies: SecurityPolicy[] = [
  {
    id: '1',
    name: 'Password Policy',
    description: 'Enforce strong password requirements',
    enabled: true,
    severity: 'high'
  },
  {
    id: '2',
    name: 'Two-Factor Authentication',
    description: 'Require 2FA for all admin users',
    enabled: true,
    severity: 'critical'
  },
  {
    id: '3',
    name: 'Session Timeout',
    description: 'Auto-logout after 30 minutes of inactivity',
    enabled: true,
    severity: 'medium'
  },
  {
    id: '4',
    name: 'IP Whitelist',
    description: 'Restrict access to specific IP addresses',
    enabled: false,
    severity: 'high'
  },
  {
    id: '5',
    name: 'Failed Login Lockout',
    description: 'Lock account after 5 failed login attempts',
    enabled: true,
    severity: 'high'
  },
  {
    id: '6',
    name: 'Audit Logging',
    description: 'Log all security-related events',
    enabled: true,
    severity: 'medium'
  }
]

export const SecurityPage: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const [securityEvents] = useState<SecurityEvent[]>(mockSecurityEvents)
  const [securityPolicies, setSecurityPolicies] = useState<SecurityPolicy[]>(mockSecurityPolicies)
  const [showPassword, setShowPassword] = useState(false)
  const [selectedEventType, setSelectedEventType] = useState<string>('')

  useEffect(() => {
    setMounted(true)
  }, [])

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'login':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      case 'logout':
        return <XCircleIcon className="h-5 w-5 text-gray-500" />
      case 'failed_login':
        return <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
      case 'password_change':
        return <KeyIcon className="h-5 w-5 text-blue-500" />
      case 'permission_change':
        return <UserGroupIcon className="h-5 w-5 text-purple-500" />
      case 'suspicious_activity':
        return <ExclamationTriangleIcon className="h-5 w-5 text-orange-500" />
      default:
        return <ShieldCheckIcon className="h-5 w-5 text-gray-500" />
    }
  }

  const getEventStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-800'
      case 'warning':
        return 'bg-yellow-100 text-yellow-800'
      case 'error':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-green-100 text-green-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'high':
        return 'bg-orange-100 text-orange-800'
      case 'critical':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredEvents = securityEvents.filter(event => 
    !selectedEventType || event.type === selectedEventType
  )

  const handlePolicyToggle = (policyId: string) => {
    setSecurityPolicies(prev => 
      prev.map(policy => 
        policy.id === policyId 
          ? { ...policy, enabled: !policy.enabled }
          : policy
      )
    )
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Security Center</h1>
        <p className="mt-1 text-sm text-gray-500">
          Monitor security events and manage security policies
        </p>
      </div>

      {/* Security Overview */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ShieldCheckIcon className="h-6 w-6 text-green-500" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Security Score</p>
              <p className="text-2xl font-semibold text-gray-900">85/100</p>
            </div>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Active Threats</p>
              <p className="text-2xl font-semibold text-gray-900">2</p>
            </div>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ClockIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Last Scan</p>
              <p className="text-2xl font-semibold text-gray-900">2h ago</p>
            </div>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <LockClosedIcon className="h-6 w-6 text-purple-500" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Policies Active</p>
              <p className="text-2xl font-semibold text-gray-900">
                {securityPolicies.filter(p => p.enabled).length}/{securityPolicies.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Events */}
      <div className="card p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Recent Security Events</h3>
          <select
            value={selectedEventType}
            onChange={(e) => setSelectedEventType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">All Events</option>
            <option value="login">Login</option>
            <option value="logout">Logout</option>
            <option value="failed_login">Failed Login</option>
            <option value="password_change">Password Change</option>
            <option value="permission_change">Permission Change</option>
            <option value="suspicious_activity">Suspicious Activity</option>
          </select>
        </div>

        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <div key={event.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                {getEventIcon(event.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{event.user}</p>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getEventStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                  <span>IP: {event.ip}</span>
                  <span>Location: {event.location}</span>
                  <span>{new Date(event.timestamp).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Policies */}
      <div className="card p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Security Policies</h3>
        <div className="space-y-4">
          {securityPolicies.map((policy) => (
            <div key={policy.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <ShieldCheckIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{policy.name}</h4>
                  <p className="text-sm text-gray-500">{policy.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSeverityColor(policy.severity)}`}>
                  {policy.severity}
                </span>
                <button
                  onClick={() => handlePolicyToggle(policy.id)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    policy.enabled ? 'bg-primary-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      policy.enabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Settings */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Password Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter current password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-4 w-4 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Confirm new password"
              />
            </div>
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700">
              Update Password
            </button>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">SMS Authentication</h4>
                <p className="text-sm text-gray-500">Receive codes via SMS</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Authenticator App</h4>
                <p className="text-sm text-gray-500">Use Google Authenticator or similar</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Backup Codes</h4>
                <p className="text-sm text-gray-500">Generate backup codes for recovery</p>
              </div>
              <button className="px-3 py-1 text-sm font-medium text-primary-600 bg-primary-100 rounded-md hover:bg-primary-200">
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
