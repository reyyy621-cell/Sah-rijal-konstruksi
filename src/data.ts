import { ServiceItem, PortfolioItem, TestimonialItem, FaqItem } from './types';

export const COMPANY_INFO = {
  name: "Sah Rijal Konstruksi",
  brand: "Sah Rijal Konstruksi",
  address: "jln.ceger raya, kec.pondok aren",
  whatsapp1: "+6283804081694",
  whatsapp2: "+6283804081694",
  email: "ptbintangutamaperkasasejahtera@gmail.com",
  serviceAreas: ["Surabaya", "Sidoarjo", "Gresik", "Jawa Timur"],
  instagram: "https://www.instagram.com/berkah_rizal_konstruksi?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
  tiktok: "https://www.tiktok.com/@brkkonstruksi.rizal?is_from_webapp=1&sender_device=pc"
};

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Bangun Rumah Impian Bersama Kontraktor Profesional",
    subtitle: "Melayani pembangunan rumah baru, renovasi rumah, desain arsitektur, interior, kolam renang, hingga bangunan komersial dengan kualitas terbaik.",
    image: "/assets/images/hero_banner_1782564083229.jpg"
  },
  {
    id: 2,
    title: "Rumah Modern yang Nyaman & Berkualitas",
    subtitle: "Wujudkan hunian tropis modern dengan konstruksi kokoh, estetika premium, dan fungsionalitas tinggi untuk keluarga masa kini.",
    image: "/assets/images/rumah_2_lantai_1782564100267.jpg"
  },
  {
    id: 3,
    title: "Desain • Bangun • Renovasi",
    subtitle: "Solusi satu atap dari tahap konsep arsitektur, perhitungan rancangan anggaran biaya transparan, hingga pengerjaan selesai dengan garansi.",
    image: "/assets/images/renovasi_rumah_1782564114836.jpg"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "bangun-baru",
    title: "Bangun Rumah Baru",
    description: "Layanan konstruksi rumah dari nol (fondasi hingga finishing) dengan standar struktur tahan gempa dan estetik modern.",
    icon: "Home"
  },
  {
    id: "renovasi-rumah",
    title: "Renovasi Rumah",
    description: "Peremajaan ruang, peninggian lantai, penambahan tingkat, maupun perbaikan total dengan efisiensi material tinggi.",
    icon: "Hammer"
  },
  {
    id: "renovasi-ruko",
    title: "Renovasi Ruko",
    description: "Fungsionalisasi ruko komersial agar menarik pelanggan baru dengan desain interior & fasad premium.",
    icon: "Store"
  }
];

