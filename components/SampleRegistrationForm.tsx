
import React, { useState } from 'react';

interface SampleRegistrationFormProps {
  onCancel: () => void;
}

const SampleRegistrationForm: React.FC<SampleRegistrationFormProps> = ({ onCancel }) => {
  // Option lists for dropdowns derived from common recurring data in the form
  const taskSources = ["昌黎县市场监督管理局", "秦皇岛市市场监督管理局", "企业委托检测", "风险监测专项", "例行抽样检查"];
  const taskCategories = ["监督抽检", "风险监测", "评价性抽检"];
  const dateTypes = ["生产日期", "购进日期", "加工日期", "消毒日期", "检疫日期"];
  const samplingMethods = ["无菌抽样", "非无菌抽样"];
  const storageConditions = ["常温", "冷藏", "冷冻", "避光", "常温避光", "密封"];
  const thirdPartyNatures = ["委托", "代理", "经销", "进口", "供应商"];

  const [formData, setFormData] = useState({
    samplingNo: '№ ' + Math.random().toString().slice(2, 10),
    taskSource: '',
    taskCategory: '监督抽检',
    // 被抽样单位信息
    inspectedUnit: {
      name: '',
      address: '',
      shopName: '',
      shopUrl: '',
      licenseType: '经营许可证',
      licenseNo: '',
      creditCode: '',
      legalPerson: '',
      contact: '',
      phone: ''
    },
    // 样品信息
    sample: {
      name: '',
      brand: '',
      dateType: '生产日期',
      date: '',
      spec: '',
      batchNo: '',
      expiry: '',
      standard: '',
      qualityLevel: '',
      quantity: '',
      backupQuantity: '',
      orderNo: '',
      method: '非无菌抽样',
      price: '',
      storage: '常温',
      isImported: '否',
      origin: ''
    },
    // 生产者信息
    producer: {
      name: '',
      address: '',
      licenseNo: '',
      phone: ''
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('样品登记信息已成功保存！');
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
          <h2 className="text-2xl font-bold text-white">食品安全抽样检验抽样单登记</h2>
        </div>
        <div className="text-right">
          <p className="text-slate-500 text-xs uppercase tracking-widest">抽样单编号</p>
          <p className="text-blue-400 font-mono text-lg">{formData.samplingNo}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 pb-20">
        
        {/* Section 1: 任务信息 */}
        <section className="glass-morphism p-8 rounded-3xl border border-white/5 space-y-6">
          <h3 className="text-blue-400 font-bold flex items-center gap-2">
            <span className="w-1.5 h-4 bg-blue-500 rounded-full"></span>
            任务概况
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">任务来源</label>
              <select 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all appearance-none"
                value={formData.taskSource}
                onChange={e => setFormData({...formData, taskSource: e.target.value})}
              >
                <option value="">-- 请选择任务来源 --</option>
                {taskSources.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">任务类别</label>
              <div className="flex gap-4 p-3 bg-slate-900/30 rounded-xl border border-slate-800">
                {taskCategories.map(c => (
                  <label key={c} className="flex items-center gap-2 cursor-pointer text-sm text-slate-300 hover:text-white transition-colors">
                    <input 
                      type="radio" 
                      name="taskCategory" 
                      value={c}
                      checked={formData.taskCategory === c}
                      onChange={e => setFormData({...formData, taskCategory: e.target.value})}
                      className="w-4 h-4 accent-blue-500"
                    />
                    {c}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 被抽样单位信息 */}
        <section className="glass-morphism p-8 rounded-3xl border border-white/5 space-y-6">
          <h3 className="text-indigo-400 font-bold flex items-center gap-2">
            <span className="w-1.5 h-4 bg-indigo-500 rounded-full"></span>
            被抽样单位信息
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">单位名称</label>
              <input 
                type="text" placeholder="请输入被抽样单位完整名称" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-indigo-500 transition-all"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">单位地址</label>
              <input 
                type="text" placeholder="详细地址" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-indigo-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">营业执照号 / 统一社会信用代码</label>
              <input 
                type="text" placeholder="请输入代码" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-indigo-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">联系电话</label>
              <input 
                type="tel" placeholder="负责人联系电话" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-indigo-500 transition-all"
              />
            </div>
          </div>
        </section>

        {/* Section 3: 样品信息 */}
        <section className="glass-morphism p-8 rounded-3xl border border-white/5 space-y-6">
          <h3 className="text-emerald-400 font-bold flex items-center gap-2">
            <span className="w-1.5 h-4 bg-emerald-500 rounded-full"></span>
            样品详细信息 (标示)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">样品名称</label>
              <input 
                type="text" placeholder="标示样品名称" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">商标</label>
              <input 
                type="text" placeholder="标示商标" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500 transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">日期类型</label>
              <select className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500 appearance-none transition-all">
                {dateTypes.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">具体日期</label>
              <input 
                type="date" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">规格型号</label>
              <input 
                type="text" placeholder="如: 750ml/瓶" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">执行标准 / 技术文件</label>
              <input 
                type="text" placeholder="GB/T 15037 等" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">抽样方式</label>
              <select className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500 appearance-none transition-all">
                {samplingMethods.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">储存条件</label>
              <select className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500 appearance-none transition-all">
                {storageConditions.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">抽样数量 (含备样)</label>
              <input 
                type="text" placeholder="数量及单位" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">备样数量</label>
              <input 
                type="text" placeholder="备用样品数量" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">样品单价 (元)</label>
              <input 
                type="number" step="0.01" placeholder="0.00" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500 transition-all"
              />
            </div>
          </div>
        </section>

        {/* Section 4: 生产者及第三方信息 */}
        <section className="glass-morphism p-8 rounded-3xl border border-white/5 space-y-6">
          <h3 className="text-amber-400 font-bold flex items-center gap-2">
            <span className="w-1.5 h-4 bg-amber-500 rounded-full"></span>
            生产者及关联方信息
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">生产者名称</label>
              <input 
                type="text" placeholder="标示生产者名称" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-amber-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">生产者电话</label>
              <input 
                type="tel" placeholder="生产者联系电话" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-amber-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">第三方企业性质</label>
              <select className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-amber-500 appearance-none transition-all">
                <option value="">无第三方参与</option>
                {thirdPartyNatures.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-slate-400 text-xs font-medium px-1">原产地</label>
              <input 
                type="text" placeholder="产地信息" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-amber-500 transition-all"
              />
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button 
            type="button" 
            onClick={onCancel}
            className="px-8 py-3 rounded-xl border border-white/10 text-slate-400 hover:bg-white/5 transition-all"
          >
            取消登记
          </button>
          <button 
            type="submit"
            className="px-12 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg shadow-blue-600/20 transition-all transform active:scale-95"
          >
            提交登记并生成抽样单
          </button>
        </div>
      </form>
    </div>
  );
};

export default SampleRegistrationForm;
