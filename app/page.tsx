"use client"

import { useState, useEffect, useRef } from "react"
import {
  Moon,
  Sun,
  Globe,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  MapPin,
  Building,
  GraduationCap,
  Award,
  Code,
  Database,
  Cloud,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { useMediumArticles } from "../hooks/useMediumArticles"

function formatDate(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 1) return "1 gün önce"
  if (diffDays < 7) return `${diffDays} gün önce`
  if (diffDays < 30) return `${Math.ceil(diffDays / 7)} hafta önce`
  if (diffDays < 365) return `${Math.ceil(diffDays / 30)} ay önce`

  return date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
  })
}

const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      volunteer: "Volunteer",
      projects: "Projects",
      articles: "Articles",
      contact: "Contact",
    },
    hero: {
      lines: ["Hi, I'm Nur", "a backend developer", "where logic lives,", "data flows,", "and systems breathe."],
    },
    about: {
      title: "About",
      content: `The best code is the one you never have to explain. With a background in Electrical & Electronics Engineering, I think in systems – how each part connects, flows, and sometimes decides to fail spectacularly at 3AM.

Building clean, reliable, and scalable backend solutions isn’t just a job for me; it’s about preventing tomorrow’s headaches today. Java is my main tool, but curiosity is what keeps me pushing beyond what I know, questioning assumptions, and refining every line I write.

To me, backend development is an invisible craft. Users may never see it, but their experience depends entirely on it. I take pride in ensuring it just works – silently, seamlessly, and without excuses.`,
    },
    experience: {
      title: "Experience",
      items: [
        {
          title: "Getir X Patika.dev Bootcamp",
          role: "Backend Developer Trainee",
          period: "Mar 2025 – June 2025",
          description: `Gained hands-on experience with Spring Boot, PostgreSQL, WebFlux for reactive programming, JWT-based authentication, Docker containerization, CI/CD pipelines, and modern backend architectural patterns.

Strengthened skills in designing secure, thoroughly tested, and maintainable RESTful APIs by applying best practices in reactive programming, caching strategies, and system monitoring.

Built a comprehensive Library Management System that featured a score-based borrowing system and observer-pattern real-time updates, demonstrating advanced backend development capabilities.`,
        },
        {
          title: "UP School Java Backend Development Bootcamp",
          role: "Java Backend Software Development Trainee",
          period: "Feb 2023 – Aug 2023",
          description: `Completed an intensive 7-month program focusing on enterprise-level Java backend development.

Gained expertise in REST API architecture, database design and optimization (SQL & NoSQL), transaction management, DTO patterns, exception handling, and testing methodologies. Applied SOLID principles, clean architecture concepts, and industry-standard design patterns to build maintainable and scalable applications.

Designed and implemented a comprehensive Airline Ticketing System backend featuring modular Spring Boot architecture and complex business logic for seat reservations, pricing algorithms, and flight scheduling.`,
        },
        {
          title: "Enerjisa Toros Distribution Inc.",
          role: "'Spark' Summer Internship - Team Lead",
          period: "July 2021 – Aug 2021",
          description: `Led a cross-functional team in the “Electricity Fraud Prevention with Big Data” project, combining leadership with technical skills to deliver data-driven solutions alongside industry mentors.

Managed the full project lifecycle – from budget planning and risk assessment to timeline tracking – ensuring timely delivery with high quality.

Developed analytics tools to detect and prevent fraud by applying statistical analysis, pattern recognition, and basic machine learning techniques.

Strengthened project management, professional presentation, and team leadership skills through this intensive internship.`,
        },
        {
          title: "EÜAŞ (Electricity Generation Company)",
          role: "Engineering Intern",
          period: "Aug 2018 - Sept 2018 ",
          description: `Completed an engineering internship focused on hydroelectric power plant operations and Turkey’s renewable energy infrastructure.

Conducted research on HEPP operating principles, efficiency optimization, and grid integration. Participated in site visits to major facilities, gaining hands-on experience with turbines, control systems, and power generation.

Received training on energy generation, plant components, and electrical grid systems, strengthening my understanding of large-scale power networks.`,
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          title: "Çukurova University",
          degree: "B.Sc. in Electrical and Electronics Engineering ",
          period: "Feb 2024",
          description: ` Graduation Thesis: "Color Sorting System Using Arduino Nano" — Designed and implemented an automated industrial sorting system that detects object colors using TCS3200 sensors, processes data through custom algorithms on Arduino Nano, and controls servo motors for precise object positioning.

The project demonstrated skills in embedded programming, sensor integration, real-time processing, and mechanical system control. Applied software engineering principles including modular design, error handling, and system optimization.`,
        },
      ],
    },
    skills: {
      title: "Technical Skills & Certifications",
      categories: [
        {
          title: "Backend Development",
          skills: ["Java",
            "Spring Boot",
            "Spring WebFlux",
            "Reactive Programming",
            "R2DBC",
            "RESTful APIs",
            "Microservices",
            "JWT Authentication",
            "Observer Pattern"],
          icon: Code,
        },
        {
          title: "Databases",
          skills: ["PostgreSQL",
            "MySQL",
            "Database Design",
            "Query Optimization",
            "Transaction Management",
            "Soft Delete",
            "Audit Logging"],
          icon: Database,
        },
        {
          title: "Cloud & DevOps",
          skills: ["AWS Certified", "Docker", "CI/CD", "Cloud Deployment", "Monitoring", "Containerization"],
          icon: Cloud,
        },
        {
          title: "Tools & Documentation",
          skills: ["JUnit 5",
            "Mockito",
            "Integration Testing",
            "Exception Handling",
            "Swagger/OpenAPI",
            "Git",
            "Maven",
            "IntelliJ IDEA",
            "Postman"],
          icon: Shield,
        },
      ],
      certifications: [
        "AWS Certified Cloud Practitioner (Amazon)",
        "Java Backend Development Program (Up School)",
        "Modern Software Development with Microservices (Techcareer.net)",
        "Docker: From Basics to Advanced (Techcareer.net)",
      ],
      languages: [
        { language: "Turkish", level: "Native" },
        { language: "English", level: "Professional Working" },
      ],
    },
    volunteer: {
      title: "Volunteer Work",
      items: [
        {
          title: "Up School Mentorship Program",
          role: "Sof Skill Mentor",
          period: "2025 - Present",
          description: `As a Soft Skills Trainer at UP School, an edtech initiative dedicated to empowering women in technology, I deliver interactive sessions designed to enhance students’ personal growth, emotional intelligence, and professional effectiveness. 

 Within UP School’s mission to close the gender and talent gap in tech, I support learners in building key soft skills such as mindful awareness, resilience, time and energy management, genuine appreciation, growth mindset, and FeedForward practices. 

 These trainings are integrated into UP School’s holistic curriculum to equip students with the confidence, adaptability, and proactive thinking essential for thriving as future technology leaders.`,
        }
        ,
        {
          title: "IEEE Çukurova ",
          role: "Board Member & Team Lead",
          period: "Sept 2016 – May 2018",
          description: `Served as Board Member of IEEE Çukurova  for nearly 2 years, contributing significantly to the organization's growth and community engagement in the technology sector. Led multiple high-impact initiatives that bridged academia and industry.

Organized and managed major technical events, coordinating logistics, guest speakers, and networking opportunities for 500+ students and professionals. Successfully managed event budgets, vendor relationships, and stakeholder communications.

Led diversity and inclusion initiatives including the "Strong Women, Happy Tomorrow" conference, promoting gender equality in STEM fields and creating mentorship opportunities for female engineering students.

Managed social responsibility projects including nursing home visits, orphanage support programs, and educational book donation campaigns.`,
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Library Management System",
          description:
            "Advanced library management system with dynamic scoring, reactive book availability, and secure user management. Built with Java 21, Spring Boot 3, PostgreSQL, and WebFlux, featuring Docker deployment, soft delete, audit logging, and a comprehensive statistics dashboard.",
          tech: ["Spring Boot", "PostgreSQL", "WebFlux", "JWT", "Docker", "Swagger"],
          github: "https://github.com/nurrbb/libris",
        },
        {
          title: "Airline Ticketing System",
          description:
            "Backend service for managing airlines, airports, routes, flights, and ticketing with Spring Boot and MySQL. Features credit card masking, soft delete, global exception handling, and standardized REST APIs for reliable airline operations.",
          tech: ["Spring Boot", "MySQL", "JWT", "REST API", "Maven", "JUnit"],
          github: "https://github.com/nurrbb/AirlineTicketingSystem",
        },
        {
          title: "Color Sorting System (Arduino)",
          description:
            "Automated industrial sorting system using Arduino Nano and TCS3200 color sensors. Implements real-time color detection, classification algorithms, and servo motor control for precise object positioning.",
          tech: ["Arduino", "C++", "Sensors", "Servo Control", "Real-time Processing"],
          demo: "https://drive.google.com/drive/folders/1Nr52EKa43xApjjxBK-IsSKV1HU4VVZkA",
        },
      ],
    },
    articles: {
      title: "Medium Articles",
      loading: "Loading articles...",
      error: "Unable to load articles",
      items: [],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's build something amazing together",
      email: "enurb320@gmail.com",
      location: "Ankara, Turkey",
    },
  },
  tr: {
    nav: {
      about: "Hakkımda",
      experience: "Deneyim",
      education: "Eğitim",
      skills: "Yetenekler",
      volunteer: "Gönüllülük",
      projects: "Projeler",
      articles: "Yazılar",
      contact: "İletişim",
    },
    hero: {
      lines: [
        "Merhaba, ben Nur.",
        "Mantığı akışa,",
        "veriyi sisteme dönüştüren",
        "backend geliştiricisiyim.",
      ],
    },
    about: {
      title: "Hakkımda",
      content: `Backend geliştirme, yalnızca çalışan kodlar yazmak değil; karmaşık problemleri sadeleştirip işlevsel ve sürdürülebilir çözümler üretmektir.

      Yazdığım kodun hem makineye hem de sonraki geliştiricilere değer katmasını sağlıyorum. İyi kodun, bugünü olduğu kadar yarını da düşündüğüne inanırım.

“Neden” sorusunu sormaktan vazgeçmeyen, detayları anlamlandırıp onlardan verimli yollar üreten ve hataları gelişimin ayrılmaz bir parçası olarak gören bir geliştiriciyim.`,
    },
    experience: {
      title: "Deneyim",
      items: [
        {
          title: "Getir x Patika.dev Bootcamp",
          role: "Backend Geliştirici Stajyeri",
          period: "Mart 2025 – Mayıs 2025",
          description: `Spring Boot, PostgreSQL, reaktif programlama için WebFlux, JWT tabanlı kimlik doğrulama, Docker konteynerleştirme, CI/CD pipeline’ları ve modern backend mimari kalıpları konularında uygulamalı deneyim kazandım.

Reaktif programlama, önbellekleme stratejileri ve sistem izleme gibi en iyi uygulamaları kullanarak güvenli, kapsamlı test edilmiş ve sürdürülebilir RESTful API’ler tasarlama becerilerimi geliştirdim.

Kitap ödünç alma puanlama sistemi ve gözlemci deseniyle gerçek zamanlı güncellemeler içeren kapsamlı bir Kütüphane Yönetim Sistemi geliştirdim.`,
        },
        {
          title: "UP School Backend Java Development Bootcamp",
          role: "Java Backend Yazılım Geliştirme Stajyeri",
          period: "Şubat 2023 – Ağustos 2023",
          description: `Kurumsal düzeyde Java backend geliştirmeye odaklanan yoğun 7 aylık programı tamamladım.
REST API mimarisi, veritabanı tasarımı ve optimizasyonu (SQL & NoSQL), işlem yönetimi, DTO kalıpları, exception handling ve test metodolojileri konularında derinlemesine uzmanlık kazandım. 

Sürdürülebilir ve ölçeklenebilir uygulamalar geliştirmek için SOLID prensipleri, temiz mimari yaklaşımları ve endüstri standardı tasarım kalıplarını uyguladım.

Spring Boot ile modüler mimariye sahip, koltuk rezervasyonu, fiyatlandırma algoritmaları ve uçuş planlaması gibi karmaşık iş mantıkları içeren kapsamlı bir Havayolu Biletleme Sistemi backend’i tasarladım ve geliştirdim.`,

        },
        {
          title: "Enerjisa Toros Dağıtım A.Ş.",
          role: "Stajer Mühendis - Takım Lideri",
          period: "Temmuz 2021 – Ağustos 2021",
          description: `“Büyük Veri ile Elektrik Dolandırıcılığı Önleme” projesinde, çapraz fonksiyonlu ekibe liderlik ederek hem teknik hem yönetsel becerilerimi geliştirdim. Endüstri mentorları ve ekip arkadaşlarıyla veri odaklı çözümler ürettik.

Projenin bütçe planlaması, risk analizi ve zaman yönetimi dahil tüm süreçlerini yürüterek hedeflere zamanında ve yüksek kaliteyle ulaştık.

Elektrik dolandırıcılığını tespit etmek için istatistiksel analiz, kalıp tanıma ve makine öğrenmesi uygulamaları geliştirdim. Bu süreç, proje yönetimi, profesyonel sunum ve takım liderliği gibi kritik yetkinliklerimi güçlendirdi.`,
        },
        {
          title: "EÜAŞ (Elektrik Üretim A.Ş.)",
          role: "Stajer Mühendis",
          period: "Ağu 2018 - Eylül 2018",
          description: `Hidroelektrik santral operasyonları ve Türkiye'nin yenilenebilir enerji altyapısına odaklanan yoğun bir mühendislik stajı tamamladım. HES işletme ilkeleri, verimlilik optimizasyonu ve şebeke entegrasyon stratejileri üzerine kapsamlı araştırma yürüttüm.

Büyük hidroelektrik tesislerine teknik saha ziyaretlerine katıldım, türbin operasyonları, kontrol sistemleri ve güç üretim süreçleri konusunda uygulamalı deneyim kazandım. Endüstriyel ortamlarda gerçek zamanlı tesis izleme, bakım prosedürleri ve güvenlik protokollerini gözlemledim.

Enerji üretim süreçleri, santral bileşenleri ve elektrik şebeke sistemleri konusunda özel eğitim aldım. Yük dengeleme, voltaj regülasyonu ve güç dağıtım ağlarını inceledim, büyük ölçekli elektrik sistemleri anlayışımı derinleştirdim.`,
        },
      ],
    },
    education: {
      title: "Eğitim",
      items: [
        {
          title: "Çukurova Üniversitesi",
          degree: "Elektrik ve Elektronik Mühendisliği(%100 İngilizce)",
          period: "Şubat 2024",
          description: `“Arduino Nano Kullanarak Renk Sıralama Sistemi” — TCS3200 sensörleri kullanarak nesnelerin renklerini algılayan, Arduino Nano üzerinde özel algoritmalarla verileri işleyen ve servo motorlarla hassas nesne konumlandırması yapan otomatik endüstriyel sıralama sistemi tasarlayıp uyguladım.

Proje, gömülü programlama, sensör entegrasyonu, gerçek zamanlı işleme ve mekanik sistem kontrolü becerilerini gösterdi. Modüler tasarım, hata işleme ve sistem optimizasyonu dahil olmak üzere yazılım mühendisliği ilkelerini uyguladım.`,
        },
      ],
    },
    skills: {
      title: "Teknik Yetenekler ve Sertifikalar",
      categories: [
        {
          title: "Backend Geliştirme",
          skills: ["Java",
            "Spring Boot",
            "Spring WebFlux",
            "Reaktif Programlama",
            "R2DBC",
            "RESTful API'ler",
            "Mikroservisler",
            "JWT Kimlik Doğrulama",
            "Observer (Gözlemci) Deseni"],
          icon: Code,
        },
        {
          title: "Veritabanları",
          skills: ["PostgreSQL", "MySQL", "Veritabanı Tasarımı", "Sorgu Optimizasyonu", "İşlem Yönetimi", "Soft Delete (Yumuşak Silme)",
            "Audit Logging (Kayıt İzleme)"],
          icon: Database,
        },
        {
          title: "Bulut ve DevOps",
          skills: ["AWS Sertifikası", "Docker", "CI/CD", "Bulut Dağıtımı", "İzleme", "Konteynerleştirme"],
          icon: Cloud,
        },
        {
          title: "Araçlar ve Dokümantasyon",
          skills: ["JUnit 5",
            "Mockito",
            "Entegrasyon Testleri",
            "Exception Handling (Hata Yönetimi)",
            "Swagger / OpenAPI",
            "Git",
            "Maven",
            "IntelliJ IDEA",
            "Postman"],
          icon: Shield,
        },
      ],
      certifications: [
        "AWS Certified Cloud Practitioner",
        "Docker: Temelden İleri Seviyeye",
        "Mikroservislerle Modern Yazılım Geliştirme (Techcareer.net)",
        "Siber Güvenlik Online Eğitim Programı (Bilişim Vadisi)",
      ],
      languages: [
        { language: "Türkçe", level: "Ana Dil" },
        { language: "İngilizce", level: "Profesyonel Çalışma" },
      ],
    },
    volunteer: {
      title: "Gönüllü Çalışmalar",
      items: [
        {
          title: "Up School Mentorluk Programı",
          role: "Soft Skill Mentoru",
          period: "2025 - Devam Ediyor",
          description: `Kadınları teknoloji dünyasında daha güçlü kılmayı hedefleyen bir eğitim teknolojileri girişimi olan UP School’da Soft Skill Mentoru olarak görev yapıyorum. Bu kapsamda, katılımcıların kişisel gelişimlerini, duygusal zekalarını ve profesyonel yetkinliklerini artırmaya yönelik interaktif oturumlar yürütüyorum.

Mindful farkındalık, dayanıklılık, zaman ve enerji yönetimi, gelişim odaklı düşünce ve geleceğe yönelik geri bildirim (FeedForward) gibi konulara odaklanan bu eğitimler, UP School’un bütünsel öğrenme yaklaşımının önemli bir parçasını oluşturuyor.

Amacım, katılımcıların teknoloji sektöründe kendilerine güvenen, uyum kabiliyeti yüksek ve proaktif bireyler olarak ilerlemelerine katkıda bulunmak.`,
        },
        {
          title: "IEEE Çukurova",
          role: "Yönetim Kurulu Üyesi ve Takım Lideri",
          period: "Eylül 2016 – Mayıs 2018",
          description: `IEEE Çukurova'da yaklaşık 2 yıl Yönetim Kurulu Üyesi olarak görev aldım. Bu süre boyunca ekibimizle birlikte organizasyonun büyümesine katkı sağladık ve teknoloji sektöründe topluluk katılımını artıran birçok önemli projeyi hayata geçirdik.

Akademi ve endüstriyi bir araya getiren, 500’den fazla öğrenci ve profesyonelin katıldığı büyük teknik etkinliklerin planlama ve yürütme süreçlerinde aktif rol aldım. Lojistikten bütçe yönetimine, satıcı ilişkilerinden konuk konuşmacı koordinasyonuna kadar tüm adımları ekip arkadaşlarımla uyum içinde yönettik.

STEM alanlarında cinsiyet eşitliğini desteklemek amacıyla düzenlediğimiz “Güçlü Kadınlar, Mutlu Yarın” konferansı gibi çeşitlilik ve kapsayıcılık projelerinde de yer aldım. Ayrıca huzurevi ziyaretleri, yetimhane destek programları ve eğitim kitabı bağış kampanyaları gibi sosyal sorumluluk çalışmalarına katkıda bulundum.`,
        },
      ],
    },
    projects: {
      title: "Projeler",
      items: [
        {
          title: "Libris - Kütüphane Yönetim Sistemi",
          description:
            "Java 21, Spring Boot 3, PostgreSQL ve WebFlux kullanılarak geliştirilmiş, dinamik puanlama sistemi, reaktif kitap erişilebilirliği ve güvenli kullanıcı yönetimine sahip gelişmiş bir kütüphane yönetim sistemi. Docker ile dağıtım, soft delete, audit logging ve kapsamlı bir istatistik paneli içerir.",
          tech: ["Spring Boot", "PostgreSQL", "WebFlux", "JWT", "Docker", "Swagger"],
          github: "https://github.com/nurrbb/libris",
          demo: "#",
        },
        {
          title: "Havayolu Biletleme Sistemi",
          description:
            "Spring Boot ve MySQL kullanılarak geliştirilmiş, havayolu şirketleri, havalimanları, rotalar, uçuşlar ve biletleme süreçlerini yöneten backend servisi. Güvenli bilet alımları için kredi kartı maskeleme, veri bütünlüğü için soft delete, global hata yönetimi ve standartlaştırılmış REST API’leri ile güvenilir havayolu operasyonlarını destekler.",
          tech: ["Spring Boot", "MySQL", "JWT", "REST API", "Maven", "JUnit"],
          github: "https://github.com/nurrbb/AirlineTicketingSystem",
          demo: "#",
        },
        {
          title: "Renk Sıralama Sistemi (Arduino)",
          description:
            "Arduino Nano ve TCS3200 renk sensörleri kullanarak otomatik endüstriyel sıralama sistemi. Gerçek zamanlı renk algılama, sınıflandırma algoritmaları ve hassas nesne konumlandırması için servo motor kontrolü uygular.",
          tech: ["Arduino", "C++", "Sensörler", "Servo Kontrolü", "Gerçek Zamanlı İşleme"],
          github: "#",
          demo: "https://drive.google.com/drive/folders/1Nr52EKa43xApjjxBK-IsSKV1HU4VVZkA",
        },
      ],
    },
    articles: {
      title: "Medium Yazıları",
      loading: "Yazılar yükleniyor...",
      error: "Yazılar yüklenemedi",
      items: [],
    },
    contact: {
      title: "İletişime Geçin",
      subtitle: "Birlikte harika bir şeyler inşa edelim",
      email: "enurb320@gmail.com",
      location: "Ankara, Türkiye",
    },
  },
}

