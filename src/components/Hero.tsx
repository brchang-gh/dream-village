const productTree = {
  name: "香氣系列",
  categories: [
    {
      name: "保養油",
      products: [
        { name: "花萃暖陽", icon: "/花萃暖陽.png" },
        { name: "梔夜未央", icon: "/梔夜未央.png" }
      ]
    },
    {
      name: "隨身香氛滾珠",
      products: [
        { name: "晨光守護", icon: "/晨光守護.png" },
        { name: "如夢初綻", icon: "/如夢初綻.png" },
        { name: "定錨之木", icon: "/定錨之木.png" },
        { name: "夜色療癒", icon: "/夜色療癒.png" }
      ]
    },
    {
      name: "空間香氛噴霧",
      products: [
        { name: "森呼吸", icon: "/森呼吸.png" },
        { name: "木光", icon: "/木光.png" },
        { name: "夜霧", icon: "/夜霧.png" }
      ]
    },
    {
      name: "保濕純露",
      products: [
        { name: "晨露玫語", icon: "/晨露玫語.png" }
      ]
    }
  ]
};

export default function Hero() {
  return (
    <section id="series" className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Big Title + CTA */}
        <div className="lg:col-span-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            專屬你的<br/><span className="text-slate-300">香氣儀式</span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-md">
            為忙碌的你量身打造，在每一次呼吸之間，找回內心的平靜與專注。
          </p>
          <a href="/signup" className="inline-block bg-white text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            立即免費試用
          </a>
        </div>

        {/* Right: Product Tree */}
        <div className="lg:col-span-7 bg-slate-800/50 rounded-3xl p-6 md:p-10 shadow-2xl border border-slate-700/50">
           <h2 className="text-2xl font-bold mb-8 border-b border-slate-700 pb-4 tracking-wide">{productTree.name}</h2>
           <div className="space-y-8">
             {productTree.categories.map(cat => (
               <div key={cat.name}>
                 <h3 className="text-lg text-slate-300 mb-4 font-medium tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
                    {cat.name}
                 </h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {cat.products.map(prod => (
                     <div key={prod.name} className="flex items-center justify-between gap-4 bg-slate-800/80 p-3 rounded-2xl hover:bg-slate-700 transition-colors border border-slate-700/50">
                        <span className="font-medium text-slate-100 ml-2">{prod.name}</span>
                        <img src={`${import.meta.env.BASE_URL}${prod.icon.slice(1)}`} alt={prod.name} className="w-12 h-16 object-cover object-center rounded-xl bg-slate-900 shadow-sm" />
                     </div>
                   ))}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
