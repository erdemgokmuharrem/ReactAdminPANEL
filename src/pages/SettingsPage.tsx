import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useThemeStore } from '../stores/themeStore'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import toast from 'react-hot-toast'

const schema = yup.object({
  appName: yup.string().required('App name is required'),
  appDescription: yup.string(),
  primaryColor: yup.string().required('Primary color is required'),
  borderRadius: yup.number().min(0).max(20).required('Border radius is required'),
})

type SettingsFormData = yup.InferType<typeof schema>

export const SettingsPage: React.FC = () => {
  const { mode, toggleMode, primaryColor, setPrimaryColor, borderRadius, setBorderRadius } = useThemeStore()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      appName: 'React Admin Pro',
      appDescription: 'A modern admin panel template',
      primaryColor: primaryColor,
      borderRadius: borderRadius,
    },
  })

  const onSubmit = async (data: SettingsFormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setPrimaryColor(data.primaryColor)
      setBorderRadius(data.borderRadius)
      
      toast.success('Settings saved successfully')
    } catch (error) {
      toast.error('Failed to save settings')
    } finally {
      setIsSubmitting(false)
    }
  }

  const colorPresets = [
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Green', value: '#10b981' },
    { name: 'Purple', value: '#8b5cf6' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Orange', value: '#f59e0b' },
    { name: 'Pink', value: '#ec4899' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your application settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* General Settings */}
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">General Settings</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              {...register('appName')}
              label="Application Name"
              error={errors.appName?.message}
            />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Application Description
              </label>
              <textarea
                {...register('appDescription')}
                rows={3}
                className="input resize-none"
                placeholder="Enter application description"
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                Save Changes
              </Button>
            </div>
          </form>
        </div>

        {/* Theme Settings */}
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Theme Settings</h3>
          <div className="space-y-6">
            {/* Dark Mode Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Theme Mode
              </label>
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={toggleMode}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    mode === 'dark' ? 'bg-primary-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      mode === 'dark' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className="text-sm text-gray-500">
                  {mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </span>
              </div>
            </div>

            {/* Primary Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Color
              </label>
              <div className="grid grid-cols-3 gap-2">
                {colorPresets.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    onClick={() => setPrimaryColor(color.value)}
                    className={`p-2 rounded-md border-2 transition-colors ${
                      primaryColor === color.value
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div
                      className="w-full h-6 rounded"
                      style={{ backgroundColor: color.value }}
                    />
                    <span className="text-xs text-gray-600 mt-1">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Border Radius */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Border Radius: {borderRadius}px
              </label>
              <input
                type="range"
                min="0"
                max="20"
                value={borderRadius}
                onChange={(e) => setBorderRadius(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* User Preferences */}
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">User Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                <p className="text-sm text-gray-500">Receive email updates</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Push Notifications</h4>
                <p className="text-sm text-gray-500">Receive push notifications</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Auto-save</h4>
                <p className="text-sm text-gray-500">Automatically save changes</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Language</h4>
                <p className="text-sm text-gray-500">Interface language</p>
              </div>
              <select className="text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                <option value="en">English</option>
                <option value="tr">Türkçe</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Time Zone</h4>
                <p className="text-sm text-gray-500">Display time zone</p>
              </div>
              <select className="text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                <option value="UTC">UTC</option>
                <option value="Europe/Istanbul">Europe/Istanbul</option>
                <option value="America/New_York">America/New_York</option>
              </select>
            </div>
          </div>
        </div>

        {/* System Information */}
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">System Information</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Version</span>
              <span className="text-sm font-medium text-gray-900">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Last Updated</span>
              <span className="text-sm font-medium text-gray-900">
                {new Date().toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Environment</span>
              <span className="text-sm font-medium text-gray-900">Development</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Database</span>
              <span className="text-sm font-medium text-gray-900">Connected</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Memory Usage</span>
              <span className="text-sm font-medium text-gray-900">2.1 GB / 8 GB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">CPU Usage</span>
              <span className="text-sm font-medium text-gray-900">15%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Disk Space</span>
              <span className="text-sm font-medium text-gray-900">45% used</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Last Backup</span>
              <span className="text-sm font-medium text-gray-900">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