// Enhanced scroll animations with more sophisticated effects
export function useScrollAnimation(dependencies: any[] = []) {
  const [visibleElements, setVisibleElements] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisibleElements((prev) => {
          const newSet = new Set(prev)
          if (entry.isIntersecting) {
            newSet.add(entry.target.id)
          } else {
            newSet.delete(entry.target.id)
          }
          return newSet
        })
      })
    }, { threshold: 0.1 })

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, dependencies)

  return visibleElements
}



// Enhanced sliding text animation with scroll trigger
function SlidingText({ lines, language }: { lines: string[]; language: string }) {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setVisibleLines([])
  }, [language])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // İlk satırı kayarak ve solarak getir
            setTimeout(() => {
              setVisibleLines([0])
            }, 0)

            // Diğer tüm satırları birlikte kayarak ve solarak getir
            setTimeout(() => {
              setVisibleLines([0, 1, 2, 3, 4])
            }, 1500)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [lines])

  return (
    <div ref={containerRef} className="text-left">
      {lines.map((line, index) => (
        <div
          key={index}
          className={`text-hero-title font-thin leading-tight mb-3 transition-all duration-1000 ease-out transform ${visibleLines.includes(index)
            ? "opacity-100 translate-x-0 blur-0"
            : "opacity-0 -translate-x-20 blur-sm"
            }`}
          style={{
            transitionDelay: "0ms", // Hepsi kendi setTimeout’una göre geliyor
          }}
        >
          {line}
        </div>
      ))}
    </div>
  )
}