export const ADVANTAGES = [
  {
    title: "Konsultasi Gratis",
    description: "Diskusikan keinginan, budget, dan rencana hunian Anda bersama tim kami tanpa biaya.",
    icon: "MessageSquare"
  },
  {
    title: "Survey Lokasi",
    description: "Tim ahli kami siap meluncur ke lokasi Anda di Surabaya, Sidoarjo, atau Gresik untuk pengukuran akurat.",
    icon: "MapPin"
  },
  {
    title: "Tim Arsitek",
    description: "Desain ditangani langsung oleh arsitek berpengalaman dengan portofolio estetis tropis modern.",
    icon: "PenTool"
  },
  {
    title: "Tim Sipil",
    description: "Pelaksanaan lapangan diawasi oleh insinyur teknik sipil untuk jaminan struktur kokoh.",
    icon: "ShieldAlert"
  },
  {
    title: "Desain Custom",
    description: "Tidak ada template berulang. Setiap desain disesuaikan dengan kebutuhan ruang dan gaya hidup Anda.",
    icon: "Sliders"
  },
  {
    title: "Material Berkualitas",
    description: "Penggunaan bahan bangunan berstandar SNI terpilih yang tahan lama di iklim tropis Indonesia.",
    icon: "Layers"
  },
  {
    title: "Bergaransi",
    description: "Jaminan masa pemeliharaan pasca serah terima untuk memastikan kualitas struktur dan kenyamanan hunian.",
    icon: "ShieldCheck"
  },
  {
    title: "Tepat Waktu",
    description: "Skedul pembangunan yang termonitor berkala melalui kurva S untuk komitmen serah terima terjadwal.",
    icon: "Clock"
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "p1",
    title: "Pekerjaan Maintenance",
    category: "Maintenance",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787575191/a654b953-410d-4af2-8671-632fbf358a4f.png"
  },
  {
    id: "p2",
    title: "Pekerjaan Maintenance",
    category: "Maintenance",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576696/76cc0b43-9a48-427a-b1bf-690dc90a518c.png"
  },
  {
    id: "p3",
    title: "Pekerjaan Atap/Genteng",
    category: "Atap & Genteng",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787575882/958f65d4-da0c-4418-a2d7-bdb70b070658.png"
  },
  {
    id: "p4",
    title: "Pekerjaan Atap/Genteng",
    category: "Atap & Genteng",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787575895/bcd54f4d-4474-43df-96dc-3900e222a82d.png"
  },
  {
    id: "p5",
    title: "Pekerjaan Atap/Genteng",
    category: "Atap & Genteng",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787575953/f2b422e9-589b-4112-a566-c71cca101f33.png"
  },
  {
    id: "p6",
    title: "Pekerjaan Atap/Genteng",
    category: "Atap & Genteng",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576557/33af8dcb-47db-4f5b-b84c-19dd7f857ca7.png"
  },
  {
    id: "p7",
    title: "Pekerjaan Atap/Genteng",
    category: "Atap & Genteng",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576580/1de4693f-5388-4826-a515-ce9ec65c1667.png"
  },
  {
    id: "p8",
    title: "Proyek Renovasi",
    category: "Renovasi",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576012/50f59448-3949-451a-baad-8234856ce54d.png"
  },
  {
    id: "p9",
    title: "Proyek Renovasi",
    category: "Renovasi",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576759/f776425a-97c5-40b3-bf5a-d8f3c310ef43.png"
  },
  {
    id: "p10",
    title: "Proyek Renovasi",
    category: "Renovasi",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576028/c1018851-2236-428d-ab32-330614d12f2e.png"
  },
  {
    id: "p11",
    title: "Proyek Renovasi",
    category: "Renovasi",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576313/46eb0c55-9615-4201-aa56-5dd6f547636f.png"
  },
  {
    id: "p12",
    title: "Proyek Renovasi",
    category: "Renovasi",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576678/912c2710-ea38-47dc-99e2-782c08488f1f.png"
  },
  {
    id: "p13",
    title: "Desain Arsitektur",
    category: "Desain Arsitektur",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576522/3205c998-e2bd-4e3c-be39-7d021cf60a6d.png"
  },
  {
    id: "p14",
    title: "Desain Arsitektur",
    category: "Desain Arsitektur",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576526/de5c2d26-8d82-4d16-9311-738d9022ef52.png"
  },
  {
    id: "p15",
    title: "Desain Arsitektur",
    category: "Desain Arsitektur",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576540/6c4f36dd-c086-4c18-8c54-fb07e66053de.png"
  },
  {
    id: "p16",
    title: "Desain Arsitektur",
    category: "Desain Arsitektur",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576843/b2b741c6-456f-4f42-a6bb-1ba99490443d.png"
  },
  {
    id: "p17",
    title: "Desain Arsitektur",
    category: "Desain Arsitektur",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576859/17caca0e-4aaa-4fd7-a8a3-cb61f3576863.png"
  },
  {
    id: "p18",
    title: "Desain Arsitektur",
    category: "Desain Arsitektur",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576875/2682c84b-eb60-4a94-8ed6-a2bd9739dc15.png"
  },
  {
    id: "p19",
    title: "Pekerjaan Tangga",
    category: "Tangga",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576589/7a2b94b3-6655-45d6-8bb2-dce392f5b60b.png"
  },
  {
    id: "p20",
    title: "Waterproofing Serat Fiber, Dak Rembes",
    category: "Waterproofing Serat Fiber, Dak Rembes",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576601/13cb4e8a-12d2-453c-9bfa-fccc754d2c3c.png"
  },
  {
    id: "p21",
    title: "Waterproofing Serat Fiber, Dak Rembes",
    category: "Waterproofing Serat Fiber, Dak Rembes",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576609/daa30833-7598-4917-98e0-da2250596d88.png"
  },
  {
    id: "p22",
    title: "Proyek Gudang Penyimpanan",
    category: "Gudang",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787577219/2e8c7aaf-7f5d-48c8-a534-744182057ed4.png"
  },
  {
    id: "p23",
    title: "Proyek Gudang Penyimpanan",
    category: "Gudang",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576923/f7c7ed28-6a9d-4e18-aeec-7fdf86ce3dc6.png"
  },
  {
    id: "p24",
    title: "Proyek Gudang Penyimpanan",
    category: "Gudang",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787577044/8890c6de-b420-43c0-a661-bdb0feb4c85e.png"
  },
  {
    id: "p25",
    title: "Proyek Gudang Penyimpanan",
    category: "Gudang",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787576958/fac25997-d982-40fc-98dc-2f0bdbf0a316.png"
  },
  {
    id: "p26",
    title: "Proyek Renovasi",
    category: "Renovasi",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787577266/a306b779-87b3-4739-b2e7-3b15f75c9deb.png"
  },
  {
    id: "p27",
    title: "Proyek Renovasi",
    category: "Renovasi",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787577326/fdf55a16-e41b-4f14-9f90-4ac699081243.png"
  },
  {
    id: "p28",
    title: "Proyek Renovasi",
    category: "Renovasi",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787577488/287b37af-3a33-49a0-a3b7-a788e48467a2.png"
  },
  {
    id: "p29",
    title: "Proyek Renovasi",
    category: "Renovasi",
    image: "https://res.cloudinary.com/ypvr42cl/image/upload/v1787577549/10c1e2bd-7667-4544-b90f-7357a79163d6.png"
  }
];

