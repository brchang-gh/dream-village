import { Wind, Moon, Pocket } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 text-slate-900 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">為上班族量身打造的療癒體驗</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">在快節奏的生活中，用天然的香氣為自己按下暫停鍵。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow text-center border border-slate-100">
             <div className="w-20 h-20 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
                <Wind className="w-10 h-10"/>
             </div>
             <h3 className="text-2xl font-bold mb-4">舒緩工作壓力</h3>
             <p className="text-slate-600 leading-relaxed">專為高壓辦公環境設計，透過自然植萃香氣，快速幫助思緒歸零，找回專注力與內在平靜。</p>
           </div>
           <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow text-center border border-slate-100">
             <div className="w-20 h-20 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
                <Moon className="w-10 h-10"/>
             </div>
             <h3 className="text-2xl font-bold mb-4">提升睡眠品質</h3>
             <p className="text-slate-600 leading-relaxed">夜間專屬的療癒配方，輕柔包覆疲憊的身心，讓你在繁忙的一天後，安穩進入深層放鬆的夢鄉。</p>
           </div>
           <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow text-center border border-slate-100">
             <div className="w-20 h-20 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
                <Pocket className="w-10 h-10"/>
             </div>
             <h3 className="text-2xl font-bold mb-4">隨身香氛陪伴</h3>
             <p className="text-slate-600 leading-relaxed">輕巧便攜的包裝設計，無論是通勤、會議還是出差，隨時隨地為自己創造專屬的舒適空間。</p>
           </div>
        </div>
      </div>
    </section>
  );
}