export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)
  const [language, setLanguage] = useState<"en" | "tr">("en")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPageLoaded, setIsPageLoaded] = useState(false)

  const { articles: mediumArticles, loading: articlesLoading } = useMediumArticles()

  useEffect(() => {
    document.documentElement.classList.add("dark")
    const timer = setTimeout(() => {
      setIsPageLoaded(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

const visibleElements = useScrollAnimation([mediumArticles.length])

  const t = translations[language]

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en")
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const isVisible = (id: string) => visibleElements.has(id)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark" : ""}`}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
        }
        
        .animate-slide-up {
          opacity: 0;
          transform: translateY(120px) scale(0.9) rotateX(10deg);
          transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-slide-up.visible {
          opacity: 1;
          transform: translateY(0) scale(1) rotateX(0deg);
        }
        
        .animate-slide-left {
          opacity: 0;
          transform: translateX(-120px) rotateY(-15deg) scale(0.9);
          transition: all 2.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-slide-left.visible {
          opacity: 1;
          transform: translateX(0) rotateY(0deg) scale(1);
        }
        
        .animate-slide-right {
          opacity: 0;
          transform: translateX(120px) rotateY(15deg) scale(0.9);
          transition: all 2.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-slide-right.visible {
          opacity: 1;
          transform: translateX(0) rotateY(0deg) scale(1);
        }

        .animate-slide-down {
          opacity: 0;
          transform: translateY(-120px) scale(0.85) rotateX(-10deg);
          transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-slide-down.visible {
          opacity: 1;
          transform: translateY(0) scale(1) rotateX(0deg);
        }

        .animate-scale-up {
          opacity: 0;
          transform: scale(0.5) translateY(80px) rotateX(20deg);
          transition: all 2.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-scale-up.visible {
          opacity: 1;
          transform: scale(1) translateY(0) rotateX(0deg);
        }

        .animate-fade-slide {
          opacity: 0;
          transform: translateY(80px) translateX(-60px) scale(0.85) rotateZ(3deg);
          transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-fade-slide.visible {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1) rotateZ(0deg);
        }

        .animate-float {
          opacity: 0;
          transform: translateY(60px) rotateZ(5deg) scale(0.9);
          transition: all 1.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-float.visible {
          opacity: 1;
          transform: translateY(0) rotateZ(0deg) scale(1);
        }

        .animate-bounce-in {
          opacity: 0;
          transform: scale(0.2) translateY(150px) rotateZ(10deg);
          transition: all 1.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .animate-bounce-in.visible {
          opacity: 1;
          transform: scale(1) translateY(0) rotateZ(0deg);
        }

        .animate-elastic {
          opacity: 0;
          transform: scale(0.3) rotateX(20deg) translateY(100px);
          transition: all 2.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .animate-elastic.visible {
          opacity: 1;
          transform: scale(1) rotateX(0deg) translateY(0);
        }

        .animate-zoom-blur {
          opacity: 0;
          transform: scale(1.5) translateY(60px);
          filter: blur(10px);
          transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-zoom-blur.visible {
          opacity: 1;
          transform: scale(1) translateY(0);
          filter: blur(0px);
        }
        
        .text-hero-title {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 200;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-weight: 300;
          letter-spacing: -0.01em;
        }
        
        .font-thin {
          font-weight: 200;
        }
        
        .font-extralight {
          font-weight: 200;
        }

        .timeline {
          position: relative;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 2rem;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, 
            hsl(var(--primary)), 
            hsl(var(--primary) / 0.9), 
            hsl(var(--primary) / 0.6),
            hsl(var(--primary) / 0.3),
            hsl(var(--primary) / 0.1)
          );
          border-radius: 3px;
          box-shadow: 0 0 20px hsl(var(--primary) / 0.3);
        }
        
        .timeline-item {
          position: relative;
          padding-left: 5.5rem;
          margin-bottom: 5rem;
        }
        
        .timeline-dot {
          position: absolute;
          left: 1rem;
          top: 1.5rem;
          width: 2rem;
          height: 2rem;
          background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.7));
          border: 5px solid hsl(var(--background));
          border-radius: 50%;
          box-shadow: 
            0 0 0 5px hsl(var(--primary) / 0.2), 
            0 8px 25px hsl(var(--primary) / 0.4),
            inset 0 2px 5px rgba(255,255,255,0.2);
          z-index: 10;
          /* Dots stay completely static - override any animations */
          opacity: 1 !important;
          transform: none !important;
          animation: none !important;
          transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }

        .timeline-dot:hover {
          transform: scale(1.15);
          box-shadow: 
            0 0 0 8px hsl(var(--primary) / 0.3), 
            0 12px 35px hsl(var(--primary) / 0.5),
            inset 0 2px 5px rgba(255,255,255,0.3);
        }

        .timeline-dot::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.8);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .page-load-animation {
          opacity: 0;
          transform: translateY(40px) scale(0.95) rotateX(5deg);
          transition: all 2.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .page-load-animation.loaded {
          opacity: 1;
          transform: translateY(0) scale(1) rotateX(0deg);
        }

        .stagger-1 { transition-delay: 0.2s; }
        .stagger-2 { transition-delay: 0.4s; }
        .stagger-3 { transition-delay: 0.6s; }
        .stagger-4 { transition-delay: 0.8s; }
        .stagger-5 { transition-delay: 1s; }
        .stagger-6 { transition-delay: 1.2s; }

        .skill-card {
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-card:hover {
  transform: translateY(-15px) scale(1.03);
  box-shadow: 0 30px 60px hsl(var(--primary) / 0.2);
}


        .project-card {
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover {
          transform: translateY(-20px) rotateX(8deg) scale(1.02);
          box-shadow: 0 40px 80px rgba(0,0,0,0.2);
        }

        .timeline-content {
          opacity: 0;
          transform: translateX(60px) rotateY(5deg) scale(0.9);
          transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-item.visible .timeline-content {
          opacity: 1;
          transform: translateX(0) rotateY(0deg) scale(1);
        }

        /* Enhanced button hover effects */
        .btn-enhanced {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .btn-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s;
        }

        .btn-enhanced:hover::before {
          left: 100%;
        }

        .btn-enhanced:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        /* Parallax effect for sections */
        .parallax-section {
          transform-style: preserve-3d;
        }

        /* Enhanced card animations */
        .enhanced-card {
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
        }

        .enhanced-card:hover {
          transform: translateY(-15px) rotateX(10deg) rotateY(5deg);
          box-shadow: 
            0 25px 50px rgba(0,0,0,0.15),
            0 0 0 1px hsl(var(--primary) / 0.1);
        }

        /* Smooth separator animations */
        .separator-enhanced {
          position: relative;
          overflow: hidden;
        }

        .separator-enhanced::after {
          content: '';
          position: absolute;
          top: 50%;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, hsl(var(--primary)), transparent);
          transform: translateY(-50%);
          transition: left 2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .separator-enhanced.visible::after {
          left: 100%;
        }

        /* Light mode için özel stiller ekle */
        .light .bg-background {
          background-color: #ffffff;
        }

        .light .text-foreground {
          color: #1f2937;
        }

        .light .text-muted-foreground {
          color: #6b7280;
        }

        .light .bg-card {
          background-color: #f9fafb;
        }

        .light .border-border {
          border-color: #e5e7eb;
        }

        .light .enhanced-card {
          background-color: #f9fafb;
          border-color: #e5e7eb;
        }

        .light .enhanced-card:hover {
          background-color: #f3f4f6;
          border-color: #d1d5db;
        }

        /* Light mode için timeline kartları */
        .light .timeline-content .enhanced-card {
          background-color: #f8fafc;
          border-color: #e2e8f0;
        }

        .light .timeline-content .enhanced-card:hover {
          background-color: #f1f5f9;
          border-color: #cbd5e1;
        }

        /* Light mode için header */
        .light header {
          background-color: rgba(255, 255, 255, 0.95);
          border-color: rgba(229, 231, 235, 0.5);
        }

        /* Light mode için skill kartları */
        .light .skill-card .enhanced-card {
          background-color: #f8fafc;
          border-color: #e2e8f0;
        }

        .light .skill-card .enhanced-card:hover {
          background-color: #f1f5f9;
        }

        /* Light mode için proje kartları */
        .light .project-card .enhanced-card {
          background-color: #f8fafc;
          border-color: #e2e8f0;
        }

        .light .project-card .enhanced-card:hover {
          background-color: #f1f5f9;
        }

        /* Light mode için article kartları */
        .light .enhanced-card {
          background-color: #f8fafc;
          border-color: #e2e8f0;
        }

        .light .enhanced-card:hover {
          background-color: #f1f5f9;
          border-color: #cbd5e1;
        }

        /* Light mode için footer */
        .light footer {
          background-color: #f9fafb;
          border-color: #e5e7eb;
        }
      `}</style>

      <div className="bg-background text-foreground">
        {/* Enhanced Header */}
        <header
          className={`fixed top-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/50 z-50 page-load-animation ${isPageLoaded ? "loaded" : ""}`}
        >
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between items-center h-16">
              <div className="font-extralight text-xl tracking-wide hover:text-primary transition-all duration-500 cursor-pointer">
                Nur B.
              </div>

              <nav className="hidden md:flex space-x-8">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="text-sm font-light hover:text-primary transition-all duration-500 tracking-wide relative group"
                  >
                    {value}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </button>
                ))}
              </nav>

              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="btn-enhanced hover:scale-110 transition-transform"
                >
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="btn-enhanced hover:scale-110 transition-transform"
                >
                  <Globe className="h-4 w-4" />
                  <span className="ml-1 text-xs font-light">{language.toUpperCase()}</span>
                </Button>

                <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {isMenuOpen && (
              <nav className="md:hidden py-4 border-t animate-slide-down visible">
                <div className="flex flex-col space-y-2">
                  {Object.entries(t.nav).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => scrollToSection(key)}
                      className="text-left px-2 py-1 text-sm font-light hover:text-primary transition-colors"
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </nav>
            )}
          </div>
        </header>

        <main className={`pt-16 page-load-animation ${isPageLoaded ? "loaded" : ""}`}>
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Enhanced Hero Section */}
            <section className="min-h-screen flex items-center parallax-section">
              <div className="w-full max-w-2xl">
                <SlidingText lines={t.hero.lines} language={language} />
              </div>
            </section>

            {/* Enhanced About Section */}
            <section id="about" className="py-20">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div
                  data-animate
                  id="about-image"
                  className={`animate-slide-left ${isVisible("about-image") ? "visible" : ""}`}
                >
                  <div className="relative group enhanced-card">
                    <Image
                      src="/images/profile-photo.jpg"
                      alt="Nur's Profile"
                      width={500}
                      height={600}
                      className="w-full h-auto object-cover rounded-lg transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="space-y-8">
                  <h2
                    data-animate
                    id="about-title"
                    className={`text-4xl font-thin animate-slide-right ${isVisible("about-title") ? "visible" : ""}`}
                  >
                    {t.about.title}
                  </h2>
                  <div className="space-y-6">
                    {t.about.content.split("\n\n").map((paragraph, index) => (
                      <p
                        key={index}
                        data-animate
                        id={`about-paragraph-${index}`}
                        className={`text-muted-foreground leading-relaxed font-light text-lg animate-slide-right stagger-${index + 1} ${isVisible(`about-paragraph-${index}`) ? "visible" : ""}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div
              data-animate
              id="separator-1"
              className={`separator-enhanced animate-scale-up ${isVisible("separator-1") ? "visible" : ""}`}
            >
              <Separator className="my-20" />
            </div>

            {/* Enhanced Experience Section */}
            <section id="experience" className="py-20">
              <div className="space-y-16">
                <h2
                  data-animate
                  id="experience-title"
                  className={`text-4xl font-thin text-center animate-slide-down ${isVisible("experience-title") ? "visible" : ""}`}
                >
                  {t.experience.title}
                </h2>

                <div className="timeline">
                  {t.experience.items.map((item, index) => (
                    <div
                      key={index}
                      data-animate
                      id={`experience-${index}`}
                      className={`timeline-item animate-slide-up stagger-${index + 1} ${isVisible(`experience-${index}`) ? "visible" : ""}`}
                    >
                      <div className="timeline-dot" style={{ opacity: 1, transform: "none" }}></div>
                      <div className="timeline-content enhanced-card bg-card border rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:border-primary/30">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                          <div className="space-y-2">
                            <h3 className="text-2xl font-light text-foreground hover:text-primary transition-colors duration-300">
                              {item.title}
                            </h3>
                            <p className="text-lg font-light text-primary flex items-center gap-2">
                              <Building className="w-5 h-5" />
                              {item.role}
                            </p>
                          </div>
                          <Badge
                            variant="outline"
                            className="font-light text-sm px-4 py-2 w-fit hover:bg-primary/10 transition-colors duration-300"
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            {item.period}
                          </Badge>
                        </div>
                        <div className="prose dark:prose-invert max-w-none">
                          {item.description.split("\n\n").map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-muted-foreground font-light leading-relaxed mb-4 last:mb-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div
              data-animate
              id="separator-2"
              className={`separator-enhanced animate-scale-up ${isVisible("separator-2") ? "visible" : ""}`}
            >
              <Separator className="my-20" />
            </div>

            {/* Enhanced Education Section */}
            <section id="education" className="py-20">
              <div className="space-y-16">
                <h2
                  data-animate
                  id="education-title"
                  className={`text-4xl font-thin text-center animate-slide-down ${isVisible("education-title") ? "visible" : ""}`}
                >
                  {t.education.title}
                </h2>

                <div className="flex justify-center">
                  {t.education.items.map((item, index) => (
                    <div
                      key={index}
                      data-animate
                      id={`education-${index}`}
                      className={`max-w-4xl w-full animate-elastic ${isVisible(`education-${index}`) ? "visible" : ""}`}
                    >
                      <Card className="education-card border-2 border-primary/30 bg-gradient-to-br from-card to-card/70 shadow-xl hover:shadow-3xl transition-all duration-700 hover:border-primary/50">
                        <CardHeader className="pb-6">
                          <div className="flex items-start justify-between gap-6">
                            <div className="space-y-3">
                              <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/15 rounded-lg hover:bg-primary/25 transition-colors duration-300">
                                  <GraduationCap className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                  <CardTitle className="text-2xl font-light hover:text-primary transition-colors duration-300">
                                    {item.title}
                                  </CardTitle>
                                  <CardDescription className="text-lg font-light text-primary mt-2">
                                    {item.degree}
                                  </CardDescription>
                                </div>
                              </div>
                            </div>
                            <Badge
                              variant="secondary"
                              className="font-light px-4 py-2 bg-primary/15 text-primary border-primary/30 hover:bg-primary/25 transition-colors duration-300"
                            >
                              {item.period}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="prose dark:prose-invert max-w-none">
                            {item.description.split("\n\n").map((paragraph, pIndex) => (
                              <p
                                key={pIndex}
                                className="text-muted-foreground font-light leading-relaxed mb-5 last:mb-0 text-base"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div
              data-animate
              id="separator-3"
              className={`separator-enhanced animate-scale-up ${isVisible("separator-3") ? "visible" : ""}`}
            >
              <Separator className="my-20" />
            </div>

            {/* Enhanced Skills Section */}
            <section id="skills" className="py-20">
              <div className="space-y-16">
                <h2
                  data-animate
                  id="skills-title"
                  className={`text-4xl font-thin text-center animate-zoom-blur ${isVisible("skills-title") ? "visible" : ""}`}
                >
                  {t.skills.title}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {t.skills.categories.map((category, index) => (
                    <div
                      key={index}
                      data-animate
                      id={`skill-category-${index}`}
                      className={`skill-card animate-bounce-in stagger-${index + 1} ${isVisible(`skill-category-${index}`) ? "visible" : ""}`}
                    >
                      <Card className="enhanced-card h-full hover:shadow-2xl transition-all duration-700">
                        <CardHeader className="pb-4">
                          <CardTitle className="flex items-center gap-4 text-xl font-light">
                            <div className="p-3 bg-primary/15 rounded-lg hover:bg-primary/25 transition-colors duration-300">
                              <category.icon className="w-6 h-6 text-primary" />
                            </div>
                            {category.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="secondary"
                                className="font-light hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-10 mt-16">
                  <div
                    data-animate
                    id="certifications"
                    className={`animate-float ${isVisible("certifications") ? "visible" : ""}`}
                  >
                    <Card className="enhanced-card">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl font-light">
                          <Award className="w-6 h-6 text-primary" />
                          {language === "tr" ? "Sertifikalar" : "Certifications"}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {t.skills.certifications.map((cert, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="font-light">{cert}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div
                    data-animate
                    id="languages"
                    className={`animate-float stagger-1 ${isVisible("languages") ? "visible" : ""}`}
                  >
                    <Card className="enhanced-card">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl font-light">
                          <Globe className="w-6 h-6 text-primary" />
                          {language === "tr" ? "Diller" : "Languages"}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {t.skills.languages.map((lang, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center hover:scale-105 transition-transform duration-300"
                            >
                              <span className="font-light text-lg">{lang.language}</span>
                              <Badge variant="outline" className="hover:bg-primary/10 transition-colors duration-300">
                                {lang.level}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            <div
              data-animate
              id="separator-4"
              className={`separator-enhanced animate-scale-up ${isVisible("separator-4") ? "visible" : ""}`}
            >
              <Separator className="my-20" />
            </div>

            {/* Enhanced Volunteer Section */}
            <section id="volunteer" className="py-20">
              <div className="space-y-12">
                <h2
                  data-animate
                  id="volunteer-title"
                  className={`text-4xl font-thin text-center animate-slide-down ${isVisible("volunteer-title") ? "visible" : ""}`}
                >
                  {t.volunteer.title}
                </h2>
                <div className="space-y-8">
                  {t.volunteer.items.map((item, index) => (
                    <div
                      key={index}
                      data-animate
                      id={`volunteer-${index}`}
                      className={`animate-fade-slide stagger-${index + 1} ${isVisible(`volunteer-${index}`) ? "visible" : ""}`}
                    >
                      <Card className="enhanced-card hover:shadow-2xl transition-all duration-700 hover:border-primary/30">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                            <div>
                              <CardTitle className="text-xl font-light hover:text-primary transition-colors duration-300">
                                {item.title}
                              </CardTitle>
                              <CardDescription className="text-lg font-light text-primary mt-1">
                                {item.role}
                              </CardDescription>
                            </div>
                            <Badge
                              variant="outline"
                              className="w-fit font-light hover:bg-primary/10 transition-colors duration-300"
                            >
                              {item.period}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="prose dark:prose-invert max-w-none">
                            {item.description.split("\n\n").map((paragraph, pIndex) => (
                              <p
                                key={pIndex}
                                className="text-muted-foreground font-light mb-4 last:mb-0 leading-relaxed"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div
              data-animate
              id="separator-5"
              className={`separator-enhanced animate-scale-up ${isVisible("separator-5") ? "visible" : ""}`}
            >
              <Separator className="my-20" />
            </div>

            {/* Enhanced Projects Section */}
            <section id="projects" className="py-20">
              <div className="space-y-12">
                <h2
                  data-animate
                  id="projects-title"
                  className={`text-4xl font-thin text-center animate-slide-down ${isVisible("projects-title") ? "visible" : ""}`}
                >
                  {t.projects.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {t.projects.items.map((project, index) => (
                    <div
                      key={index}
                      data-animate
                      id={`project-${index}`}
                      className={`project-card animate-slide-up stagger-${index + 1} ${isVisible(`project-${index}`) ? "visible" : ""}`}
                    >
                      <Card className="enhanced-card h-full hover:shadow-2xl transition-all duration-700 hover:border-primary/30">
                        <CardHeader className="pb-4">
                          <CardTitle className="flex items-center justify-between font-light text-xl">
                            <span className="hover:text-primary transition-colors duration-300">{project.title}</span>
                            <div className="flex space-x-2">
                              {project.github && project.github !== "#" && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  asChild
                                  className="btn-enhanced hover:scale-110 transition-transform"
                                >
                                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-5 w-5" />
                                  </a>
                                </Button>
                              )}
                              {project.demo && project.demo !== "#" && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  asChild
                                  className="btn-enhanced hover:scale-110 transition-transform"
                                >
                                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-5 w-5" />
                                  </a>
                                </Button>
                              )}
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-0">
                          <p className="text-muted-foreground font-light leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="font-light hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div
              data-animate
              id="separator-6"
              className={`separator-enhanced animate-scale-up ${isVisible("separator-6") ? "visible" : ""}`}
            >
              <Separator className="my-20" />
            </div>

            {/* Enhanced Articles Section */}
            <section id="articles" className="py-20">
              <div className="space-y-12">
                <h2
                  data-animate
                  id="articles-title"
                  className={`text-4xl font-thin text-center animate-slide-down ${isVisible("articles-title") ? "visible" : ""}`}
                >
                  {t.articles.title}
                </h2>

                {articlesLoading ? (
                  <div className="text-center text-muted-foreground font-light text-lg">
                    {language === "tr" ? "Yazılar yükleniyor..." : "Loading articles..."}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {mediumArticles.slice(0, 4).map((article, index) => (
                      <div
                        key={index}
                        data-animate
                        id={`article-${index}`}
                        className={`animate-slide-left stagger-${index + 1} ${isVisible(`article-${index}`) ? "visible" : ""}`}
                      >
                        <Card className="enhanced-card hover:shadow-xl transition-all duration-700 hover:border-primary/30">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="space-y-2">
                                <h3 className="text-lg font-light hover:text-primary transition-colors duration-300">
                                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                                    {article.title}
                                  </a>
                                </h3>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground font-light">
                                  <span>{formatDate(article.pubDate)}</span>
                                  <span>•</span>
                                  <span>{article.readTime}</span>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                asChild
                                className="btn-enhanced hover:scale-110 transition-transform"
                              >
                                <a href={article.link} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-5 w-5" />
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            <div
              data-animate
              id="separator-7"
              className={`separator-enhanced animate-scale-up ${isVisible("separator-7") ? "visible" : ""}`}
            >
              <Separator className="my-20" />
            </div>

            {/* Enhanced Contact Section */}
            <section id="contact" className="py-20">
              <div className="space-y-12 text-center">
                <div className="space-y-4">
                  <h2
                    data-animate
                    id="contact-title"
                    className={`text-4xl font-thin animate-slide-down ${isVisible("contact-title") ? "visible" : ""}`}
                  >
                    {t.contact.title}
                  </h2>
                  <p
                    data-animate
                    id="contact-subtitle"
                    className={`text-xl text-muted-foreground font-light animate-slide-up stagger-1 ${isVisible("contact-subtitle") ? "visible" : ""}`}
                  >
                    {t.contact.subtitle}
                  </p>
                </div>

                <div
                  data-animate
                  id="contact-buttons"
                  className={`flex flex-col sm:flex-row items-center justify-center gap-6 animate-elastic stagger-2 ${isVisible("contact-buttons") ? "visible" : ""}`}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="btn-enhanced font-light bg-transparent hover:scale-105 transition-transform text-lg px-6 py-3"
                  >
                    <a href={`mailto:${t.contact.email}`} className="flex items-center space-x-3">
                      <Mail className="h-5 w-5" />
                      <span>{t.contact.email}</span>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="btn-enhanced font-light bg-transparent hover:scale-105 transition-transform text-lg px-6 py-3"
                  >
                    <a
                      href="https://www.linkedin.com/in/nur-bulbul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="btn-enhanced font-light bg-transparent hover:scale-105 transition-transform text-lg px-6 py-3"
                  >
                    <a href="https://github.com/nurrbb" className="flex items-center space-x-3">
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                </div>

                <div
                  data-animate
                  id="contact-location"
                  className={`flex items-center justify-center text-muted-foreground font-light text-lg animate-fade-slide stagger-3 ${isVisible("contact-location") ? "visible" : ""}`}
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{t.contact.location}</span>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Enhanced Footer */}
        <footer className="border-t py-8">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div
              data-animate
              id="footer-content"
              className={`text-center text-muted-foreground font-light animate-slide-up ${isVisible("footer-content") ? "visible" : ""}`}
            >
              <p>&copy; {new Date().getFullYear()} Nur Bülbül. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}