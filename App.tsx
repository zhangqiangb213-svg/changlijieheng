
import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Background from './components/Background';

const App: React.FC = () => {
  const [view, setView] = useState<'login' | 'register' | 'dashboard'>('register');

  const handleLogin = () => {
    setView('dashboard');
  };

  const handleLogout = () => {
    setView('login');
  };

  if (view === 'dashboard') {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4">
      <Background />
      
      <div className="relative z-10 w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 mb-4">
            <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-wider mb-2">昌黎碣恒检测</h1>
          <p className="text-slate-400 text-sm">专业的食品安全检测与数字化管理平台</p>
        </div>

        <div className="glass-morphism rounded-3xl p-8 shadow-2xl transition-all duration-500 ease-in-out">
          {view === 'register' ? (
            <RegisterForm onSwitchToLogin={() => setView('login')} />
          ) : (
            <LoginForm onLogin={handleLogin} onSwitchToRegister={() => setView('register')} />
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-500 text-xs">
          <p>© 2024 昌黎碣恒检测有限公司 版权所有</p>
          <p className="mt-1">冀ICP备12345678号</p>
        </div>
      </div>
    </div>
  );
};

export default App;
