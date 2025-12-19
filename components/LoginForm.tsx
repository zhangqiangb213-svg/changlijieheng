
import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: () => void;
  onSwitchToRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onSwitchToRegister }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate auth
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-medium text-white mb-6 border-l-4 border-blue-500 pl-3">欢迎回来</h2>
      
      <div className="space-y-4">
        <div className="group">
          <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2 px-1">账号</label>
          <input
            required
            type="text"
            placeholder="用户名 / 手机号 / 邮箱"
            className="w-full bg-slate-900/50 border border-slate-700 group-focus-within:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-slate-600 outline-none transition-all"
          />
        </div>
        <div className="group">
          <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2 px-1">密码</label>
          <input
            required
            type="password"
            placeholder="请输入您的密码"
            className="w-full bg-slate-900/50 border border-slate-700 group-focus-within:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-slate-600 outline-none transition-all"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
      >
        {loading ? (
           <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
           </svg>
        ) : '登录系统'}
      </button>

      <div className="text-center mt-6">
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="text-slate-400 text-sm hover:text-blue-400 transition-colors group flex items-center justify-center gap-1 w-full"
        >
          还没有账号？点击免费注册
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
