import { Box, Image as ImageIcon, Building2, ArrowRight } from 'lucide-react';
import wireframeImg from '../assets/images/building_wireframe_1783499134783.jpg';
import renderImg from '../assets/images/building_render_1783499148040.jpg';
import photoImg from '../assets/images/building_photo_1783499161698.jpg';

export default function DesignToReality() {
  return (
    <section id="design-to-reality" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#9A721D] font-mono font-semibold text-xs uppercase tracking-widest block">
            ✦ PROSES DARI DESAIN KE REALISASI
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#16233A] uppercase tracking-tight">
            Dari 3D Model → Rendering → Hasil Konstruksi
          </h2>
          <div className="h-1.5 w-20 bg-[#C89A2B] mx-auto rounded-full" />
          <p className="font-sans text-gray-700 text-sm sm:text-base leading-relaxed">
            Saksikan bagaimana kami mewujudkan konsep desain digital Anda menjadi bangunan nyata dengan tingkat presisi dan akurasi tinggi.
          </p>
        </div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          
          {/* Subtle connecting arrows for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[33%] -translate-y-1/2 -translate-x-1/2 z-0">
            <ArrowRight className="h-12 w-12 text-gray-100" />
          </div>
          <div className="hidden md:block absolute top-1/2 left-[66%] -translate-y-1/2 -translate-x-1/2 z-0">
            <ArrowRight className="h-12 w-12 text-gray-100" />
          </div>

          {/* Column 1: 3D Model */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col h-full relative z-10 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#16233A]/5 p-3 rounded-xl">
                <Box className="h-6 w-6 text-[#16233A]" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-[#16233A] leading-tight">1. 3D Model</h3>
                <span className="font-mono text-[10px] text-gray-700 uppercase tracking-widest">Konsep Desain Digital</span>
              </div>
            </div>
            
            <div className="w-full aspect-video bg-gray-200 rounded-xl mb-6 overflow-hidden">
              <img 
                src={wireframeImg} 
                alt="3D Wireframe Model" 
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
              />
            </div>

            <p className="font-sans text-sm text-gray-600 leading-relaxed mt-auto">
              Tahap awal perancangan di mana struktur tata ruang dan volume bangunan dibentuk secara presisi dalam lingkungan digital. Kami memastikan setiap sudut telah dikalkulasi sesuai kebutuhan Anda.
            </p>
          </div>

          {/* Column 2: Rendering */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col h-full relative z-10 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#C89A2B]/10 p-3 rounded-xl">
                <ImageIcon className="h-6 w-6 text-[#9A721D]" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-[#16233A] leading-tight">2. Rendering</h3>
                <span className="font-mono text-[10px] text-gray-700 uppercase tracking-widest">Visualisasi Realistis</span>
              </div>
            </div>
            
            <div className="w-full aspect-video bg-gray-200 rounded-xl mb-6 overflow-hidden">
              <img 
                src={renderImg} 
                alt="3D Architectural Rendering" 
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-sans text-sm text-gray-600 leading-relaxed mt-auto">
              Model 3D diberikan material, tekstur, dan pencahayaan nyata. Tahap ini memberikan Anda gambaran pasti (fotorealistik) tentang bagaimana rupa bangunan Anda sebelum batu pertama diletakkan.
            </p>
          </div>

          {/* Column 3: Hasil Konstruksi */}
          <div className="bg-[#16233A] text-white rounded-2xl p-6 border border-transparent flex flex-col h-full relative z-10 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <Building2 className="h-6 w-6 text-[#9A721D]" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-white leading-tight">3. Hasil Konstruksi</h3>
                <span className="font-mono text-[10px] text-gray-300 uppercase tracking-widest">Bangunan Nyata</span>
              </div>
            </div>
            
            <div className="w-full aspect-video bg-gray-800 rounded-xl mb-6 overflow-hidden border border-gray-700">
              <img 
                src={photoImg} 
                alt="Actual Built Construction" 
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-sans text-sm text-gray-300 leading-relaxed mt-auto">
              Realisasi fisik dari desain digital dengan akurasi 99%. Tim sipil kami mengeksekusi proyek dengan standar kualitas tinggi, memastikan estetika dan kekuatan struktur bangunan terwujud sempurna.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
