
import React, { useState } from 'react';

interface ReportFormProps {
  onCancel: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({ onCancel }) => {
  const reportCategories = ["食品安全监督抽检", "食品安全评价性抽检", "食品安全风险监测", "保健食品监督抽检", "保健食品风险监测"];
  const delegates = ["昌黎县市场监督管理局", "秦皇岛市市场监督管理局", "河北省市场监督管理局"];

  const [testItems, setTestItems] = useState([
    { name: '', unit: 'mg/kg', target: '', value: '', result: '合格', basis: '' }
  ]);

  const addTestItem = () => {
    setTestItems([...testItems, { name: '', unit: 'mg/kg', target: '', value: '', result: '合格', basis: '' }]);
  };

  const removeTestItem = (index: number) => {
    setTestItems(testItems.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('检测报告已生成并进入待审核状态！');
    onCancel();
  };

  return (
    <div className="animate-fadeIn max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <button 
            onClick={onCancel}
            className="text-slate-400 hover:text-white flex items-center gap-1 text-sm mb-2 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            返回列表
          </button>
          <h2 className="text-2xl font-bold text-white">新增检验报告录入</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 pb-20">
        
        {/* Basic Information */}
        <section className="glass-morphism p-8 rounded-3xl border border-white/5 space-y-6">
          <h3 className="text-blue-400 font-bold flex items-center gap-2">
            <span className="w-1.5 h-4 bg-blue-500 rounded-full"></span>
            报告基本信息
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">报告编号</label>
              <input type="text" defaultValue={`REP-2024-${Math.floor(Math.random()*9000)+1000}`} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" />
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">检验类别</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 appearance-none">
                {reportCategories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">委托单位</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 appearance-none">
                {delegates.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
          </div>
        </section>

        {/* Sample Information */}
        <section className="glass-morphism p-8 rounded-3xl border border-white/5 space-y-6">
          <h3 className="text-indigo-400 font-bold flex items-center gap-2">
            <span className="w-1.5 h-4 bg-indigo-500 rounded-full"></span>
            样品标示信息
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">食品名称</label>
              <input type="text" placeholder="如: 碣石干红葡萄酒" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-indigo-500" />
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">商标</label>
              <input type="text" placeholder="标示商标" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-indigo-500" />
            </div>
            <div className="md:col-span-3 space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">被抽样单位</label>
              <input type="text" placeholder="单位名称" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-indigo-500" />
            </div>
          </div>
        </section>

        {/* Test Results Table */}
        <section className="glass-morphism p-8 rounded-3xl border border-white/5 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-emerald-400 font-bold flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-500 rounded-full"></span>
              检验结果明细
            </h3>
            <button 
              type="button"
              onClick={addTestItem}
              className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-lg hover:bg-emerald-500/20 transition-all flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round"/></svg>
              添加项目
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-500 uppercase tracking-widest border-b border-white/5">
                  <th className="px-2 py-3 font-semibold w-1/4">检验项目</th>
                  <th className="px-2 py-3 font-semibold">单位</th>
                  <th className="px-2 py-3 font-semibold w-1/6">标准指标</th>
                  <th className="px-2 py-3 font-semibold w-1/6">实测值</th>
                  <th className="px-2 py-3 font-semibold">判定</th>
                  <th className="px-2 py-3 font-semibold text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {testItems.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 pr-2">
                      <input type="text" placeholder="如: 镉(以Cd计)" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-2 py-2 text-white outline-none focus:border-emerald-500" />
                    </td>
                    <td className="py-2 px-2">
                      <input type="text" defaultValue="mg/kg" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-2 py-2 text-white outline-none focus:border-emerald-500 text-center" />
                    </td>
                    <td className="py-2 px-2">
                      <input type="text" placeholder="≤0.1" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-2 py-2 text-white outline-none focus:border-emerald-500 text-center" />
                    </td>
                    <td className="py-2 px-2">
                      <input type="text" placeholder="0.05" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-2 py-2 text-white outline-none focus:border-emerald-500 text-center" />
                    </td>
                    <td className="py-2 px-2">
                      <select className="bg-slate-800/50 border border-slate-700 rounded-lg px-1 py-2 text-emerald-400 outline-none">
                        <option>合格</option>
                        <option className="text-red-400">不合格</option>
                      </select>
                    </td>
                    <td className="py-2 text-right">
                      <button 
                        type="button" 
                        onClick={() => removeTestItem(index)}
                        className="text-rose-500 hover:text-rose-400 p-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Signatures */}
        <section className="glass-morphism p-8 rounded-3xl border border-white/5 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">主检人</label>
              <input type="text" placeholder="签名" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" />
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">审核人</label>
              <input type="text" placeholder="签名" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" />
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">批准人</label>
              <input type="text" placeholder="签名" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" />
            </div>
          </div>
        </section>

        <div className="flex justify-end gap-4">
          <button 
            type="button" 
            onClick={onCancel}
            className="px-8 py-3 rounded-xl border border-white/10 text-slate-400 hover:bg-white/5 transition-all"
          >
            取消
          </button>
          <button 
            type="submit"
            className="px-12 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg shadow-blue-600/20 transition-all transform active:scale-95"
          >
            保存并提交审核
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportForm;
