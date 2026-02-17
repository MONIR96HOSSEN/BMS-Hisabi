
import React from 'react';
import { 
  Home, 
  ShoppingCart, 
  Package, 
  Truck, 
  Users, 
  BarChart3, 
  Settings, 
  BookOpen,
  Calculator,
  Wallet,
  History,
  RotateCcw,
  AlertTriangle,
  ShieldCheck,
  CircleDollarSign,
  Zap,
  GraduationCap,
  StickyNote,
  RefreshCcw
} from 'lucide-react';
import { Product, Category, Customer, Supplier } from './types';

export const NAVIGATION_ITEMS = [
  // Top Section
  { id: 'dashboard', label: 'হোম', icon: <Home size={20} />, section: 'top' },
  { id: 'purchases', label: 'কেনা', icon: <Truck size={20} />, section: 'top' },
  { id: 'pos', label: 'বেচা', icon: <ShoppingCart size={20} />, section: 'top' },
  { id: 'cashbox', label: 'ক্যাশবক্স', icon: <CircleDollarSign size={20} />, section: 'top' },
  
  // Bottom Section
  { id: 'purchases-khata', label: 'কেনার খাতা', icon: <History size={20} />, section: 'bottom' },
  { id: 'sales-khata', label: 'বেচার খাতা', icon: <History size={20} />, section: 'bottom' },
  { id: 'due-khata', label: 'বাকির খাতা', icon: <BookOpen size={20} />, section: 'bottom' },
  { id: 'expenses', label: 'খরচের খাতা', icon: <Wallet size={20} />, section: 'bottom' },
  { id: 'returns', label: 'রিটার্ন খাতা', icon: <RefreshCcw size={20} />, section: 'bottom' },
  { id: 'damages', label: 'অপচয়/ড্যামেজ', icon: <AlertTriangle size={20} />, section: 'bottom' },
  { id: 'crm', label: 'যোগাযোগ', icon: <Users size={20} />, section: 'bottom' },
  { id: 'inventory', label: 'প্রোডাক্ট লিস্ট', icon: <Package size={20} />, section: 'bottom' },
  { id: 'stock-valuation', label: 'স্টকের হিসাব', icon: <Calculator size={20} />, section: 'bottom' },
  { id: 'reports', label: 'ব্যবসার রিপোর্ট', icon: <BarChart3 size={20} />, section: 'bottom' },
  { id: 'warranty', label: 'ওয়ারেন্টি', icon: <ShieldCheck size={20} />, section: 'bottom' },
  { id: 'settings', label: 'সেটিংস', icon: <Settings size={20} />, section: 'bottom' },
  { id: 'notes', label: 'নোট ও রিমাইন্ডার', icon: <StickyNote size={20} />, section: 'bottom' },
  { id: 'training', label: 'অ্যাপ ট্রেনিং', icon: <GraduationCap size={20} />, section: 'bottom' },
] as const;

export const INITIAL_CATEGORIES: Category[] = [
  { id: '1', name: 'Electronics' },
  { id: '2', name: 'Groceries' },
  { id: '3', name: 'Clothing' },
];

export const INITIAL_PRODUCTS: Product[] = [
  { id: 'p1', name: 'Apple iPhone 15', sku: 'IPH15-128', price: 999, cost: 800, stock: 12, minStock: 5, categoryId: '1', warrantyMonths: 12 },
  { id: 'p2', name: 'Organic Milk 1L', sku: 'MILK-ORG', price: 3.5, cost: 2.2, stock: 45, minStock: 10, categoryId: '2', warrantyMonths: 0 },
  { id: 'p3', name: 'Cotton T-Shirt', sku: 'TSHIRT-L', price: 15, cost: 7, stock: 3, minStock: 5, categoryId: '3', warrantyMonths: 1 },
];

export const INITIAL_CUSTOMERS: Customer[] = [
  { id: 'c1', name: 'Anisur Rahman', phone: '01711223344', email: 'anis@example.com', dueAmount: 500 },
  { id: 'c2', name: 'Rahim Uddin', phone: '01855667788', dueAmount: 0 },
];

export const INITIAL_SUPPLIERS: Supplier[] = [
  { id: 's1', name: 'Tech Distribution Ltd', phone: '0299887766', company: 'TechDist', dueAmount: 1500 },
];
