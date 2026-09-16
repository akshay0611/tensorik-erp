'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getStoredState, clearSignInState, type UserProfile } from './profile-state'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Activity, AlertTriangle, Bell, Boxes, BriefcaseBusiness, ChevronDown, ChevronLeft, ChevronRight,
  ClipboardList, FileChartColumn, FileText, Gauge, HelpCircle, LayoutDashboard, Menu, Package,
  PanelLeft, Search, Settings2, ShieldCheck, ShoppingCart, TrendingDown, TrendingUp, Users, X,
} from 'lucide-react'

const navGroups = [
  { label: 'OVERVIEW', items: [{ label: 'Dashboard', href: '/', icon: LayoutDashboard }] },
  { label: 'FINANCE', items: [{ label: 'General Ledger', href: '/finance/general-ledger', icon: FileChartColumn }, { label: 'Expenses', href: '/finance/expenses', icon: TrendingDown }, { label: 'Invoices', href: '/finance/invoices', icon: FileText }] },
  { label: 'OPERATIONS', items: [{ label: 'Procurement', href: '/operations/procurement', icon: ShoppingCart }, { label: 'Inventory', href: '/operations/inventory', icon: Boxes }, { label: 'Sales', href: '/operations/sales', icon: TrendingUp }] },
  { label: 'PEOPLE', items: [{ label: 'HR & Payroll', href: '/people/hr', icon: Users }] },
  { label: 'ADMINISTRATION', items: [{ label: 'Users & Roles', href: '/administration/users', icon: ShieldCheck }, { label: 'Audit Logs', href: '/administration/audit-logs', icon: Activity }] },
]

