// Client-side state management for profile, preferences, and settings
// This uses localStorage for persistence across sessions

export type UserProfile = {
  name: string
  email: string
  role: string
  department: string
  phone: string
  location: string
  status: string
}

export type PreferencesState = {
  theme: 'system' | 'light' | 'dark'
  emailNotifications: boolean
  inAppNotifications: boolean
  defaultLandingPage: string
  defaultReportingPeriod: string
  currency: string
  dateFormat: string
}

export type SettingsState = {
  workspaceName: string
  fiscalYear: string
  defaultCurrency: string
  timezone: string
  emailNotifications: boolean
  inAppNotifications: boolean
  sessionTimeout: number
  requireConfirmation: boolean
  theme: 'system' | 'light' | 'dark'
}

export type AppState = {
  user: UserProfile
  preferences: PreferencesState
  settings: SettingsState
  isSignedIn: boolean
}

const DEFAULT_USER: UserProfile = {
  name: 'Akshay Kumar',
  email: 'admin@tensorik.in',
  role: 'Administrator',
  department: 'Administration',
  phone: '+91 98765 43210',
  location: 'Mumbai, India',
  status: 'Active',
}

const DEFAULT_PREFERENCES: PreferencesState = {
  theme: 'system',
  emailNotifications: true,
  inAppNotifications: true,
  defaultLandingPage: '/',
  defaultReportingPeriod: 'This Month',
  currency: 'USD',
  dateFormat: 'DD/MM/YYYY',
}

const DEFAULT_SETTINGS: SettingsState = {
  workspaceName: 'Apex Manufacturing Group',
  fiscalYear: 'FY 2026',
  defaultCurrency: 'USD',
  timezone: 'Asia/Kolkata',
  emailNotifications: true,
  inAppNotifications: true,
  sessionTimeout: 30,
  requireConfirmation: true,
  theme: 'system',
}

const STORAGE_KEY = 'tensorik-app-state'

export const getStoredState = (): AppState => {
  if (typeof window === 'undefined') {
    return {
      user: DEFAULT_USER,
      preferences: DEFAULT_PREFERENCES,
      settings: DEFAULT_SETTINGS,
      isSignedIn: true,
    }
  }

  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return getDefaultState()
    }
  }

  return getDefaultState()
}

export const getDefaultState = (): AppState => ({
  user: DEFAULT_USER,
  preferences: DEFAULT_PREFERENCES,
  settings: DEFAULT_SETTINGS,
  isSignedIn: true,
})

export const saveState = (state: AppState) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }
}

export const clearSignInState = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY)
  }
}
