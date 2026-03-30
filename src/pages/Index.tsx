import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/92bc8372-686f-4df8-beaa-5a8de6eb286a/bucket/d51c5dea-dcf5-46cc-bb91-a42d683559cb.png";

const RENDER_IMAGES = [
  {
    url: "https://cdn.poehali.dev/projects/92bc8372-686f-4df8-beaa-5a8de6eb286a/bucket/2509ebc0-1378-462b-adcd-c5d45d752036.png",
    label: "Вид с высоты птичьего полёта",
    tag: "РЕНДЕР",
  },
  {
    url: "https://cdn.poehali.dev/projects/92bc8372-686f-4df8-beaa-5a8de6eb286a/bucket/452611fe-8781-4fc0-bc5a-4ccc0807a570.png",
    label: "Панорама квартала",
    tag: "РЕНДЕР",
  },
  {
    url: "https://cdn.poehali.dev/projects/92bc8372-686f-4df8-beaa-5a8de6eb286a/bucket/c1a8ac7d-f2c8-4b62-bf9a-4ad0a8ddc37b.png",
    label: "Башня — крупный план",
    tag: "3D",
  },
];

const NAV_ITEMS = [
  { id: "about", label: "О ПРОЕКТЕ" },
  { id: "stages", label: "ЭТАПЫ" },
  { id: "news", label: "НОВОСТИ" },
  { id: "gallery", label: "ГАЛЕРЕЯ" },
];

const STAGES = [
  {
    num: "01",
    title: "Проектирование и согласование",
    period: "2023 — 2024",
    progress: 100,
    status: "completed",
    desc: "Разработка архитектурной концепции, получение разрешительной документации, проведение геодезических изысканий.",
    icon: "FileText",
  },
  {
    num: "02",
    title: "Подготовка территории",
    period: "2024 — 2025",
    progress: 75,
    status: "active",
    desc: "Демонтаж существующих построек, вертикальная планировка, прокладка инженерных коммуникаций.",
    icon: "Shovel",
  },
  {
    num: "03",
    title: "Возведение фундамента",
    period: "2025",
    progress: 40,
    status: "active",
    desc: "Монтаж свайного основания, устройство ростверка, гидроизоляция фундаментных конструкций.",
    icon: "Construction",
  },
  {
    num: "04",
    title: "Строительство корпусов",
    period: "2025 — 2027",
    progress: 5,
    status: "pending",
    desc: "Возведение монолитных каркасов жилых башен, монтаж фасадных систем и инженерных коммуникаций.",
    icon: "Building2",
  },
  {
    num: "05",
    title: "Благоустройство и сдача",
    period: "2027 — 2028",
    progress: 0,
    status: "pending",
    desc: "Внутренняя отделка, ландшафтный дизайн, создание общественных пространств и инфраструктуры.",
    icon: "TreePine",
  },
];

const NEWS = [
  {
    date: "24 марта 2026",
    tag: "СТРОИТЕЛЬСТВО",
    title: "Завершён первый этап свайных работ на северном участке",
    excerpt: "Строительные бригады успешно завершили установку 420 буронабивных свай диаметром 800 мм. Работы выполнены на 3 недели раньше запланированного срока.",
    icon: "HardHat",
  },
  {
    date: "15 марта 2026",
    tag: "ИНВЕСТИЦИИ",
    title: "Подписано соглашение с федеральным инвестором",
    excerpt: "Администрация проекта подписала меморандум о партнёрстве с крупным федеральным девелопером. Общий объём привлечённых инвестиций превысил 4,2 млрд рублей.",
    icon: "TrendingUp",
  },
  {
    date: "5 марта 2026",
    tag: "ИНФРАСТРУКТУРА",
    title: "Утверждена концепция транспортной развязки",
    excerpt: "Городская комиссия по архитектуре утвердила проект новой транспортной развязки, которая обеспечит комфортный въезд и выезд из жилого квартала.",
    icon: "MapPin",
  },
  {
    date: "20 февраля 2026",
    tag: "КОНКУРС",
    title: "Определён победитель конкурса на дизайн общественных пространств",
    excerpt: "По итогам открытого архитектурного конкурса выбран проект благоустройства внутреннего двора и общественных зон на территории комплекса.",
    icon: "Award",
  },
];