export function ErpShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [user, setUser] = useState<UserProfile>(() => getStoredState().user)
  const router = useRouter()
  useEffect(() => {
    const sync = () => setUser(getStoredState().user)
    window.addEventListener('storage', sync)
    return () => window.removeEventListener('storage', sync)
  }, [])
  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')
  useEffect(() => {
    if (!profileOpen) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setProfileOpen(false) }
    const closeOnOutside = (event: MouseEvent) => { if (!(event.target as HTMLElement).closest('[data-profile-menu]')) setProfileOpen(false) }
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('mousedown', closeOnOutside)
    return () => { document.removeEventListener('keydown', closeOnEscape); document.removeEventListener('mousedown', closeOnOutside) }
  }, [profileOpen])

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-[#152238]">
      <aside className={`fixed inset-y-0 left-0 z-40 hidden border-r border-[#e4e9f0] bg-white transition-all duration-200 lg:flex lg:flex-col ${collapsed ? 'w-[76px]' : 'w-[248px]'}`}>
        <Sidebar collapsed={collapsed} isActive={isActive} />
        <button onClick={() => setCollapsed(!collapsed)} className="absolute -right-3 top-[76px] flex h-6 w-6 items-center justify-center rounded-full border border-[#dce3ec] bg-white text-[#64748b] shadow-sm" aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>{collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}</button>
      </aside>
      {mobileOpen && <div className="fixed inset-0 z-40 bg-[#132238]/30 lg:hidden" onClick={() => setMobileOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col bg-white shadow-xl transition-transform lg:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}><div className="flex justify-end p-3"><button onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X size={20} /></button></div><Sidebar isActive={isActive} /></aside>
      <div className={`transition-[margin] duration-200 ${collapsed ? 'lg:ml-[76px]' : 'lg:ml-[248px]'}`}>
        <header className="sticky top-0 z-30 flex h-[70px] items-center justify-between border-b border-[#e4e9f0] bg-white/95 px-4 backdrop-blur sm:px-7">
          <div className="flex items-center gap-3"><button onClick={() => setMobileOpen(true)} className="rounded-lg p-2 text-[#64748b] hover:bg-[#f3f6fa] lg:hidden" aria-label="Open navigation"><Menu size={20} /></button><button onClick={() => setCollapsed(!collapsed)} className="hidden rounded-lg p-2 text-[#64748b] hover:bg-[#f3f6fa] lg:block" aria-label="Toggle sidebar"><PanelLeft size={19} /></button><button onClick={() => setSearchOpen(!searchOpen)} className="flex h-10 w-[210px] items-center gap-2 rounded-lg border border-[#e1e7ef] bg-[#f8fafc] px-3 text-sm text-[#8491a5] sm:w-[300px]"><Search size={16} /><span>Search anything</span><kbd className="ml-auto hidden rounded border border-[#dce3ec] bg-white px-1.5 py-0.5 text-[10px] text-[#97a3b4] sm:block">⌘ K</kbd></button></div>
          <div className="flex items-center gap-2 sm:gap-5"><div className="hidden items-center gap-2 border-r border-[#e5eaf0] pr-5 text-sm sm:flex"><span className="h-2 w-2 rounded-full bg-[#2e9d72]" /><span className="text-[#526176]">FY 2026</span><ChevronDown size={14} className="text-[#94a0b1]" /></div><button className="relative rounded-lg p-2 text-[#627187] hover:bg-[#f3f6fa]" aria-label="Notifications"><Bell size={19} /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#3478d4]" /></button><div className="relative" data-profile-menu><button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-[#f3f6fa]"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dbeafe] text-xs font-bold text-[#2161b5]">AK</span><span className="hidden text-left sm:block"><span className="block text-xs font-semibold text-[#26364d]">{user.name}</span><span className="block text-[11px] text-[#8491a5]">{user.role}</span></span><ChevronDown size={14} className="hidden text-[#94a0b1] sm:block" /></button>{profileOpen && <div className="absolute right-0 top-12 w-48 rounded-xl border border-[#e3e8ef] bg-white p-1.5 shadow-lg"><div className="border-b border-[#eef1f5] px-3 py-2"><p className="text-xs font-semibold">Akshay Kumar</p><p className="text-[11px] text-[#8491a5]">Administrator</p></div><button onClick={() => { setProfileOpen(false); router.push('/profile') }} className="w-full rounded-md px-3 py-2 text-left text-sm text-[#536278] hover:bg-[#f5f8fb]">Profile</button><button onClick={() => { setProfileOpen(false); router.push('/preferences') }} className="w-full rounded-md px-3 py-2 text-left text-sm text-[#536278] hover:bg-[#f5f8fb]">Preferences</button><button onClick={() => { setProfileOpen(false); if (window.confirm('You will be signed out of this ERP workspace.')) { clearSignInState(); router.push('/sign-in') } }} className="w-full rounded-md px-3 py-2 text-left text-sm text-[#c44747] hover:bg-[#fff5f5]">Sign out</button></div>}</div></div>
        </header>
        {searchOpen && <div className="absolute left-1/2 top-[78px] z-40 w-[min(520px,calc(100%-32px))] -translate-x-1/2 rounded-xl border border-[#e1e7ef] bg-white p-3 shadow-xl"><div className="flex items-center gap-2 border-b border-[#eef1f5] px-2 pb-3 text-sm text-[#8491a5]"><Search size={16} /> Search orders, invoices, employees, products...</div><p className="px-2 py-4 text-center text-xs text-[#94a0b1]">Start typing to search across your workspace</p></div>}
        <main className="mx-auto max-w-[1600px] p-4 sm:p-7">{children}</main>
      </div>
    </div>
  )
}

