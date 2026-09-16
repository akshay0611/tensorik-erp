export type StatusTone = 'blue' | 'green' | 'amber' | 'red' | 'slate'

export const customers = ['Northstar Fabrication', 'Meridian Industrial', 'Cobalt Systems', 'Atlas Components', 'Pioneer Robotics']
export const suppliers = ['Vertex Metals', 'Nova Industrial Supply', 'Harbor Packaging', 'Eastline Chemicals', 'Summit Components']
export const products = [
  { sku: 'APX-8842', name: 'Hydraulic Coupling HC-440', category: 'Hardware', quantity: 12, reorder: 24, warehouse: 'North Warehouse', cost: 84 },
  { sku: 'APX-2910', name: 'Servo Drive Module SD-18', category: 'Electronics', quantity: 8, reorder: 18, warehouse: 'Central Warehouse', cost: 460 },
  { sku: 'APX-5041', name: 'Grade 8 Fastener Kit', category: 'Raw Materials', quantity: 16, reorder: 30, warehouse: 'East Warehouse', cost: 36 },
  { sku: 'APX-1172', name: 'Industrial Control Panel', category: 'Electronics', quantity: 74, reorder: 20, warehouse: 'North Warehouse', cost: 1260 },
  { sku: 'APX-6538', name: 'Protective Transit Crate', category: 'Packaging', quantity: 142, reorder: 60, warehouse: 'South Warehouse', cost: 28 },
  { sku: 'APX-7781', name: 'Coolant Concentrate 20L', category: 'Chemicals', quantity: 31, reorder: 25, warehouse: 'West Warehouse', cost: 118 },
]
export const employees = [
  { id: 'EMP-1042', name: 'Maya Chen', role: 'VP, Operations', department: 'Operations', location: 'Chicago, IL', joined: 'Mar 12, 2019', type: 'Full-time', status: 'Active', manager: 'Akshay Kumar', email: 'maya.chen@apex-mfg.example' },
  { id: 'EMP-1088', name: 'Daniel Brooks', role: 'Finance Controller', department: 'Finance', location: 'Austin, TX', joined: 'Jun 04, 2020', type: 'Full-time', status: 'Active', manager: 'Akshay Kumar', email: 'daniel.brooks@apex-mfg.example' },
  { id: 'EMP-1127', name: 'Priya Nair', role: 'Sales Director', department: 'Sales', location: 'Boston, MA', joined: 'Jan 18, 2021', type: 'Full-time', status: 'Active', manager: 'Maya Chen', email: 'priya.nair@apex-mfg.example' },
  { id: 'EMP-1174', name: 'Jordan Ellis', role: 'People Operations Lead', department: 'HR', location: 'Chicago, IL', joined: 'Aug 22, 2022', type: 'Full-time', status: 'On Leave', manager: 'Akshay Kumar', email: 'jordan.ellis@apex-mfg.example' },
  { id: 'EMP-1203', name: 'Marco Ruiz', role: 'Manufacturing Engineer', department: 'Engineering', location: 'Detroit, MI', joined: 'Nov 09, 2023', type: 'Full-time', status: 'Probation', manager: 'Maya Chen', email: 'marco.ruiz@apex-mfg.example' },
]
export const expenses = [
  { id: 'EXP-4821', date: 'Sep 16, 2026', employee: 'Maya Chen', category: 'Travel', description: 'Supplier summit travel', amount: 1840, method: 'Corporate card', status: 'Pending' },
  { id: 'EXP-4818', date: 'Sep 15, 2026', employee: 'Daniel Brooks', category: 'Software', description: 'Financial planning license', amount: 680, method: 'ACH', status: 'Approved' },
  { id: 'EXP-4812', date: 'Sep 13, 2026', employee: 'Priya Nair', category: 'Marketing', description: 'Industry conference booth', amount: 3250, method: 'Corporate card', status: 'Reimbursed' },
  { id: 'EXP-4799', date: 'Sep 10, 2026', employee: 'Marco Ruiz', category: 'Operations', description: 'Calibration supplies', amount: 420, method: 'Corporate card', status: 'Draft' },
]
export const invoices = [
  { id: 'INV-10482', customer: 'Northstar Fabrication', issue: 'Sep 16, 2026', due: 'Oct 16, 2026', amount: 48620, payment: 'Pending', status: 'Sent', order: 'SO-24081' },
  { id: 'INV-10479', customer: 'Meridian Industrial', issue: 'Sep 12, 2026', due: 'Oct 12, 2026', amount: 31240.5, payment: 'Paid', status: 'Paid', order: 'SO-24080' },
  { id: 'INV-10473', customer: 'Cobalt Systems', issue: 'Sep 07, 2026', due: 'Oct 07, 2026', amount: 18905, payment: 'Partially Paid', status: 'Partially Paid', order: 'SO-24079' },
  { id: 'INV-10461', customer: 'Atlas Components', issue: 'Aug 28, 2026', due: 'Sep 12, 2026', amount: 12480.75, payment: 'Overdue', status: 'Overdue', order: 'SO-24078' },
]
export const orders = [
  { id: 'SO-24081', customer: 'Northstar Fabrication', date: 'Sep 16, 2026', items: 8, amount: 48620, payment: 'Pending', fulfillment: 'Processing' },
  { id: 'SO-24080', customer: 'Meridian Industrial', date: 'Sep 15, 2026', items: 4, amount: 31240.5, payment: 'Paid', fulfillment: 'Shipped' },
  { id: 'SO-24079', customer: 'Cobalt Systems', date: 'Sep 14, 2026', items: 12, amount: 18905, payment: 'Partially Paid', fulfillment: 'Delivered' },
  { id: 'SO-24078', customer: 'Atlas Components', date: 'Sep 13, 2026', items: 3, amount: 12480.75, payment: 'Paid', fulfillment: 'Processing' },
]
export const purchaseOrders = [
  { id: 'PO-7731', supplier: 'Vertex Metals', date: 'Sep 16, 2026', delivery: 'Sep 28, 2026', items: 5, total: 28400, status: 'Sent' },
  { id: 'PO-7728', supplier: 'Nova Industrial Supply', date: 'Sep 13, 2026', delivery: 'Sep 22, 2026', items: 9, total: 18750, status: 'Partially Received' },
  { id: 'PO-7719', supplier: 'Harbor Packaging', date: 'Sep 08, 2026', delivery: 'Sep 19, 2026', items: 3, total: 6240, status: 'Pending Approval' },
  { id: 'PO-7704', supplier: 'Summit Components', date: 'Aug 31, 2026', delivery: 'Sep 14, 2026', items: 7, total: 41200, status: 'Received' },
]
export const journalEntries = [
  { id: 'JE-90218', date: 'Sep 16, 2026', account: 'Sales Revenue', description: 'Product shipment recognized', reference: 'SO-24081', debit: 0, credit: 48620, status: 'Posted' },
  { id: 'JE-90217', date: 'Sep 15, 2026', account: 'Accounts Receivable', description: 'Invoice issued to Meridian Industrial', reference: 'INV-10479', debit: 31240.5, credit: 0, status: 'Posted' },
  { id: 'JE-90212', date: 'Sep 13, 2026', account: 'COGS', description: 'Material cost allocation', reference: 'SO-24079', debit: 9420, credit: 0, status: 'Posted' },
  { id: 'JE-90204', date: 'Sep 10, 2026', account: 'Marketing Expense', description: 'Conference booth deposit', reference: 'EXP-4812', debit: 3250, credit: 0, status: 'Pending' },
]
export const auditEvents = [
  { time: 'Sep 16, 10:42 AM', user: 'Akshay Kumar', action: 'Created purchase order', module: 'Procurement', resource: 'PO-7731', device: '10.24.8.16 / Chrome', status: 'Success' },
  { time: 'Sep 16, 10:18 AM', user: 'Daniel Brooks', action: 'Updated invoice', module: 'Finance', resource: 'INV-10482', device: '10.24.8.22 / Edge', status: 'Success' },
  { time: 'Sep 16, 09:54 AM', user: 'Jordan Ellis', action: 'Changed user role', module: 'Administration', resource: 'EMP-1174', device: '10.24.8.31 / Safari', status: 'Warning' },
  { time: 'Sep 16, 09:20 AM', user: 'Marco Ruiz', action: 'Updated inventory quantity', module: 'Inventory', resource: 'APX-2910', device: '10.24.8.45 / Chrome', status: 'Failed' },
]
export const users = [
  { name: 'Akshay Kumar', email: 'akshay.kumar@apex-mfg.example', role: 'Administrator', department: 'Executive', active: '2 min ago', status: 'Active' },
  { name: 'Daniel Brooks', email: 'daniel.brooks@apex-mfg.example', role: 'Finance Controller', department: 'Finance', active: '18 min ago', status: 'Active' },
  { name: 'Priya Nair', email: 'priya.nair@apex-mfg.example', role: 'Sales Manager', department: 'Sales', active: '1 hour ago', status: 'Active' },
  { name: 'Jordan Ellis', email: 'jordan.ellis@apex-mfg.example', role: 'HR Manager', department: 'HR', active: 'Yesterday', status: 'Pending' },
]
export const money = (value: number) => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
export const toneFor = (value: string): StatusTone => value.toLowerCase().includes('paid') || ['Active', 'Approved', 'Reimbursed', 'Received', 'Delivered', 'Success', 'Posted', 'In Stock'].includes(value) ? 'green' : value.toLowerCase().includes('overdue') || ['Failed', 'Critical', 'Out of Stock', 'Rejected'].includes(value) ? 'red' : ['Pending', 'Draft', 'Warning', 'Low Stock', 'On Leave', 'Probation', 'Partially Received', 'Partially Paid', 'Processing', 'Sent'].includes(value) ? 'amber' : 'blue'
export const inventoryStatus = (p: typeof products[number]) => p.quantity === 0 ? 'Out of Stock' : p.quantity < p.reorder / 2 ? 'Critical' : p.quantity < p.reorder ? 'Low Stock' : 'In Stock'
export const pageTitles: Record<string, [string, string, string]> = {
  'finance/general-ledger': ['General Ledger', 'Journal entries, financial summaries, and account activity.', 'New Journal Entry'], 'finance/expenses': ['Expenses', 'Track, review, and manage business expenses.', 'Add Expense'], 'finance/invoices': ['Invoices', 'Manage customer invoices, payments, and outstanding balances.', 'Create Invoice'], 'operations/procurement': ['Procurement', 'Manage purchase orders, suppliers, deliveries, and business spend.', 'New Purchase Order'], 'operations/inventory': ['Inventory', 'Monitor stock levels, warehouses, reorder points, and inventory value.', 'Add Product'], 'operations/sales': ['Sales', 'Manage orders, customers, revenue, and sales performance.', 'New Order'], 'people/hr': ['HR & Payroll', 'Manage employee records, workforce data, payroll, and people operations.', 'Add Employee'], 'administration/users': ['Users & Roles', 'Manage workspace users, roles, and access permissions.', 'Invite User'], 'administration/audit-logs': ['Audit Logs', 'A secure record of activity across the workspace.', 'Export Logs'],
}
export const metricSets: Record<string, [string, string, string, string][]> = {
  'finance/general-ledger': [['Total Revenue','$2.84M','↑ 12.8%','vs. previous period'],['Total Expenses','$1.16M','↑ 4.6%','vs. previous period'],['Net Income','$1.68M','↑ 18.2%','vs. previous period'],['Journal Entries','2,418','↑ 8.1%','this fiscal year']],
  'finance/expenses': [['Total Expenses','$42,680','↑ 8.4%','this month'],['Pending Approval','$6,190','12 items','needs review'],['Approved This Month','$31,240','↑ 14.2%','vs. last month'],['Reimbursed','$18,420','34 claims','this month']],
  'finance/invoices': [['Total Invoiced','$2.84M','↑ 12.8%','this fiscal year'],['Paid','$1.96M','69.1%','collection rate'],['Outstanding','$684,210','24.1%','of total invoiced'],['Overdue','$94,680','7 invoices','needs attention']],
  'operations/procurement': [['Open Purchase Orders','18','6 this week','in progress'],['Total Spend','$412,680','↓ 3.2%','vs. previous period'],['Pending Deliveries','7','3 this week','expected soon'],['Active Suppliers','32','↑ 4.1%','verified partners']],
  'operations/inventory': [['Total SKUs','1,284','↑ 6.2%','active products'],['Inventory Value','$1.86M','↑ 4.8%','at cost'],['Low Stock Items','18','5 critical','needs reorder'],['Warehouses','5','98.4%','capacity utilized']],
  'operations/sales': [['Revenue','$2.84M','↑ 12.8%','this fiscal year'],['Total Orders','1,284','↑ 8.4%','vs. previous period'],['Average Order Value','$2,211','↑ 4.1%','per order'],['Active Customers','186','↑ 9.3%','this quarter']],
  'people/hr': [['Total Headcount','248','↑ 6.4%','this fiscal year'],['Monthly Payroll','$1.24M','↑ 3.8%','current run'],['New Hires','18','6 this month','year to date'],['Average Tenure','3.8 yrs','↑ 0.4 yrs','company average']],
  'administration/users': [['Total Users','86','↑ 8.2%','workspace members'],['Active Users','79','91.9%','of total users'],['Pending Invites','4','2 this week','awaiting response'],['Roles','6','100%','configured']],
  'administration/audit-logs': [['Events Today','1,284','↑ 12.1%','vs. daily average'],['Users Active','42','right now','across workspace'],['Critical Actions','18','3 unresolved','this week'],['Failed Actions','7','↓ 28.4%','vs. previous week']],
}
export const datasets: Record<string, any[]> = { 'finance/general-ledger': journalEntries, 'finance/expenses': expenses, 'finance/invoices': invoices, 'operations/procurement': purchaseOrders, 'operations/inventory': products, 'operations/sales': orders, 'people/hr': employees, 'administration/users': users, 'administration/audit-logs': auditEvents }
  
