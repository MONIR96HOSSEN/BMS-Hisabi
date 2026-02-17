
import { Product, Category, Customer, Supplier, Sale, Expense, Purchase, User, Role } from './types';
import { INITIAL_PRODUCTS, INITIAL_CATEGORIES, INITIAL_CUSTOMERS, INITIAL_SUPPLIERS } from './constants';

const DB_KEYS = {
  USER: 'smb_user',
  PRODUCTS: 'smb_products',
  CATEGORIES: 'smb_categories',
  CUSTOMERS: 'smb_customers',
  SUPPLIERS: 'smb_suppliers',
  SALES: 'smb_sales',
  EXPENSES: 'smb_expenses',
  PURCHASES: 'smb_purchases',
  DAMAGES: 'smb_damages',
  RETURNS: 'smb_returns',
  RECYCLE_BIN: 'smb_recycle_bin',
};

export const StorageService = {
  get<T>(key: string, defaultValue: T): T {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  },

  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  },

  // Mock sync functionality
  async sync(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Cloud sync completed.");
        resolve(true);
      }, 1500);
    });
  }
};

// Initial setup helper
export const initializeStorage = () => {
  if (!localStorage.getItem(DB_KEYS.PRODUCTS)) StorageService.set(DB_KEYS.PRODUCTS, INITIAL_PRODUCTS);
  if (!localStorage.getItem(DB_KEYS.CATEGORIES)) StorageService.set(DB_KEYS.CATEGORIES, INITIAL_CATEGORIES);
  if (!localStorage.getItem(DB_KEYS.CUSTOMERS)) StorageService.set(DB_KEYS.CUSTOMERS, INITIAL_CUSTOMERS);
  if (!localStorage.getItem(DB_KEYS.SUPPLIERS)) StorageService.set(DB_KEYS.SUPPLIERS, INITIAL_SUPPLIERS);
  if (!localStorage.getItem(DB_KEYS.SALES)) StorageService.set(DB_KEYS.SALES, []);
  if (!localStorage.getItem(DB_KEYS.EXPENSES)) StorageService.set(DB_KEYS.EXPENSES, []);
  if (!localStorage.getItem(DB_KEYS.PURCHASES)) StorageService.set(DB_KEYS.PURCHASES, []);
  if (!localStorage.getItem(DB_KEYS.DAMAGES)) StorageService.set(DB_KEYS.DAMAGES, []);
  if (!localStorage.getItem(DB_KEYS.RETURNS)) StorageService.set(DB_KEYS.RETURNS, []);
  if (!localStorage.getItem(DB_KEYS.RECYCLE_BIN)) StorageService.set(DB_KEYS.RECYCLE_BIN, []);
};
