
import React, { useState } from 'react';
import Background from './Background';
import SampleRegistrationForm from './SampleRegistrationForm';
import ReportPreview from './ReportPreview';
import ReportForm from './ReportForm';
import DataEntryForm from './DataEntryForm';

interface DashboardProps {
  onLogout: () => void;
}

type Tab = 'overview' | 'samples' | 'data' | 'reports';

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [showSampleForm, setShowSampleForm] = useState(false);
  const [showReportForm, setShowReportForm] = useState(false);
  const [showDataEntryForm, setShowDataEntryForm] = useState(false);
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null);

  const menuItems = [
    { id: 'overview', label: '数据仪表盘', icon: <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/> },
    { id: 'samples', label: '样品登记', icon: <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.86L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"/> },
    { id: 'data', label: '实验数据登记', icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/> },
    { id: 'reports', label: '检测报告', icon: <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/> },
  ];

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setShowSampleForm(false);
    setShowReportForm(false);
    setShowDataEntryForm(false);
    setSelectedReportId(null);
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col text-slate-200">
      <Background />
      
      <nav className="relative z-20 h-16 glass-morphism border-b border-white/10 flex items-center justify-between px-6 no-print">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight text-white">昌黎碣恒检测系统</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-sm text-slate-400">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            系统运行正常
          </div>
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            安全退出
          </button>
        </div>
      </nav>

      <div className="flex-1 relative z-20 flex overflow-hidden">
        <aside className="w-64 glass-morphism border-r border-white/10 hidden md:block no-print">
          <div className="p-4 space-y-2">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id as Tab)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-200 border border-transparent'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className={`flex-1 overflow-y-auto ${selectedReportId ? 'p-0' : 'p-8'}`}>
          {activeTab === 'overview' && <OverviewView />}
          {activeTab === 'samples' && (
            showSampleForm 
            ? <SampleRegistrationForm onCancel={() => setShowSampleForm(false)} /> 
            : <SamplesView onNewSample={() => setShowSampleForm(true)} />
          )}
          {activeTab === 'data' && (
             showDataEntryForm 
             ? <DataEntryForm onCancel={() => setShowDataEntryForm(false)} />
             : <DataEntryListView onEntry={() => setShowDataEntryForm(true)} />
          )}
          {activeTab === 'reports' && (
            selectedReportId 
            ? <ReportPreview id={selectedReportId} onBack={() => setSelectedReportId(null)} />
            : showReportForm
            ? <ReportForm onCancel={() => setShowReportForm(false)} />
            : <ReportsListView onPreview={id => setSelectedReportId(id)} onNewReport={() => setShowReportForm(true)} />
          )}
        </main>
      </div>
    </div>
  );
};

/* --- Sub-Views --- */

const OverviewView = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-white">数据仪表盘 <span className="text-sm font-normal text-slate-500 ml-2">实时数据汇总</span></h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { label: '待检测样品', value: '24', change: '+12%', color: 'blue' },
        { label: '检测中项目', value: '156', change: '+5%', color: 'indigo' },
        { label: '本月报告总数', value: '892', change: '+18%', color: 'emerald' },
        { label: '异常检出率', value: '0.45%', change: '-2%', color: 'amber' },
      ].map((stat, i) => (
        <div key={i} className="glass-morphism p-6 rounded-2xl border border-white/5">
          <p className="text-slate-400 text-sm">{stat.label}</p>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-white">{stat.value}</span>
            <span className={`text-xs ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{stat.change}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SamplesView: React.FC<{ onNewSample: () => void }> = ({ onNewSample }) => (
  <div className="animate-fadeIn space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">样品登记管理</h2>
      <button 
        onClick={onNewSample}
        className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round"/></svg>
        新建样品登记
      </button>
    </div>
    <div className="glass-morphism rounded-2xl border border-white/5 overflow-hidden">
      <table className="w-full text-left">
        <thead>
          <tr className="text-slate-500 text-xs uppercase tracking-wider border-b border-white/5">
            <th className="px-6 py-4 font-semibold">抽样单编号</th>
            <th className="px-6 py-4 font-semibold">样品名称</th>
            <th className="px-6 py-4 font-semibold">任务来源</th>
            <th className="px-6 py-4 font-semibold">状态</th>
            <th className="px-6 py-4 font-semibold text-right">操作</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 text-sm text-slate-300">
          <tr className="hover:bg-white/5 transition-colors">
            <td className="px-6 py-4 font-mono text-blue-400">JH-20241024-001</td>
            <td className="px-6 py-4">碣石红酒 A3</td>
            <td className="px-6 py-4">昌黎县市场监督管理局</td>
            <td className="px-6 py-4"><span className="bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20 text-xs">待检测</span></td>
            <td className="px-6 py-4 text-right"><button className="text-blue-400 hover:underline">详情</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const DataEntryListView: React.FC<{ onEntry: () => void }> = ({ onEntry }) => (
  <div className="animate-fadeIn space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">实验数据登记列表</h2>
    </div>
    <div className="glass-morphism rounded-2xl border border-white/5 overflow-hidden">
      <table className="w-full text-left">
        <thead>
          <tr className="text-slate-500 text-xs uppercase tracking-wider border-b border-white/5">
            <th className="px-6 py-4 font-semibold">抽样单编号</th>
            <th className="px-6 py-4 font-semibold">样品名称</th>
            <th className="px-6 py-4 font-semibold">状态</th>
            <th className="px-6 py-4 font-semibold text-right">操作</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 text-sm text-slate-300">
          <tr className="hover:bg-white/5 transition-colors">
            <td className="px-6 py-4 font-mono text-blue-400">XBJ25130303150541217</td>
            <td className="px-6 py-4">普通食品 (待填报项目)</td>
            <td className="px-6 py-4"><span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20 text-xs">待填报</span></td>
            <td className="px-6 py-4 text-right">
              <button 
                onClick={onEntry}
                className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-lg text-xs transition-all"
              >
                开始填报
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const DataEntryView = () => null;

const ReportsListView: React.FC<{ onPreview: (id: string) => void; onNewReport: () => void }> = ({ onPreview, onNewReport }) => (
  <div className="animate-fadeIn space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">检测报告管理</h2>
      <button 
        onClick={onNewReport}
        className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round"/></svg>
        新增检测报告
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: '成品红酒综合检测报告', id: 'REP-2024-0982', date: '2024-10-22', status: '已签发' },
        { title: '精制小麦粉面筋度专项报告', id: 'REP-2024-0981', date: '2024-10-21', status: '待审核' },
        { title: '大豆油酸价检测结果', id: 'REP-2024-0980', date: '2024-10-21', status: '已签发' },
      ].map((report, i) => (
        <div key={i} className="glass-morphism p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-16 bg-slate-800 rounded flex items-center justify-center text-slate-500 group-hover:text-blue-400 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <span className={`text-[10px] px-2 py-1 rounded-full ${report.status === '已签发' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
              {report.status}
            </span>
          </div>
          <h4 className="text-white font-medium mb-1">{report.title}</h4>
          <p className="text-slate-500 text-xs font-mono mb-4">{report.id}</p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
            <span className="text-[10px] text-slate-500">{report.date}</span>
            <div className="flex gap-3">
               <button onClick={() => onPreview(report.id)} className="text-blue-400 text-xs hover:underline">预览</button>
               <button className="text-slate-200 text-xs flex items-center gap-1 hover:text-white">
                 <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" strokeWidth="2" strokeLinecap="round"/></svg>
                 打印
               </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ReportsView = () => null;

export default Dashboard;
