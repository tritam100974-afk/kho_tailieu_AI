import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  Wrench, 
  Rocket, 
  Search, 
  Menu, 
  X, 
  ArrowRight,
  Brain,
  MessageCircle,
  ChevronRight,
  Info
} from "lucide-react";
import { CATEGORIES, ARTICLES } from "./constants";
import { Article, Category } from "./types";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen": return <BookOpen className="w-5 h-5" />;
      case "Sparkles": return <Sparkles className="w-5 h-5" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5" />;
      case "Wrench": return <Wrench className="w-5 h-5" />;
      case "Rocket": return <Rocket className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#EEF2F6] text-[#1A1A1A] font-sans selection:bg-orange-300">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-200 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] bg-purple-200 rounded-full blur-[100px]"></div>
      </div>

      {/* Modern Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b-2 border-[#1A1A1A]">
        <div className="flex items-center gap-3">
          <div className="bg-[#1A1A1A] p-2 rounded-xl rotate-3">
            <Brain className="w-6 h-6 text-lime-400" />
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase italic">Kho tài liệu về AI</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
            <input 
              type="text" 
              placeholder="Tìm tri thức..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#F3F4F6] border-2 border-[#1A1A1A] rounded-full py-2 pl-10 pr-4 font-bold text-sm focus:w-64 transition-all"
            />
          </div>
          <button className="bg-orange-400 border-2 border-[#1A1A1A] p-2 rounded-full shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Welcome Bento Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-8 bg-white border-4 border-[#1A1A1A] rounded-[40px] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] overflow-hidden relative"
          >
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 border-2 border-[#1A1A1A] px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-blue-600" /> Bản tin 2026
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
                KHO TÀNG <br/> 
                <span className="text-blue-600 italic">TRI THỨC</span> <br/>
                AI THẾ HỆ MỚI
              </h1>
              <p className="max-w-md text-lg font-bold opacity-70 leading-snug">
                Đừng chỉ dùng AI, hãy biến nó thành trợ thủ đắc lực nhất trong hành trình chinh phục tri thức của bạn.
              </p>
              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => {
                    const el = document.getElementById("articles-grid");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#1A1A1A] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-tighter flex items-center gap-3 hover:translate-y-[-4px] transition-transform"
                >
                  Khám phá ngay <ChevronRight className="w-6 h-6 text-lime-400" />
                </button>
              </div>
            </div>
            
            {/* Abstract Shapes */}
            <div className="absolute top-10 right-[-10%] w-64 h-64 bg-lime-300 rounded-full border-4 border-[#1A1A1A] opacity-20 transform -rotate-12"></div>
            <div className="absolute bottom-10 right-10 flex gap-2">
               {[1,2,3].map(i => (
                 <div key={i} className="w-16 h-16 rounded-2xl border-4 border-[#1A1A1A] bg-white flex items-center justify-center text-3xl shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                   {["🤖", "⚡", "🧠"][i-1]}
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Quick Stats Bento Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-orange-400 border-4 border-[#1A1A1A] rounded-[40px] p-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">Cộng đồng học tập</h3>
              <p className="font-bold opacity-80">+50,000 học sinh đang tham gia cùng chúng tôi.</p>
            </div>
            <div className="bg-white border-2 border-[#1A1A1A] p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] mt-8">
              <div className="flex justify-between items-end">
                <span className="text-4xl font-black">98%</span>
                <span className="text-xs font-bold uppercase pb-1 opacity-50">Độ tin cậy</span>
              </div>
              <div className="w-full bg-[#F3F4F6] h-3 rounded-full mt-2 border-2 border-[#1A1A1A] overflow-hidden">
                <div className="bg-blue-500 h-full w-[98%]"></div>
              </div>
            </div>
          </motion.div>

          {/* Category Filter Cards */}
          <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-5 gap-4">
            {CATEGORIES.map((cat, idx) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.05 }}
                onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                className={`
                  flex flex-col items-center gap-3 p-6 rounded-3xl border-4 border-[#1A1A1A] transition-all
                  ${selectedCategory === cat.id ? "bg-white translate-y-1 shadow-none" : cat.color + " shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] hover:translate-y-[-2px]"}
                `}
              >
                <div className="bg-white border-2 border-[#1A1A1A] p-3 rounded-2xl shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
                   {getIcon(cat.icon)}
                </div>
                <span className="font-black text-sm uppercase tracking-wider">{cat.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Articles Section Grid */}
          <div id="articles-grid" className="md:col-span-12 py-10 space-y-10">
            <div className="flex items-center justify-between">
               <h2 className="text-4xl font-black uppercase tracking-tighter">Bí kíp tinh hoa</h2>
               <div className="h-2 flex-1 mx-8 bg-black/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5 }}
                    className="h-full bg-lime-400"
                  />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredArticles.map((article, idx) => {
                  const category = CATEGORIES.find(c => c.id === article.category);
                  return (
                    <motion.div
                      key={article.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => setSelectedArticle(article)}
                      className="group bg-white border-4 border-[#1A1A1A] rounded-[32px] p-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:translate-y-[-6px] hover:shadow-[14px_14px_0px_0px_rgba(26,26,26,1)] transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div className={`${category?.color} border-2 border-[#1A1A1A] px-3 py-1 rounded-lg font-bold text-[10px] uppercase tracking-widest`}>
                            {category?.label}
                          </div>
                          <span className="text-[10px] font-black uppercase opacity-30 flex items-center gap-1">
                            {article.readTime}
                          </span>
                        </div>
                        <h4 className="text-2xl font-black leading-tight uppercase group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h4>
                        <p className="font-bold text-[#1A1A1A]/60 text-sm italic">
                          "{article.excerpt}"
                        </p>
                      </div>
                      
                      <div className="pt-8 flex items-center justify-end">
                         <div className="w-12 h-12 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center group-hover:bg-lime-400 transition-colors">
                            <ArrowRight className="w-6 h-6" />
                         </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </main>

      {/* Footer Design Variant */}
      <footer className="bg-white border-t-4 border-[#1A1A1A] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-3xl font-black tracking-tighter uppercase italic">Kho tài liệu về AI</h2>
            <p className="max-w-xs font-bold opacity-50">Sáng tạo tri thức không giới hạn cùng Trí tuệ Nhân tạo thực thụ.</p>
          </div>
          <div className="flex gap-8">
            {["Facebook", "Instagram", "Threads", "TikTok"].map(social => (
              <a key={social} href="#" className="font-black uppercase text-xs tracking-widest hover:text-orange-500 transition-colors">{social}</a>
            ))}
          </div>
          <div className="font-black text-xs opacity-40 tracking-wider text-right leading-relaxed">
            Made by Nguyễn Gia Bảo - Lớp 7.2<br/>
            Giáo viên hướng dẫn: Nguyễn Tri Thị Tâm
          </div>
        </div>
      </footer>

      {/* Article Detail Modal (Same pattern as before but restyled) */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-[#1A1A1A]/60 backdrop-blur-md"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, rotate: -1 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white border-4 border-[#1A1A1A] rounded-[48px] w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-[20px_20px_0px_0px_rgba(26,26,26,1)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#F3F4F6] border-b-4 border-[#1A1A1A] p-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 bg-red-400 border-2 border-[#1A1A1A] rounded-full"></div>
                   <div className="w-3 h-3 bg-yellow-400 border-2 border-[#1A1A1A] rounded-full"></div>
                   <div className="w-3 h-3 bg-green-400 border-2 border-[#1A1A1A] rounded-full"></div>
                </div>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="bg-white border-2 border-[#1A1A1A] p-1 rounded-lg hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-10 md:p-14 overflow-y-auto space-y-10">
                <div className="space-y-4">
                  <div className="bg-lime-400 border-2 border-[#1A1A1A] px-4 py-1 rounded-full inline-block font-black text-xs uppercase tracking-widest">
                    {selectedArticle.category}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tighter">
                    {selectedArticle.title}
                  </h2>
                </div>
                
                <div className="prose prose-lg font-bold text-[#1A1A1A]/80 leading-relaxed border-l-4 border-lime-400 pl-6 italic">
                   {selectedArticle.content}
                </div>

                <div className="bg-purple-100 border-4 border-[#1A1A1A] p-8 rounded-[32px] shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]">
                   <h5 className="font-black uppercase text-xl mb-4">Mẹo nhỏ cho bạn:</h5>
                   <p className="font-bold opacity-70">Hãy thử áp dụng ngay kiến thức này vào bài tập về nhà của bạn để thấy sự khác biệt tức thì!</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


