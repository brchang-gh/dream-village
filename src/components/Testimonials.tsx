import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white text-slate-900 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-wide">來自村民的真實回饋</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 relative">
             <div className="flex text-yellow-400 mb-6 gap-1">
               <Star className="fill-current w-5 h-5"/>
               <Star className="fill-current w-5 h-5"/>
               <Star className="fill-current w-5 h-5"/>
               <Star className="fill-current w-5 h-5"/>
               <Star className="fill-current w-5 h-5"/>
             </div>
             <p className="text-xl text-slate-700 mb-8 font-medium leading-relaxed">
               「這款保養油真的讓我在忙碌的工作中找到放鬆的時刻。每天下班後的香氣儀式，已經成為我最期待的事，質地非常好吸收。」
             </p>
             <div className="text-slate-900 font-bold">— 32歲，行銷企劃</div>
           </div>
           <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 relative">
             <div className="flex text-yellow-400 mb-6 gap-1">
               <Star className="fill-current w-5 h-5"/>
               <Star className="fill-current w-5 h-5"/>
               <Star className="fill-current w-5 h-5"/>
               <Star className="fill-current w-5 h-5"/>
               <Star className="fill-current w-5 h-5"/>
             </div>
             <p className="text-xl text-slate-700 mb-8 font-medium leading-relaxed">
               「夜色療癒滾珠是我床頭必備，香味非常舒服，讓長期高壓失眠的我終於能好好睡一覺，隔天上班精神好很多！」
             </p>
             <div className="text-slate-900 font-bold">— 28歲，專案經理</div>
           </div>
        </div>
      </div>
    </section>
  );
}
