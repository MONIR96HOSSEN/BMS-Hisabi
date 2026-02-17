
import React, { useState, useEffect } from 'react';
import { Menu, Bell } from 'lucide-react';
import { ViewType, User, Role, Product, Sale, Customer, Expense, Supplier, Purchase, Damage, ReturnRecord, DeletedItem } from './types';
import { StorageService, initializeStorage } from './store';

// Components
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import POS from './components/POS';
import Inventory from './components/Inventory';
import CRM from './components/CRM';
import Cashbox from './components/Cashbox';
import Reports from './components/Reports';
import AIInsights from './components/AIInsights';
import Settings from './components/Settings';
import Purchases from './components/Purchases';
import SalesKhata from './components/SalesKhata';
import PurchasesKhata from './components/PurchasesKhata';
import DueKhata from './components/DueKhata';
import Returns from './components/Returns';
import Damages from './components/Damages';
import Warranty from './components/Warranty';
import Notes from './components/Notes';
import Expenses from './components/Expenses';
import StockValuation from './components/StockValuation';
import RecycleBin from './components/RecycleBin';
import Login from './components/Login';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // App Data State
  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [sales, setSales] = useState<Sale[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [damages, setDamages] = useState<Damage[]>([]);
  const [returns, setReturns] = useState<ReturnRecord[]>([]);
  const [recycleBin, setRecycleBin] = useState<DeletedItem[]>([]);

  useEffect(() => {
    initializeStorage();
    const isAuth = StorageService.get<boolean>('smb_is_auth', false);
    setIsAuthenticated(isAuth);

    const currentUser = StorageService.get<User | null>('smb_user', {
      id: 'u1',
      name: 'হাসান আহমেদ',
      email: 'monir@softsellzone.com',
      password: '01518644624',
      role: Role.OWNER,
      businessName: 'স্মার্ট বিজনেস ম্যানেজার',
      businessAddress: 'মিরপুর, ঢাকা, বাংলাদেশ',
      businessPhone: '০১৭XXXXXXXX'
    });
    setUser(currentUser);
    
    // Load local data
    setProducts(StorageService.get('smb_products', []));
    setSales(StorageService.get('smb_sales', []));
    setCustomers(StorageService.get('smb_customers', []));
    setExpenses(StorageService.get('smb_expenses', []));
    setSuppliers(StorageService.get('smb_suppliers', []));
    setPurchases(StorageService.get('smb_purchases', []));
    setDamages(StorageService.get('smb_damages', []));
    setReturns(StorageService.get('smb_returns', []));
    setRecycleBin(StorageService.get('smb_recycle_bin', []));

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    StorageService.set('smb_is_auth', true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    StorageService.set('smb_is_auth', false);
  };

  const renderContent = () => {
    const props = {
      products, setProducts,
      sales, setSales,
      customers, setCustomers,
      expenses, setExpenses,
      suppliers, setSuppliers,
      purchases, setPurchases,
      damages, setDamages,
      returns, setReturns,
      recycleBin, setRecycleBin,
      user: user!,
      setActiveView
    };

    switch (activeView) {
      case 'dashboard': return <Dashboard {...props} />;
      case 'pos': return <POS {...props} />;
      case 'purchases': return <Purchases {...props} />;
      case 'sales-khata': return <SalesKhata {...props} />;
      case 'purchases-khata': return <PurchasesKhata {...props} />;
      case 'due-khata': return <DueKhata customers={customers} suppliers={suppliers} setCustomers={setCustomers} setSuppliers={setSuppliers} />;
      case 'crm': return <CRM {...props} />;
      case 'cashbox': return <Cashbox {...props} />;
      case 'expenses': return <Expenses {...props} />;
      case 'inventory': return <Inventory {...props} initialFilter="all" />;
      case 'expired-inventory': return <Inventory {...props} initialFilter="expired" />;
      case 'stock-valuation': return <StockValuation products={products} />;
      case 'reports': return <Reports {...props} />;
      case 'ai-insights': return <AIInsights {...props} />;
      case 'settings': return <Settings {...props} />;
      case 'returns': return <Returns {...props} />;
      case 'damages': return <Damages {...props} />;
      case 'warranty': return <Warranty {...props} />;
      case 'notes': return <Notes />;
      case 'recycle-bin': return <RecycleBin {...props} />;
      case 'training': return <div className="p-8 text-center text-slate-500">অ্যাপ ট্রেনিং মডিউল শিঘ্রই আসছে...</div>;
      default: return <Dashboard {...props} />;
    }
  };

  if (!isAuthenticated) return <Login onLogin={handleLoginSuccess} />;
  if (!user) return <div className="flex items-center justify-center h-screen bg-[#f1f3f5]">লোড হচ্ছে...</div>;

  return (
    <div className="flex h-screen bg-[#f1f3f5] overflow-hidden">
      <div className={`hidden md:block transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <Sidebar 
          activeView={activeView} 
          setActiveView={setActiveView} 
          isCollapsed={!isSidebarOpen} 
          toggleCollapse={() => setIsSidebarOpen(!isSidebarOpen)}
          onLogout={handleLogout}
        />
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6 shrink-0 no-print">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={20} className="text-slate-600" />
            </button>
            <h1 className="text-md font-bold text-slate-800 hidden md:block">{user.businessName}</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center text-[10px] font-black text-slate-500 bg-slate-100 rounded-full px-3 py-1 gap-2 uppercase tracking-widest">
              {isOnline ? (
                <span className="flex items-center gap-1 text-emerald-600">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div> অনলাইন
                </span>
              ) : (
                <span className="flex items-center gap-1 text-amber-600">
                   <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> অফলাইন
                </span>
              )}
            </div>
            
            <button className="p-1.5 text-slate-400 hover:text-indigo-600">
              <Bell size={18} />
            </button>

            <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
              <div className="w-8 h-8 bg-indigo-50 border border-indigo-100 rounded flex items-center justify-center overflow-hidden">
                {user.avatar ? (
                  <img src={user.avatar} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-indigo-600 font-black text-xs">{user.name.charAt(0)}</span>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {renderContent()}
        </main>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-50 md:hidden" onClick={() => setIsSidebarOpen(false)}>
          <div className="w-64 h-full bg-white shadow-2xl animate-in slide-in-from-left duration-200" onClick={e => e.stopPropagation()}>
             <Sidebar 
                activeView={activeView} 
                setActiveView={setActiveView} 
                isCollapsed={false} 
                toggleCollapse={() => setIsSidebarOpen(false)}
                onLogout={handleLogout}
              />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
