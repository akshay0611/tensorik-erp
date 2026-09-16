import { notFound } from 'next/navigation'
import { ModuleWorkspace } from '@/components/erp/module-workspace'
import { ErpShell } from '@/components/erp/erp-shell'
import { pageTitles } from '@/components/erp/mock-data'
import { HelpCenterPage, PreferencesPage, ProfilePage, SettingsPage } from '@/components/erp/utility-pages'

export default async function ModulePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const route = slug.join('/')
  if (route === 'help') return <ErpShell><HelpCenterPage /></ErpShell>
  if (route === 'settings') return <ErpShell><SettingsPage /></ErpShell>
  if (route === 'profile') return <ErpShell><ProfilePage /></ErpShell>
  if (route === 'preferences') return <ErpShell><PreferencesPage /></ErpShell>
  if (!pageTitles[route]) notFound()
  return <ErpShell><ModuleWorkspace module={route} /></ErpShell>
}