export const PROCESS_STEPS = [
  { step: "1", title: "Konsultasi", desc: "Diskusi kebutuhan ruang, gaya arsitektur, perkiraan budget, dan detail awal proyek secara gratis." },
  { step: "2", title: "Survey", desc: "Pengukuran lahan, pengecekan kontur tanah, orientasi matahari, dan analisis kondisi lingkungan sekitar." },
  { step: "3", title: "Desain", desc: "Pembuatan konsep denah, visualisasi 3D realistis (eksterior & interior), hingga disetujui klien." },
  { step: "4", title: "RAB", desc: "Penyusunan Rencana Anggaran Biaya mendetail yang transparan, berisi spesifikasi material dan ongkos jasa." },
  { step: "5", title: "Pembangunan", desc: "Pelaksanaan fisik konstruksi di lapangan diawasi oleh tim ahli sipil dengan laporan berkala." },
  { step: "6", title: "QC", desc: "Pemeriksaan detail kelayakan struktur, instalasi kelistrikan/plumbing, dan kerapian finishing (Quality Control)." },
  { step: "7", title: "Serah Terima", desc: "Penyerahan kunci rumah beserta berkas garansi konstruksi sebagai wujud jaminan purna jual kami." }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Bapak Hendra Wijaya",
    role: "Pemilik Rumah 2 Lantai - Dharmahusada, Surabaya",
    avatar: "👨‍💼",
    text: "Membangun rumah bersama Sah Rijal Konstruksi sangat memuaskan. Estimasi RAB sangat jujur, tidak ada biaya siluman di tengah pengerjaan. Tim arsiteknya sangat akomodatif menerjemahkan keinginan istri saya.",
    rating: 5
  },
  {
    id: "t2",
    name: "Ibu Citra Lestari",
    role: "Renovasi Rumah Tinggal - Graha Famili, Surabaya",
    avatar: "👩‍💼",
    text: "Pekerjaan renovasi rumah kami selesai tepat waktu sebelum lebaran. Tukangnya rapi, pembersihan proyek sangat diperhatikan, dan yang paling penting ada garansi kebocoran setelah serah terima.",
    rating: 5
  },
  {
    id: "t3",
    name: "Bapak Aditya Nugraha",
    role: "Pemilik Kost Modern - Keputih, Surabaya",
    avatar: "👨‍💻",
    text: "Sah Rijal Konstruksi merancang kost saya dengan tata ruang yang sangat efisien. Hasilnya, 12 kamar langsung penuh dalam 2 bulan pertama karena desain sirkulasi udara dan estetikanya sangat disukai mahasiswa.",
    rating: 5
  },
  {
    id: "t4",
    name: "Ibu Dr. Amalia",
    role: "Pemilik Ruko & Klinik - Buduran, Sidoarjo",
    avatar: "👩‍⚕️",
    text: "Sangat komunikatif! Mulai dari perizinan PBG/IMB dibantu penuh sampai tuntas. Desain fasad kliniknya minimalis modern dan mendapat banyak pujian dari pasien yang datang.",
    rating: 5
  },
  {
    id: "t5",
    name: "Bapak Gunawan",
    role: "Rumah Tropis Baru - Pondok Candra, Sidoarjo",
    avatar: "👨‍💼",
    text: "Konstruksi betonnya sangat rapi. Tim sipilnya sering mengirim dokumentasi progres mingguan berupa video, jadi saya yang sibuk bekerja tetap bisa memantau tanpa perlu datang setiap hari.",
    rating: 5
  },
  {
    id: "t6",
    name: "Bapak Rudy Hartono",
    role: "Interior & Kitchen Set - Menganti, Gresik",
    avatar: "🤵",
    text: "Finishing duco dan melamik untuk wardrobe serta kitchen set kami sangat presisi. Harganya rasional untuk kualitas premium, fitting-nya juga kokoh dan presisi. Highly recommended!",
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "f1",
    question: "Berapa biaya bangun rumah per meter persegi?",
    answer: "Biaya bangun rumah bervariasi tergantung pada spesifikasi material dan desain yang Anda pilih. Standar kami berkisar antara Rp 4.500.000 hingga Rp 7.500.000+ per m² untuk kategori rumah modern menengah hingga mewah dengan jaminan struktur kokoh."
  },
  {
    id: "f2",
    question: "Apakah saya bisa mendapatkan desain custom?",
    answer: "Tentu saja! Kami tidak menggunakan template desain massal. Setiap proyek dirancang secara custom oleh tim Arsitek kami berdasarkan bentuk lahan, orientasi arah matahari, gaya estetika pilihan Anda, serta disesuaikan dengan anggaran."
  },
  {
    id: "f3",
    question: "Apakah Sah Rijal Konstruksi melayani renovasi kecil?",
    answer: "Kami melayani renovasi skala menengah hingga besar (seperti peninggian plafon, peningkatan struktur jadi 2 lantai, renovasi fasad keseluruhan, pembuatan kolam renang, atau pengerjaan interior lengkap satu rumah). Untuk renovasi kecil (seperti tambal bocor genteng tunggal), kami sarankan menggunakan tukang lokal harian."
  },
  {
    id: "f4",
    question: "Berapa lama durasi pembangunan rumah?",
    answer: "Durasi pembangunan umumnya berkisar antara 4 hingga 8 bulan untuk rumah tinggal standar 1-2 lantai. Sebelum pengerjaan dimulai, kami akan memberikan skedul kerja resmi (Kurva-S) sehingga Anda dapat memantau ketepatan waktu proyek secara real-time."
  },
  {
    id: "f5",
    question: "Apakah ada garansi setelah serah terima?",
    answer: "Ya, kami berkomitmen menjaga kepuasan klien dengan memberikan Garansi Pemeliharaan selama 3 bulan untuk instalasi/finishing, serta Garansi Struktur hingga 10 tahun untuk pekerjaan konstruksi utama dari nol."
  },
  {
    id: "f6",
    question: "Apakah tim bisa survey langsung ke lokasi saya?",
    answer: "Sangat bisa! Kami melayani survey lokasi gratis dan pengukuran lapangan langsung untuk wilayah Surabaya, Sidoarjo, dan Gresik. Silakan isi form konsultasi atau hubungi WhatsApp kami untuk menjadwalkan jadwal survey."
  }
];

export const SEO_KEYWORDS = [
  "Kontraktor Rumah Surabaya",
  "Bangun Rumah Surabaya",
  "Renovasi Rumah Surabaya",
  "Jasa Arsitek Surabaya",
  "Kontraktor Interior Surabaya",
  "Kontraktor Kolam Renang",
  "Bangun Kos Surabaya",
  "Bangun Ruko Surabaya"
];
