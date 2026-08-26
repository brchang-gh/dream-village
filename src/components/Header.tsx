import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex flex-col">
      {/* Main Nav */}
      <div className="bg-white text-slate-900 border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-widest text-slate-900">夢裡村</div>
          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#" className="hover:text-slate-500 transition-colors">首頁</a>
            <a href="#series" className="hover:text-slate-500 transition-colors">香氣系列</a>
            <a href="#services" className="hover:text-slate-500 transition-colors">服務介紹</a>
            <a href="#testimonials" className="hover:text-slate-500 transition-colors">客戶見證</a>
          </nav>
          <button className="md:hidden text-slate-900">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Poetic Intro (PDF Page 1) */}
      <div className="bg-slate-900 text-white py-12 px-6 text-center border-b border-slate-800">
        <h2 className="text-xl md:text-2xl font-light tracking-widest mb-4">
          Come in, the lamps are lit 走 進 村 裡，燈 已 經 亮 了
        </h2>
        <p className="text-slate-400 font-light tracking-wide max-w-2xl mx-auto mb-6">
          先挑一個時刻，或先挑一位村民 —— 兩條路都會走到同一瓶香氣。
        </p>
        <p className="text-slate-400 text-xs md:text-sm font-light tracking-wide max-w-3xl mx-auto">
          夢裡村產品為香氣保養用品，非醫療用途，亦不作療效承諾。首次使用建議先做局部測試；孕婦、嬰幼兒與寵物家庭請少量使用並保持通風。
        </p>
      </div>
    </header>
  );
}
