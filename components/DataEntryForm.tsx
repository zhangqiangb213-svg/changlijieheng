
import React, { useState } from 'react';

interface DataEntryFormProps {
  onCancel: () => void;
}

const DataEntryForm: React.FC<DataEntryFormProps> = ({ onCancel }) => {
  const [testRows, setTestRows] = useState([
    { sn: 1, item: '苯甲酸及其钠盐(以苯甲酸计)', result: '', unit: 'g/kg', verdict: '未检验', basis: 'GB 5009.28-2016 《食品安全国家标准 食品中苯甲酸、山梨酸和糖精钠的测定》', basisShort: 'GB 5009.28-2016(第一法)', judgeBasis: 'GB 2760-2024 《食品安全国家标准 食品添加剂使用标准》', minLimit: '/', maxLimit: '0.2', limitUnit: 'g/kg', lod: '0.01', lodUnit: 'g/kg', remark: '定量限' },
    { sn: 2, item: '山梨酸及其钾盐(以山梨酸计)', result: '', unit: 'g/kg', verdict: '未检验', basis: 'GB 5009.28-2016 《食品安全国家标准 食品中苯甲酸、山梨酸和糖精钠的测定》', basisShort: 'GB 5009.28-2016(第一法)', judgeBasis: 'GB 2760-2024 《食品安全国家标准 食品添加剂使用标准》', minLimit: '/', maxLimit: '0.5', limitUnit: 'g/kg', lod: '0.01', lodUnit: 'g/kg', remark: '定量限' },
    { sn: 3, item: '防腐剂混合使用时各自用量占', result: '', unit: '/', verdict: '未检验', basis: '/', basisShort: '/', judgeBasis: 'GB 2760-2024 《食品安全国家标准 食品添加剂使用标准》', minLimit: '/', maxLimit: '1', limitUnit: '/', lod: '/', lodUnit: '/', remark: '/' },
    { sn: 4, item: '安赛蜜', result: '', unit: 'g/kg', verdict: '未检验', basis: 'GB 5009.140-2023 《食品安全国家标准 食品中乙酰磺胺酸钾的测定》', basisShort: 'GB 5009.140-2023', judgeBasis: 'GB 2760-2024 《食品安全国家标准 食品添加剂使用标准》', minLimit: '/', maxLimit: '0.3', limitUnit: 'g/kg', lod: '0.002', lodUnit: 'g/kg', remark: '定量限' },
    { sn: 5, item: '甜蜜素(以环己基氨基磺酸计)', result: '', unit: 'g/kg', verdict: '未检验', basis: 'GB 5009.97-2023 《食品安全国家标准 食品中环己基氨基磺酸钠的测定》', basisShort: 'GB 5009.97-2023(第一法)', judgeBasis: 'GB 2760-2024 《食品安全国家标准 食品添加剂使用标准》', minLimit: '/', maxLimit: '0.65', limitUnit: 'g/kg', lod: '0.03', lodUnit: 'g/kg', remark: '定量限' },
    { sn: 6, item: '阿斯巴甜', result: '', unit: 'g/kg', verdict: '未检验', basis: 'GB 5009.263-2016 《食品安全国家标准 食品中阿斯巴甜和阿力甜的测定》', basisShort: 'GB 5009.263-2016', judgeBasis: 'GB 2760-2024 《食品安全国家标准 食品添加剂使用标准》', minLimit: '/', maxLimit: '0.6', limitUnit: 'g/kg', lod: '0.0030', lodUnit: 'g/kg', remark: '定量限' },
    { sn: 7, item: '菌落总数', result: '', unit: 'CFU/mL', verdict: '未检验', basis: 'GB 4789.2-2022 《食品安全国家标准 食品微生物学检验 菌落总数测定》', basisShort: 'GB 4789.2-2022', judgeBasis: 'GB 7101-2022 《食品安全国家标准 饮料》', minLimit: '/', maxLimit: 'n=5,c=2,m=1', limitUnit: 'CFU/mL', lod: '/', lodUnit: '/', remark: '/' },
  ]);

  return (
    <div className="animate-fadeIn max-w-full space-y-6">
      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
          <h2 className="text-xl font-bold text-white">普通食品检验数据填报</h2>
          <span className="text-slate-500 font-mono text-sm ml-4">抽样单编号: XBJ25130303150541217</span>
        </div>
        {/* Fix: Remove undefined variable onBackToList and duplicate onClick attribute */}
        <button 
          onClick={onCancel}
          className="text-slate-400 hover:text-white flex items-center gap-1 text-sm transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          取消并返回
        </button>
      </div>

      {/* Remarks Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-slate-400 text-xs px-1">监督抽检报告备注</label>
          <textarea rows={2} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white outline-none focus:border-blue-500 text-sm" />
        </div>
        <div className="space-y-2">
          <label className="text-slate-400 text-xs px-1">风险监测报告备注</label>
          <textarea rows={2} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white outline-none focus:border-blue-500 text-sm" />
        </div>
        <div className="space-y-2">
          <label className="text-slate-400 text-xs px-1">历史退回原因</label>
          <button className="w-full h-[60px] bg-blue-600/10 border border-blue-500/20 rounded-xl text-blue-400 hover:bg-blue-600/20 transition-all flex items-center justify-center gap-2 text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
            点击查看历史原因
          </button>
        </div>
      </div>

      {/* Instruction Banner */}
      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-xs text-red-400/80 space-y-1">
        <p className="font-bold flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>
          录入提示: 
        </p>
        <p>1. 输入上标: Ctrl + Alt + (数字或+-号)，2. 输入下标: Alt + 数字(数字或+-号)。</p>
        <p>(1) 标准最小允许限、标准最大允许限是根据判定依据确定或根据常见食品品种核定，承检机构应根据检验的具体产品确定最小允许限、最大允许限。</p>
        <p>(2) 标准方法检出限是根据检验方法标准确定 or 核定(标准中未规定检出限 or 定量限时)，承检机构应根据具体情况确定。</p>
      </div>

      {/* Main Data Table */}
      <div className="glass-morphism rounded-2xl border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] whitespace-nowrap">
            <thead>
              <tr className="bg-slate-900/50 text-slate-400 border-b border-white/10">
                <th className="px-3 py-4 w-10">序号</th>
                <th className="px-3 py-4">检验项目 <span className="text-red-500">*</span></th>
                <th className="px-3 py-4">检验结果 <span className="text-red-500">*</span></th>
                <th className="px-3 py-4">结果单位 <span className="text-red-500">*</span></th>
                <th className="px-3 py-4">结果判定 <span className="text-red-500">*</span></th>
                <th className="px-3 py-4">检验依据 <span className="text-red-500">*</span></th>
                <th className="px-3 py-4">检验依据简称</th>
                <th className="px-3 py-4">判定依据 <span className="text-red-500">*</span></th>
                <th className="px-3 py-4">最小允许限 <span className="text-red-500">*</span></th>
                <th className="px-3 py-4">最大允许限 <span className="text-red-500">*</span></th>
                <th className="px-3 py-4">方法检出限 <span className="text-red-500">*</span></th>
                <th className="px-3 py-4">备注 <span className="text-red-500">*</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {testRows.map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="px-3 py-3 text-slate-500 text-center">{row.sn}</td>
                  <td className="px-3 py-3 font-medium text-slate-200">{row.item}</td>
                  <td className="px-3 py-3">
                    <input 
                      type="text" 
                      placeholder="未检出, 数值(保留3位)" 
                      className="w-32 bg-slate-950 border border-slate-800 rounded px-2 py-1 outline-none focus:border-blue-500 transition-all"
                    />
                  </td>
                  <td className="px-3 py-3">
                    <input 
                      type="text" 
                      defaultValue={row.unit} 
                      className="w-16 bg-slate-950 border border-slate-800 rounded px-2 py-1 outline-none focus:border-blue-500 text-center"
                    />
                  </td>
                  <td className="px-3 py-3">
                    <select className="bg-slate-950 border border-slate-800 rounded px-2 py-1 outline-none focus:border-blue-500">
                      <option>未检验</option>
                      <option>合格</option>
                      <option>不合格</option>
                    </select>
                  </td>
                  <td className="px-3 py-3 max-w-[200px] truncate text-slate-500" title={row.basis}>{row.basis}</td>
                  <td className="px-3 py-3 text-slate-500">{row.basisShort}</td>
                  <td className="px-3 py-3 max-w-[150px] truncate text-slate-500" title={row.judgeBasis}>{row.judgeBasis}</td>
                  <td className="px-3 py-3 text-center text-slate-500">{row.minLimit}</td>
                  <td className="px-3 py-3 text-center text-slate-500">{row.maxLimit}</td>
                  <td className="px-3 py-3 text-center text-slate-500">{row.lod}</td>
                  <td className="px-3 py-3">
                    <select className="bg-slate-950 border border-slate-800 rounded px-2 py-1 outline-none text-[10px]">
                      <option>{row.remark}</option>
                      <option>检出限</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Enterprise Standards */}
      <div className="glass-morphism p-6 rounded-2xl border border-white/5 flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-3">
          <label className="text-slate-400 text-sm">企业标准名称:</label>
          <input 
            type="text" 
            placeholder="若有企业标准请填写" 
            className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white outline-none focus:border-blue-500 w-80 text-sm"
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="text-slate-400 text-sm">企业标准上传:</label>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm flex items-center gap-2 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            点击上传
          </button>
        </div>
      </div>

      {/* Final Conclusion */}
      <div className="space-y-2">
        <label className="text-slate-400 text-sm font-bold block px-1">检验结论</label>
        <textarea 
          rows={4} 
          className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-all font-sans leading-relaxed"
          placeholder="请输入本次填报的综合检验结论..."
        />
      </div>

      {/* Footer Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-6 py-2.5 rounded-xl text-sm transition-all border border-slate-700">临时保存</button>
          <button className="bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/30 px-6 py-2.5 rounded-xl text-sm transition-all">数据提交待签章</button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-600/20">数据提交并签章</button>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-rose-500/20 text-rose-400 border border-rose-500/30 hover:bg-rose-500/30 px-6 py-2.5 rounded-xl text-sm transition-all">退修</button>
          <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-6 py-2.5 rounded-xl text-sm transition-all border border-slate-700">检验项目重置</button>
        </div>
      </div>
      
      <p className="text-rose-400/60 text-[10px] text-center italic">提示：点击检验项目重置按钮可以重新加载最新的基础表。</p>
    </div>
  );
};

export default DataEntryForm;
