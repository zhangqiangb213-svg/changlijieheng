
import React from 'react';

interface ReportPreviewProps {
  id: string;
  onBack: () => void;
}

const ReportPreview: React.FC<ReportPreviewProps> = ({ id, onBack }) => {
  const printReport = () => {
    window.print();
  };

  return (
    <div className="animate-fadeIn min-h-full bg-slate-900/40 pb-20">
      {/* Control Bar */}
      <div className="sticky top-0 z-30 glass-morphism p-4 border-b border-white/10 flex justify-between items-center no-print">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div>
            <h3 className="text-white font-bold">检测报告预览</h3>
            <p className="text-slate-500 text-xs">报告单号: {id}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={printReport}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" strokeWidth="2" strokeLinecap="round"/></svg>
            立即打印
          </button>
        </div>
      </div>

      {/* Report Pages Container */}
      <div className="max-w-[210mm] mx-auto mt-8 space-y-12">
        
        {/* PAGE 1: COVER */}
        <div className="bg-white text-black p-[20mm] shadow-2xl aspect-[210/297] flex flex-col items-center justify-between border border-slate-200">
          <div className="w-full">
            <div className="border-2 border-black inline-block px-3 py-1 font-bold text-xl">CMA</div>
            <p className="text-sm mt-2 text-slate-600 italic">附件 10</p>
          </div>

          <div className="text-center w-full">
             <h1 className="text-6xl font-bold tracking-[0.5em] mb-4">检验报告</h1>
             <p className="text-lg font-mono">№：{id}</p>
          </div>

          <div className="w-full max-w-xl space-y-4 text-lg">
             {[
               { label: '食 品 名 称', value: '碣石干红葡萄酒' },
               { label: '被抽样单位', value: '昌黎县某某商贸有限公司' },
               { label: '标称生产者', value: '秦皇岛碣恒葡萄酒庄' },
               { label: '委 托 单 位', value: '昌黎县市场监督管理局' },
               { label: '检 验 类 别', value: '食品安全监督抽检' },
             ].map((row, i) => (
               <div key={i} className="flex border-b border-black/20 pb-1">
                 <span className="w-32 flex-shrink-0 font-bold">{row.label}：</span>
                 <span className="flex-1 text-center">{row.value}</span>
               </div>
             ))}
          </div>

          <div className="w-full text-center mt-20">
             <p className="text-xl font-bold">承检机构名称（加盖公章）</p>
             <p className="mt-2 text-2xl font-serif">昌黎碣恒检测有限公司</p>
          </div>
        </div>

        {/* PAGE 2: BACK COVER / PRECAUTIONS */}
        <div className="bg-white text-black p-[20mm] shadow-2xl aspect-[210/297] flex flex-col border border-slate-200">
           <div className="text-center mt-20 mb-12">
              <h2 className="text-3xl font-bold tracking-widest">注意事项</h2>
           </div>
           <div className="space-y-6 text-lg px-12">
              <p>1. 报告无检验单位公章或检验检测专用章无效。</p>
              <p>2. 报告无主检、审核、批准人签字无效。</p>
              <p>3. 报告涂改无效。</p>
           </div>
           <div className="mt-auto grid grid-cols-2 gap-y-4 gap-x-12 text-sm border-t border-slate-100 pt-8">
              <p><span className="font-bold">检验地址：</span>昌黎县空港工业园区108号</p>
              <p><span className="font-bold">电话：</span>0335-1234567</p>
              <p><span className="font-bold">邮 编：</span>066600</p>
              <p><span className="font-bold">传真：</span>0335-7654321</p>
              <p><span className="font-bold">E-mail：</span>lab@jieheng-test.com</p>
           </div>
        </div>

        {/* PAGE 3: MAIN DATA PAGE */}
        <div className="bg-white text-black p-[15mm] shadow-2xl aspect-[210/297] flex flex-col border border-slate-200 overflow-hidden">
           <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">昌黎碣恒检测有限公司</h2>
              <h1 className="text-xl font-bold mt-1">食品安全监督抽检检验报告</h1>
              <div className="flex justify-between text-xs mt-4">
                <span>№：{id}</span>
                <span>共 2 页 第 1 页</span>
              </div>
           </div>

           <table className="w-full border-collapse border border-black text-xs">
              <tbody>
                <tr>
                   <td className="border border-black p-2 font-bold bg-slate-50 w-24">食品名称</td>
                   <td className="border border-black p-2">碣石干红葡萄酒</td>
                   <td className="border border-black p-2 font-bold bg-slate-50 w-24">商标</td>
                   <td className="border border-black p-2">碣石金奖</td>
                   <td className="border border-black p-2 font-bold bg-slate-50 w-24">规格型号</td>
                   <td className="border border-black p-2">750ml/瓶</td>
                </tr>
                <tr>
                   <td className="border border-black p-2 font-bold bg-slate-50">生产日期</td>
                   <td className="border border-black p-2">2024-05-18</td>
                   <td className="border border-black p-2 font-bold bg-slate-50">质量等级</td>
                   <td className="border border-black p-2" colSpan={3}>优等品</td>
                </tr>
                <tr>
                   <td className="border border-black p-2 font-bold bg-slate-50">被抽样单位</td>
                   <td className="border border-black p-2" colSpan={3}>昌黎县某某商贸有限公司</td>
                   <td className="border border-black p-2 font-bold bg-slate-50">联系电话</td>
                   <td className="border border-black p-2">138****8888</td>
                </tr>
                <tr>
                   <td className="border border-black p-2 font-bold bg-slate-50">抽样日期</td>
                   <td className="border border-black p-2">2024-10-20</td>
                   <td className="border border-black p-2 font-bold bg-slate-50">样品到达日期</td>
                   <td className="border border-black p-2" colSpan={3}>2024-10-21</td>
                </tr>
                <tr>
                   <td className="border border-black p-2 font-bold bg-slate-50 h-32">检验项目</td>
                   <td className="border border-black p-2 align-top" colSpan={5}>
                      镉(以Cd计)、铬(以Cr计)、铅(以Pb计)、酒精度、总酸、挥发酸等。
                   </td>
                </tr>
                <tr>
                   <td className="border border-black p-2 font-bold bg-slate-50 h-40">检验结论</td>
                   <td className="border border-black p-2 align-top relative" colSpan={5}>
                      <div className="p-4 leading-loose">
                        1. 经抽样检验，所检项目符合GB/T 15037-2006要求。<br/>
                        2. 检验结论为：合格。
                      </div>
                      <div className="absolute bottom-4 right-4 text-center">
                         <div className="w-32 h-32 border-2 border-red-500 rounded-full flex items-center justify-center text-red-500 font-bold opacity-40 rotate-12">
                            检验专用章
                         </div>
                         <p className="mt-2">2024年10月24日</p>
                      </div>
                   </td>
                </tr>
              </tbody>
           </table>

           <div className="mt-auto grid grid-cols-3 text-xs gap-4 pt-4">
              <div className="flex border-b border-black pb-1"><span className="font-bold">批准：</span><span className="ml-2 font-serif italic text-lg opacity-60">张伟</span></div>
              <div className="flex border-b border-black pb-1"><span className="font-bold">审核：</span><span className="ml-2 font-serif italic text-lg opacity-60">李华</span></div>
              <div className="flex border-b border-black pb-1"><span className="font-bold">主检：</span><span className="ml-2 font-serif italic text-lg opacity-60">王明</span></div>
           </div>
        </div>

        {/* PAGE 4: RESULTS TABLE */}
        <div className="bg-white text-black p-[15mm] shadow-2xl aspect-[210/297] flex flex-col border border-slate-200">
           <div className="text-center mb-6">
              <h1 className="text-xl font-bold">检验结果</h1>
              <div className="flex justify-between text-xs mt-4">
                <span>№：{id}</span>
                <span>共 2 页 第 2 页</span>
              </div>
           </div>

           <table className="w-full border-collapse border border-black text-center text-xs">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-black p-2 w-10">序号</th>
                  <th className="border border-black p-2">检验项目</th>
                  <th className="border border-black p-2">单位</th>
                  <th className="border border-black p-2">标准指标</th>
                  <th className="border border-black p-2">实测值</th>
                  <th className="border border-black p-2">单项判定</th>
                  <th className="border border-black p-2">检验依据</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: '镉(以 Cd 计)', unit: 'mg/kg', target: '≤0.1', value: '未检出', result: '合格', basis: 'GB 5009.15-2014' },
                  { name: '铬(以 Cr 计)', unit: 'mg/kg', target: '≤1.0', value: '0.20', result: '合格', basis: 'GB 5009.123-2014' },
                  { name: '铅(以 Pb 计)', unit: 'mg/kg', target: '≤0.5', value: '0.08', result: '合格', basis: 'GB 5009.12-2017' },
                  { name: '酒精度', unit: '%vol', target: '11.0±1.0', value: '11.5', result: '合格', basis: 'GB/T 15038-2006' },
                  { name: '总酸', unit: 'g/L', target: '≥4.0', value: '5.2', result: '合格', basis: 'GB/T 15038-2006' },
                  { name: '挥发酸', unit: 'g/L', target: '≤1.1', value: '0.4', result: '合格', basis: 'GB/T 15038-2006' },
                ].map((item, i) => (
                  <tr key={i}>
                    <td className="border border-black p-2">{i+1}</td>
                    <td className="border border-black p-2">{item.name}</td>
                    <td className="border border-black p-2">{item.unit}</td>
                    <td className="border border-black p-2">{item.target}</td>
                    <td className="border border-black p-2">{item.value}</td>
                    <td className="border border-black p-2 text-emerald-600 font-bold">{item.result}</td>
                    <td className="border border-black p-2">{item.basis}</td>
                  </tr>
                ))}
                <tr>
                  <td className="border border-black p-8 text-center text-slate-400 italic" colSpan={7}>以下空白</td>
                </tr>
              </tbody>
           </table>

           <div className="mt-6 text-[10px] text-slate-500 leading-relaxed">
              备注：本报告仅对来样负责。未检出指实测值低于方法检出限(LOD)。
           </div>
        </div>

      </div>

      <style>{`
        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
          .max-w-\\[210mm\\] { width: 210mm !important; margin: 0 !important; }
          .shadow-2xl { box-shadow: none !important; }
          .mt-8 { margin-top: 0 !important; }
          .space-y-12 { space-y: 0 !important; }
          .aspect-\\[210\\/297\\] { height: 297mm !important; page-break-after: always; }
          .border { border: none !important; }
          table, th, td { border: 1pt solid black !important; }
        }
      `}</style>
    </div>
  );
};

export default ReportPreview;
