import { useState, useEffect } from 'react'
import {
  UsersIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  EyeIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ServerIcon,
  CircleStackIcon,
  GlobeAltIcon,
  BellIcon,
  ShieldCheckIcon,
  CloudIcon,
  WifiIcon,
} from '@heroicons/react/24/outline'

interface StatCard {
  name: string
  value: string
  change: string
  changeType: 'increase' | 'decrease'
  icon: React.ComponentType<{ className?: string }>
}

const stats: StatCard[] = [
  {
    name: 'Total Users',
    value: '12,345',
    change: '+12%',
    changeType: 'increase',
    icon: UsersIcon,
  },
  {
    name: 'Monthly Revenue',
    value: '$145,678',
    change: '+18.2%',
    changeType: 'increase',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Conversion Rate',
    value: '4.2%',
    change: '+2.1%',
    changeType: 'increase',
    icon: ChartBarIcon,
  },
  {
    name: 'Active Sessions',
    value: '2,134',
    change: '+15.4%',
    changeType: 'increase',
    icon: EyeIcon,
  },
  {
    name: 'Page Views',
    value: '89,432',
    change: '+8.7%',
    changeType: 'increase',
    icon: GlobeAltIcon,
  },
  {
    name: 'Avg. Response Time',
    value: '245ms',
    change: '-12%',
    changeType: 'decrease',
    icon: ClockIcon,
  },
  {
    name: 'Success Rate',
    value: '99.8%',
    change: '+0.2%',
    changeType: 'increase',
    icon: CheckCircleIcon,
  },
  {
    name: 'Error Rate',
    value: '0.2%',
    change: '-0.1%',
    changeType: 'decrease',
    icon: ExclamationTriangleIcon,
  },
]

const recentActivities = [
  { id: 1, user: 'John Doe', action: 'Created new user account', time: '2 minutes ago', type: 'user' },
  { id: 2, user: 'Jane Smith', action: 'Updated system settings', time: '5 minutes ago', type: 'settings' },
  { id: 3, user: 'Bob Johnson', action: 'Exported user data', time: '8 minutes ago', type: 'export' },
  { id: 4, user: 'Alice Brown', action: 'Generated analytics report', time: '12 minutes ago', type: 'analytics' },
  { id: 5, user: 'Charlie Wilson', action: 'Updated user permissions', time: '15 minutes ago', type: 'permissions' },
]

const systemAlerts = [
  { id: 1, type: 'warning', message: 'High CPU usage detected', time: '5 minutes ago' },
  { id: 2, type: 'info', message: 'Database backup completed', time: '1 hour ago' },
  { id: 3, type: 'success', message: 'Security scan passed', time: '2 hours ago' },
  { id: 4, type: 'error', message: 'Failed login attempt detected', time: '3 hours ago' },
]

const topPages = [
  { page: '/dashboard', views: 1234, unique: 987, bounce: '12%' },
  { page: '/users', views: 856, unique: 654, bounce: '8%' },
  { page: '/analytics', views: 743, unique: 598, bounce: '15%' },
  { page: '/settings', views: 432, unique: 321, bounce: '5%' },
  { page: '/reports', views: 298, unique: 234, bounce: '22%' },
]

export const DashboardPage: React.FC = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome to your admin dashboard - Overview of your application
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="card p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.name}
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </div>
                    <div
                      className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'increase'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {stat.changeType === 'increase' ? (
                        <ArrowUpIcon
                          className="h-4 w-4 flex-shrink-0 self-center"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowDownIcon
                          className="h-4 w-4 flex-shrink-0 self-center"
                          aria-hidden="true"
                        />
                      )}
                      <span className="sr-only">
                        {stat.changeType === 'increase' ? 'Increased' : 'Decreased'} by
                      </span>
                      {stat.change}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="text-sm text-blue-600 hover:text-blue-500">
              View all activity →
            </button>
          </div>
        </div>

        {/* System Alerts */}
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">System Alerts</h3>
          <div className="space-y-3">
            {systemAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  {alert.type === 'error' && <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />}
                  {alert.type === 'warning' && <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />}
                  {alert.type === 'info' && <BellIcon className="h-5 w-5 text-blue-500" />}
                  {alert.type === 'success' && <CheckCircleIcon className="h-5 w-5 text-green-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-500">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pages */}
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Top Pages</h3>
          <div className="space-y-3">
            {topPages.map((page) => (
              <div key={page.page} className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{page.page}</p>
                  <p className="text-xs text-gray-500">{page.unique} unique views</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-900">{page.views}</span>
                  <span className="text-xs text-gray-500">({page.bounce} bounce)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ServerIcon className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-gray-900">Web Server</span>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Online
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CircleStackIcon className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-gray-900">Database</span>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Connected
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CloudIcon className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-gray-900">CDN</span>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <WifiIcon className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-900">API Gateway</span>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Slow
              </span>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">CPU Usage</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <span className="text-sm text-gray-900">45%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Memory Usage</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
                <span className="text-sm text-gray-900">68%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Disk Usage</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '32%' }}></div>
                </div>
                <span className="text-sm text-gray-900">32%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Network I/O</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '23%' }}></div>
                </div>
                <span className="text-sm text-gray-900">23%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <button className="flex flex-col items-center p-4 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <UsersIcon className="h-6 w-6 mb-2" />
            Add User
          </button>
          <button className="flex flex-col items-center p-4 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <ChartBarIcon className="h-6 w-6 mb-2" />
            Generate Report
          </button>
          <button className="flex flex-col items-center p-4 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <ShieldCheckIcon className="h-6 w-6 mb-2" />
            Security Scan
          </button>
            <button className="flex flex-col items-center p-4 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <CircleStackIcon className="h-6 w-6 mb-2" />
              Backup Data
            </button>
        </div>
      </div>
    </div>
  )
}