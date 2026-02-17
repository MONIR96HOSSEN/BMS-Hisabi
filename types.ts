
export enum Role {
  OWNER = 'Owner',
  MANAGER = 'Manager',
  STAFF = 'Staff',
  ACCOUNTANT = 'Accountant'
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: Role;
  businessName: string;
  avatar?: string;
  businessAddress?: string;
  businessPhone?: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  cost: number;
  stock: number;
  minStock: number;
  categoryId: string;
  barcode?: string;
  warrantyMonths?: number;
  unit?: string;
  lot?: string;
  vatPercent?: number;
  expiryDate?: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  dueAmount: number;
}

export interface Supplier {
  id: string;
  name: string;
  phone: string;
  company: string;
  dueAmount: number;
}

export interface SaleItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Sale {
  id: string;
  date: string;
  customerId?: string;
  items: SaleItem[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  paymentMethod: 'Cash' | 'Due' | 'Digital';
  receivedAmount: number;
}

export interface Expense {
  id: string;
  date: string;
  category: string;
  amount: number;
  description: string;
}

export interface Purchase {
  id: string;
  date: string;
  supplierId: string;
  items: SaleItem[];
  total: number;
  paidAmount: number;
  status: 'Completed' | 'Pending';
}

export interface Damage {
  id: string;
  date: string;
  productId: string;
  productName: string;
  quantity: number;
  reason: string;
}

export interface ReturnRecord {
  id: string;
  date: string;
  type: 'Sale' | 'Purchase';
  originalId: string; // Sale ID or Purchase ID
  items: SaleItem[];
  totalRefund: number;
  reason: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  reminder?: string;
}

export interface DeletedItem {
  id: string;
  type: 'Product' | 'Customer' | 'Supplier' | 'Sale' | 'Purchase' | 'Expense' | 'Damage' | 'Return';
  data: any;
  deletedAt: string;
}

export type ViewType = 
  | 'dashboard' 
  | 'pos' 
  | 'purchases' 
  | 'sales-khata' 
  | 'purchases-khata' 
  | 'due-khata' 
  | 'cashbox' 
  | 'expenses'
  | 'inventory' 
  | 'expired-inventory'
  | 'stock-valuation'
  | 'reports' 
  | 'settings' 
  | 'ai-insights'
  | 'returns'
  | 'damages'
  | 'warranty'
  | 'crm'
  | 'notes'
  | 'recycle-bin'
  | 'training';