function Sidebar({ collapsed = false, isActive }: { collapsed?: boolean; isActive: (href: string) => boolean }) {
  return <><div className={`flex h-[70px] items-center border-b border-[#eef1f5] px-5 ${collapsed ? 'justify-center px-0' : 'gap-3'}`}><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#216bd2] text-white"><Gauge size={19} /></div>{!collapsed && <div><p className="text-[15px] font-bold tracking-tight text-[#152238]">TENSORIK</p><p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8491a5]">Enterprise ERP</p></div>}</div><nav className={`flex-1 space-y-5 overflow-y-auto py-6 ${collapsed ? 'px-2' : 'px-3'}`}>{navGroups.map(group => <div key={group.label}><p className={`mb-2 px-3 text-[10px] font-bold tracking-[0.14em] text-[#9aa6b6] ${collapsed ? 'sr-only' : ''}`}>{group.label}</p><div className="space-y-1">{group.items.map(item => { const Active = item.icon; return <Link key={item.href} href={item.href} title={collapsed ? item.label : undefined} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-colors ${isActive(item.href) ? 'bg-[#eaf2ff] text-[#2161b5]' : 'text-[#5d6b7f] hover:bg-[#f5f8fb] hover:text-[#263b59]'} ${collapsed ? 'justify-center px-0' : ''}`}><Active size={17} strokeWidth={isActive(item.href) ? 2.2 : 1.8} />{!collapsed && item.label}</Link> })}</div></div>)}</nav>{!collapsed && <div className="border-t border-[#eef1f5] p-4"><Link href="/help" className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs hover:bg-[#f5f8fb] ${isActive('/help') ? 'bg-[#eaf2ff] text-[#2161b5]' : 'text-[#718096]'}`}><HelpCircle size={16} /> Help Center</Link><Link href="/settings" className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs hover:bg-[#f5f8fb] ${isActive('/settings') ? 'bg-[#eaf2ff] text-[#2161b5]' : 'text-[#718096]'}`}><Settings2 size={16} /> Settings</Link></div>}</>
}

export function PageHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description: string; action?: React.ReactNode }) { return <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div>{eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#70829b]">{eyebrow}</p>}<h1 className="text-[26px] font-bold tracking-[-0.03em] text-[#152238]">{title}</h1><p className="mt-1.5 text-sm text-[#718096]">{description}</p></div>{action}</div> }

export const IconButton = ({ children, label }: { children: React.ReactNode; label: string }) => <button aria-label={label} className="rounded-lg border border-[#e0e6ee] p-2 text-[#66768c] hover:bg-[#f5f8fb]">{children}</button>
export const Status = ({ children, tone = 'blue' }: { children: React.ReactNode; tone?: 'blue'|'green'|'amber'|'red'|'slate' }) => <span className={`inline-flex rounded-full px-2 py-1 text-[10px] font-semibold ${tone === 'green' ? 'bg-[#e8f7f0] text-[#21815b]' : tone === 'amber' ? 'bg-[#fff5dc] text-[#a66b00]' : tone === 'red' ? 'bg-[#ffeded] text-[#c44747]' : tone === 'slate' ? 'bg-[#f0f3f7] text-[#617086]' : 'bg-[#eaf2ff] text-[#2869bb]'}`}>{children}</span>
export const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => <section className={`rounded-xl border border-[#e3e8ef] bg-white ${className}`}>{children}</section>
export const Button = ({ children, variant = 'primary', onClick, type = 'button' }: { children: React.ReactNode; variant?: 'primary'|'secondary'; onClick?: () => void; type?: 'button' | 'submit' }) => <button type={type} onClick={onClick} className={`inline-flex h-9 items-center gap-2 rounded-lg px-3.5 text-xs font-semibold transition-colors ${variant === 'primary' ? 'bg-[#216bd2] text-white hover:bg-[#1b5dbb]' : 'border border-[#dfe6ee] bg-white text-[#56657a] hover:bg-[#f6f8fb]'}`}>{children}</button>

export const data = { orders: [{ id: 'SO-24081', customer: 'Northstar Fabrication', date: 'Sep 16, 2026', amount: '$48,620.00', status: 'Processing' }, { id: 'SO-24080', customer: 'Meridian Industrial', date: 'Sep 15, 2026', amount: '$31,240.50', status: 'Shipped' }, { id: 'SO-24079', customer: 'Cobalt Systems', date: 'Sep 14, 2026', amount: '$18,905.00', status: 'Delivered' }, { id: 'SO-24078', customer: 'Atlas Components', date: 'Sep 13, 2026', amount: '$12,480.75', status: 'Processing' }] }

export function EmptyModule({ title, description, icon: Icon = ClipboardList }: { title: string; description: string; icon?: React.ElementType }) { return <Card className="flex min-h-[360px] flex-col items-center justify-center p-8 text-center"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf2ff] text-[#216bd2]"><Icon size={22} /></div><h2 className="text-base font-semibold text-[#253650]">{title}</h2><p className="mt-2 max-w-sm text-sm leading-6 text-[#7a8798]">{description}</p><Button variant="secondary">Explore module</Button></Card> }

export { AlertTriangle, Package, BriefcaseBusiness }
