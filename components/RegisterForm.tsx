
import React, { useState, useEffect, useCallback } from 'react';

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    phone: '',
    email: '',
    captcha: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate random 6-character alphanumeric captcha
  const refreshCaptcha = useCallback(() => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(result);
  }, []);

  useEffect(() => {
    refreshCaptcha();
  }, [refreshCaptcha]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // Username: Alphanumeric, 5-10 chars
    if (!/^[a-zA-Z0-9]{5,10}$/.test(formData.username)) {
      newErrors.username = '用户名需为5-10位字母或数字组合';
    }

    // Password: Alphanumeric, 6-10 chars
    if (!/^[a-zA-Z0-9]{6,10}$/.test(formData.password)) {
      newErrors.password = '密码需为6-10位字母或数字组合';
    }

    // Phone: Chinese standard
    if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入有效的11位手机号码';
    }

    // Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    // Captcha
    if (formData.captcha.toLowerCase() !== generatedCaptcha.toLowerCase()) {
      newErrors.captcha = '验证码输入错误';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        alert('注册成功！正在跳转至登录页...');
        setIsSubmitting(false);
        onSwitchToLogin();
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-medium text-white mb-6 border-l-4 border-blue-500 pl-3">建立新账号</h2>

      {/* Username */}
      <div className="group">
        <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2 px-1">用户名</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="5-10位字母或数字"
          required
          className={`w-full bg-slate-900/50 border ${errors.username ? 'border-red-500/50' : 'border-slate-700'} group-focus-within:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-slate-600 outline-none transition-all duration-300`}
        />
        {errors.username && <p className="text-red-400 text-[10px] mt-1.5 ml-1 animate-pulse">{errors.username}</p>}
      </div>

      {/* Password */}
      <div className="group">
        <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2 px-1">登录密码</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="6-10位字母或数字"
          required
          className={`w-full bg-slate-900/50 border ${errors.password ? 'border-red-500/50' : 'border-slate-700'} group-focus-within:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-slate-600 outline-none transition-all duration-300`}
        />
        {errors.password && <p className="text-red-400 text-[10px] mt-1.5 ml-1 animate-pulse">{errors.password}</p>}
      </div>

      {/* Phone */}
      <div className="group">
        <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2 px-1">手机号码</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="11位手机号"
          required
          className={`w-full bg-slate-900/50 border ${errors.phone ? 'border-red-500/50' : 'border-slate-700'} group-focus-within:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-slate-600 outline-none transition-all duration-300`}
        />
        {errors.phone && <p className="text-red-400 text-[10px] mt-1.5 ml-1 animate-pulse">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div className="group">
        <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2 px-1">电子邮箱</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@jieheng.com"
          required
          className={`w-full bg-slate-900/50 border ${errors.email ? 'border-red-500/50' : 'border-slate-700'} group-focus-within:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-slate-600 outline-none transition-all duration-300`}
        />
        {errors.email && <p className="text-red-400 text-[10px] mt-1.5 ml-1 animate-pulse">{errors.email}</p>}
      </div>

      {/* Captcha */}
      <div className="group">
        <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2 px-1">图形验证码</label>
        <div className="flex gap-3">
          <input
            type="text"
            name="captcha"
            value={formData.captcha}
            onChange={handleChange}
            placeholder="请输入验证码"
            required
            className={`flex-1 bg-slate-900/50 border ${errors.captcha ? 'border-red-500/50' : 'border-slate-700'} group-focus-within:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-slate-600 outline-none transition-all duration-300`}
          />
          <div 
            onClick={refreshCaptcha}
            className="w-32 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors select-none overflow-hidden group relative"
          >
            <div className="text-blue-400 font-bold tracking-[0.2em] italic text-lg z-10">{generatedCaptcha}</div>
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,transparent_70%)] group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        </div>
        {errors.captcha && <p className="text-red-400 text-[10px] mt-1.5 ml-1 animate-pulse">{errors.captcha}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transform active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            处理中...
          </>
        ) : '立即注册'}
      </button>

      {/* Switch to Login */}
      <div className="text-center mt-6">
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-slate-400 text-sm hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          已有账号？返回登录
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
