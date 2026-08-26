export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-white font-bold text-lg mb-6 tracking-wide">關於我們</h4>
          <ul className="space-y-4 font-medium">
             <li><a href="#" className="hover:text-white transition-colors">查詢</a></li>
             <li><a href="#" className="hover:text-white transition-colors">關於我們</a></li>
             <li><a href="#" className="hover:text-white transition-colors">我的帳戶</a></li>
             <li><a href="#" className="hover:text-white transition-colors">退款政策</a></li>
             <li><a href="#" className="hover:text-white transition-colors">隱私政策</a></li>
             <li><a href="#" className="hover:text-white transition-colors">服務條款</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-6 tracking-wide">聯絡資訊 (大立精品館)</h4>
          <ul className="space-y-4">
             <li>客服專線：<span className="text-white">0989-323-999</span></li>
             <li>客服時間：11:00-20:00</li>
             <li>信箱：<a href="mailto:munriv2006@gmail.com" className="text-white hover:underline">munriv2006@gmail.com</a></li>
             <li>地址：高雄市大立精品館6樓</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-6 tracking-wide">聯絡資訊 (屏東館)</h4>
          <ul className="space-y-4">
             <li>客服專線：<span className="text-white">087325999</span></li>
             <li>客服時間：11:00-20:00</li>
             <li>地址：屏東市太平洋百貨2樓</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-sm font-medium tracking-wide">
        &copy; {new Date().getFullYear()} 夢裡村 Dream Village. All rights reserved.
      </div>
    </footer>
  );
}