const GALLERY = [
  { label: "Ситуационный план", tag: "ПЛАН", icon: "Map" },
  { label: "Генеральный план застройки", tag: "ПЛАН", icon: "LayoutGrid" },
  { label: "Башня А — визуализация", tag: "3D", icon: "Building2" },
  { label: "Башня Б — визуализация", tag: "3D", icon: "Building" },
];

const STATS = [
  { value: "2,6 га", label: "Площадь территории" },
  { value: "МФК", label: "Тип объекта" },
  { value: "ДКЖ", label: "Микрорайон" },
  { value: "Пермь", label: "Город" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground grid-lines">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gold geo-clip-sm flex items-center justify-center">
              <span className="font-oswald font-bold text-xs text-background">ПС</span>
            </div>
            <div>
              <div className="font-oswald font-semibold text-sm tracking-widest text-foreground leading-none">
                ПЕРМЬ-СИТИ
              </div>
              <div className="font-ibm text-[10px] text-muted-foreground tracking-widest uppercase">
                Строительный портал
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link font-oswald text-xs tracking-widest transition-colors ${
                  activeSection === item.id ? "text-gold active" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-muted-foreground hover:text-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background/98 px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-oswald text-sm tracking-widest text-left transition-colors ${
                  activeSection === item.id ? "text-gold" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

        <div className="absolute top-32 right-16 w-32 h-32 border border-gold/20 rotate-45 hidden lg:block" />
        <div className="absolute top-44 right-28 w-16 h-16 border border-gold/10 rotate-45 hidden lg:block" />
        <div className="absolute bottom-40 right-20 w-2 h-24 bg-gold/30 hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <span className="section-line" />
              <span className="font-ibm text-xs tracking-widest text-gold uppercase">
                Информационный портал
              </span>
            </div>
            <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-light tracking-wider text-foreground leading-none mb-2">
              ПЕРМЬ
            </h1>
            <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-gold leading-none mb-8">
              СИТИ
            </h1>
            <p className="font-ibm text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
              Масштабный градостроительный проект нового жилого квартала
              в сердце Перми — 42 гектара современной архитектуры
              и городской инфраструктуры.
            </p>
          </div>

          <div className="animate-slide-up delay-300 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {STATS.map((s) => (
              <div key={s.label} className="bg-background/80 backdrop-blur px-6 py-5">
                <div className="font-oswald text-2xl md:text-3xl font-semibold text-gold">
                  {s.value}
                </div>
                <div className="font-ibm text-xs text-muted-foreground tracking-wide mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/50 hover:text-gold transition-colors animate-bounce"
        >
          <Icon name="ChevronDown" size={28} />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="section-line" />
              <span className="font-ibm text-xs tracking-widest text-gold uppercase">01 / О проекте</span>
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-light text-foreground leading-tight mb-8">
              НОВЫЙ СТАНДАРТ<br />
              <span className="text-gold">ГОРОДСКОЙ ЖИЗНИ</span>
            </h2>
            <div className="space-y-5 font-ibm text-muted-foreground leading-relaxed">
              <p>
                «Пермь-Сити» — многофункциональный комплекс, который предполагает
                строительство современной деловой инфраструктуры с элементами
                инновационного подхода к организации пространства.
              </p>
              <p>
                Комплекс планируется возвести в микрорайоне ДКЖ на улице Локомотивной
                в Перми. Площадь участка составляет 2,6 гектара. Проект сочетает
                деловые, общественные и коммерческие функции в едином архитектурном решении.
              </p>
              <p>
                Архитектурная концепция отличается нестандартной формой здания
                с каскадными террасами и вертикальным озеленением фасада —
                новый визуальный ориентир для всего района ДКЖ.
              </p>
            </div>

            <div className="mt-10 border border-border p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 border border-gold/30 flex items-center justify-center">
                  <Icon name="Building2" size={16} className="text-gold" />
                </div>
                <span className="font-oswald text-sm tracking-widest text-gold uppercase">Рядом строится</span>
              </div>
              <h3 className="font-oswald text-2xl font-medium text-foreground mb-3">
                ВЫСОТНЫЙ ЖИЛОЙ КОМПЛЕКС
              </h3>
              <p className="font-ibm text-sm text-muted-foreground leading-relaxed">
                Параллельно со строительством Пермь-Сити на соседнем участке ведётся возведение
                высотного жилого комплекса. Два объекта формируют единый современный
                архитектурный ансамбль микрорайона ДКЖ, создавая новую точку притяжения
                в этой части города.
              </p>
            </div>
          </div>

          <div className="space-y-px">
            {[
              { label: "Тип объекта", value: "Многофункциональный комплекс" },
              { label: "Расположение", value: "г. Пермь, мкр. ДКЖ" },
              { label: "Адрес", value: "ул. Локомотивная" },
              { label: "Площадь участка", value: "2,6 га" },
              { label: "Назначение", value: "Деловая и коммерческая функция" },
              { label: "Концепция", value: "Инновационный подход к пространству" },
              { label: "Начало строительства", value: "уточняется" },
              { label: "Плановая сдача", value: "уточняется" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex justify-between items-center py-4 px-5 bg-card border border-border card-hover"
              >
                <span className="font-ibm text-sm text-muted-foreground">{row.label}</span>
                <span className="font-oswald text-sm font-medium text-foreground tracking-wide">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section id="stages" className="py-24 bg-card border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-line" />
            <span className="font-ibm text-xs tracking-widest text-gold uppercase">02 / Этапы строительства</span>
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl font-light text-foreground mb-16">
            ПЛАН РЕАЛИЗАЦИИ
          </h2>

          <div className="space-y-px">
            {STAGES.map((stage, i) => (
              <div
                key={stage.num}
                className="relative border border-border card-hover animate-slide-up bg-background"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="grid md:grid-cols-[120px_1fr_200px] gap-0 items-stretch">
                  <div className={`flex items-center justify-center py-8 px-6 border-r border-border ${
                    stage.status === "completed" ? "bg-gold/10" :
                    stage.status === "active" ? "bg-gold/5" : "bg-card"
                  }`}>
                    <span className="font-oswald text-4xl font-bold text-gold/30">
                      {stage.num}
                    </span>
                  </div>

                  <div className="py-7 px-8">
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name={stage.icon} size={16} className="text-gold mt-1 flex-shrink-0" fallback="Building" />
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h3 className="font-oswald text-lg font-medium text-foreground tracking-wide">
                            {stage.title}
                          </h3>
                          <span className={`font-ibm text-[10px] px-2 py-0.5 tracking-widest uppercase ${
                            stage.status === "completed" ? "bg-gold/20 text-gold" :
                            stage.status === "active" ? "border border-gold/40 text-gold/70" :
                            "border border-border text-muted-foreground"
                          }`}>
                            {stage.status === "completed" ? "Завершён" :
                             stage.status === "active" ? "В работе" : "Ожидает"}
                          </span>
                        </div>
                        <p className="font-ibm text-sm text-muted-foreground leading-relaxed">
                          {stage.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="py-7 px-8 border-l border-border flex flex-col justify-center">
                    <div className="font-ibm text-xs text-muted-foreground mb-1 tracking-wide">
                      {stage.period}
                    </div>
                    <div className="h-1.5 bg-muted mb-2 w-full">
                      <div
                        className="h-full progress-bar transition-all duration-1000"
                        style={{ width: `${stage.progress}%` }}
                      />
                    </div>
                    <div className="font-oswald text-2xl font-semibold text-gold">
                      {stage.progress}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="section-line" />
          <span className="font-ibm text-xs tracking-widest text-gold uppercase">03 / Новости</span>
        </div>
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-light text-foreground">
            ОБНОВЛЕНИЯ<br />
            <span className="text-gold">ПРОЕКТА</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {NEWS.map((item, i) => (
            <article
              key={i}
              className="bg-background p-8 card-hover cursor-pointer animate-slide-up border border-transparent"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-ibm text-[10px] px-2 py-1 border border-gold/30 text-gold tracking-widest">
                  {item.tag}
                </span>
                <span className="font-ibm text-xs text-muted-foreground">
                  {item.date}
                </span>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name={item.icon} size={16} className="text-gold" fallback="FileText" />
                </div>
                <div>
                  <h3 className="font-oswald text-xl font-medium text-foreground leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="font-ibm text-sm text-muted-foreground leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-6 text-gold/50 hover:text-gold transition-colors">
                <span className="font-oswald text-xs tracking-widest">ЧИТАТЬ ДАЛЕЕ</span>
                <Icon name="ArrowRight" size={14} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-line" />
            <span className="font-ibm text-xs tracking-widest text-gold uppercase">04 / Галерея</span>
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl font-light text-foreground mb-16">
            ПЛАНЫ И<br />
            <span className="text-gold">ВИЗУАЛИЗАЦИИ</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            <div
              className="md:row-span-2 relative overflow-hidden bg-muted cursor-pointer group"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={RENDER_IMAGES[0].url}
                alt={RENDER_IMAGES[0].label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-ibm text-xs text-gold tracking-widest uppercase">{RENDER_IMAGES[0].tag}</span>
                <p className="font-oswald text-lg text-foreground mt-1">{RENDER_IMAGES[0].label}</p>
              </div>
            </div>

            {RENDER_IMAGES.slice(1).map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-muted cursor-pointer group"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={item.url}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-ibm text-xs text-gold tracking-widest uppercase">{item.tag}</span>
                  <p className="font-oswald text-lg text-foreground mt-1">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="font-oswald text-sm tracking-widest text-gold border border-gold/30 px-10 py-3 hover:bg-gold hover:text-background transition-all duration-300 geo-clip-sm">
              СМОТРЕТЬ ВСЮ ГАЛЕРЕЮ
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-gold geo-clip-sm flex items-center justify-center">
                  <span className="font-oswald font-bold text-xs text-background">ПС</span>
                </div>
                <span className="font-oswald font-semibold tracking-widest text-sm">ПЕРМЬ-СИТИ</span>
              </div>
              <p className="font-ibm text-sm text-muted-foreground leading-relaxed">
                Официальный информационный портал строительного проекта нового жилого квартала в Перми.
              </p>
            </div>

            <div>
              <h4 className="font-oswald text-sm tracking-widest text-foreground mb-5">РАЗДЕЛЫ</h4>
              <div className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="block font-ibm text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-oswald text-sm tracking-widest text-foreground mb-5">КОНТАКТЫ</h4>
              <div className="space-y-3">
                {[
                  { icon: "MapPin", text: "г. Пермь, ул. Советская, 1" },
                  { icon: "Phone", text: "+7 (342) 000-00-00" },
                  { icon: "Mail", text: "info@perm-city.ru" },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-3 font-ibm text-sm text-muted-foreground">
                    <Icon name={c.icon} size={14} className="text-gold/50 flex-shrink-0" fallback="Circle" />
                    {c.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-ibm text-xs text-muted-foreground">
              © 2026 Пермь-Сити. Все права защищены.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground/40">
              <div className="w-px h-4 bg-gold/20" />
              <span className="font-ibm text-xs tracking-widest">СТРОИМ БУДУЩЕЕ ПЕРМИ</span>
              <div className="w-px h-4 bg-gold/20" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}