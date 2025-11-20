import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [hevPower, setHevPower] = useState(100);
  const [isTerminalActive, setIsTerminalActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHevPower((prev) => (prev > 0 ? prev - 0.5 : 100));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const characters = [
    {
      name: 'Гордон Фримен',
      role: 'Теоретический физик',
      description: 'Доктор философии MIT, специалист по аномальным материалам. Сотрудник Сектора C.',
      icon: 'User',
      status: 'active',
      stats: { intelligence: 98, combat: 85, science: 100 },
    },
    {
      name: 'G-Man',
      role: 'Неизвестно',
      description: 'Загадочная фигура, наблюдающая за событиями Black Mesa. Истинные мотивы неизвестны.',
      icon: 'Eye',
      status: 'classified',
      stats: { intelligence: 100, combat: 95, science: 75 },
    },
    {
      name: 'Айзек Кляйнер',
      role: 'Старший научный сотрудник',
      description: 'Руководитель лаборатории аномальных материалов, ментор Гордона Фримена.',
      icon: 'Microscope',
      status: 'active',
      stats: { intelligence: 95, combat: 20, science: 98 },
    },
    {
      name: 'Барни Калхаун',
      role: 'Офицер службы безопасности',
      description: 'Сотрудник службы безопасности Black Mesa, друг Гордона Фримена.',
      icon: 'Shield',
      status: 'active',
      stats: { intelligence: 70, combat: 90, science: 45 },
    },
    {
      name: 'Алекс Вэнс',
      role: 'Инженер-изобретатель',
      description: 'Дочь Илая Вэнса, талантливый инженер и специалист по модификации оружия.',
      icon: 'Wrench',
      status: 'active',
      stats: { intelligence: 92, combat: 88, science: 85 },
    },
    {
      name: 'Илай Вэнс',
      role: 'Директор исследований',
      description: 'Ведущий ученый Black Mesa, специалист по телепортации и квантовой физике.',
      icon: 'Brain',
      status: 'active',
      stats: { intelligence: 99, combat: 35, science: 100 },
    },
  ];

  const timeline = [
    {
      date: '15 мая 200-',
      event: 'Основание комплекса',
      description: 'Black Mesa Research Facility начинает операционную деятельность в пустыне Нью-Мексико.',
      importance: 'low',
    },
    {
      date: '16 мая 200-',
      event: 'Проект Lambda',
      description: 'Запуск программы исследования телепортации и пограничных миров.',
      importance: 'medium',
    },
    {
      date: '16 мая 200-, 08:47',
      event: 'Резонансный каскад',
      description: 'Катастрофический эксперимент в Секторе C. Портал в Зен открыт.',
      importance: 'critical',
    },
    {
      date: '16 мая 200-, 12:00',
      event: 'Военное вмешательство',
      description: 'Прибытие военных спецподразделений для зачистки комплекса.',
      importance: 'high',
    },
    {
      date: '17 мая 200-',
      event: 'Проникновение в Зен',
      description: 'Гордон Фримен телепортируется в пограничный мир для уничтожения Нихиланта.',
      importance: 'critical',
    },
  ];

  const research = [
    {
      title: 'Телепортация',
      code: 'LAMBDA-TP-01',
      progress: 87,
      status: 'В процессе',
      description: 'Исследования мгновенного перемещения материи через пространство.',
      icon: 'Zap',
    },
    {
      title: 'Пограничные миры',
      code: 'XEN-EXP-04',
      progress: 45,
      status: 'Приостановлено',
      description: 'Изучение альтернативных измерений и их обитателей.',
      icon: 'Globe',
    },
    {
      title: 'Аномальные материалы',
      code: 'SECTOR-C-AM',
      progress: 99,
      status: 'Критический',
      description: 'Анализ кристаллических образцов из измерения Зен.',
      icon: 'Gem',
    },
  ];

  const locations = [
    {
      name: 'Lambda Complex',
      sector: 'Lambda Core',
      threat: 'High',
      description: 'Центральный телепортационный узел комплекса. Здесь расположены главные порталы в Зен.',
      features: ['Телепорты', 'Гравитационные камеры', 'Энергетическое ядро'],
      image: 'https://cdn.poehali.dev/projects/230502e0-d4ac-4178-aeb8-7cd016b8fdd8/files/060cd28a-e1b0-49d6-aaa1-8daca64f096d.jpg',
    },
    {
      name: 'Xen Borderworld',
      sector: 'Внешнее измерение',
      threat: 'Extreme',
      description: 'Пограничный мир между измерениями. Дом враждебных инопланетных форм жизни.',
      features: ['Плавающие острова', 'Инопланетная флора', 'Кристаллы'],
      image: 'https://cdn.poehali.dev/projects/230502e0-d4ac-4178-aeb8-7cd016b8fdd8/files/a1f007a4-d0a2-49ac-8415-fb87fb07c929.jpg',
    },
    {
      name: 'Sector C - Test Labs',
      sector: 'Аномальные материалы',
      threat: 'Critical',
      description: 'Место проведения катастрофического эксперимента. Источник резонансного каскада.',
      features: ['Ускоритель частиц', 'Образцы Зен', 'Защитное поле'],
      image: 'https://cdn.poehali.dev/projects/230502e0-d4ac-4178-aeb8-7cd016b8fdd8/files/01346b67-f848-472c-9e6f-a9c1b19bbd52.jpg',
    },
  ];

  const equipment = [
    {
      name: 'HEV Suit Mark V',
      type: 'Защитная экипировка',
      description: 'Защитный костюм опасных сред. Обеспечивает защиту от радиации, токсинов и физических повреждений.',
      icon: 'ShieldCheck',
      specs: ['Энергощит', 'Медицинская система', 'Интерфейс'],
      color: 'orange',
    },
    {
      name: 'Лом',
      type: 'Холодное оружие',
      description: 'Культовое оружие ближнего боя. Эффективен против хедкрабов и разрушения препятствий.',
      icon: 'Hammer',
      specs: ['Урон: высокий', 'Дальность: ближняя', 'Прочность: бесконечная'],
      color: 'cyan',
    },
    {
      name: 'Гравитационная пушка',
      type: 'Экспериментальное оружие',
      description: 'Zero Point Energy Field Manipulator. Захватывает и швыряет объекты гравитационным лучом.',
      icon: 'Magnet',
      specs: ['Дальность: средняя', 'Захват объектов', 'Отталкивание'],
      color: 'orange',
    },
    {
      name: 'Портальная пушка',
      type: 'Устройство телепортации',
      description: 'Aperture Science Handheld Portal Device. Создаёт порталы между двумя точками в пространстве.',
      icon: 'CircleDot',
      specs: ['2 портала', 'Моментальная телепортация', 'Сохранение импульса'],
      color: 'cyan',
    },
  ];

  const enemies = [
    { name: 'Хедкраб', threat: 2, icon: 'Bug' },
    { name: 'Зомби', threat: 3, icon: 'Skull' },
    { name: 'Барнакл', threat: 2, icon: 'Anvil' },
    { name: 'Вортигонт', threat: 4, icon: 'Zap' },
    { name: 'Солдат Combine', threat: 5, icon: 'Target' },
    { name: 'Хантер', threat: 6, icon: 'Swords' },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative scan-line overflow-x-hidden">
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
      </div>

      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-primary/30 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl font-bold text-primary glow-orange font-orbitron animate-pulse-glow">
                λ
              </div>
              <div>
                <h1 className="text-xl font-bold font-orbitron">BLACK MESA</h1>
                <p className="text-xs text-muted-foreground">Research Facility</p>
              </div>
            </div>
            <div className="hidden lg:flex gap-6">
              {['home', 'characters', 'locations', 'equipment', 'history', 'research'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-orbitron uppercase transition-all hover:text-primary ${
                    activeSection === section ? 'text-primary glow-orange' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'characters' && 'Персонажи'}
                  {section === 'locations' && 'Локации'}
                  {section === 'equipment' && 'Снаряжение'}
                  {section === 'history' && 'История'}
                  {section === 'research' && 'Исследования'}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-primary text-primary font-mono">
                <Icon name="Zap" size={12} className="mr-1" />
                {hevPower.toFixed(0)}%
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 inline-block">
            <div className="text-9xl font-bold text-primary glow-orange animate-float font-orbitron">
              λ
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-orbitron glow-orange animate-fade-in">
            BLACK MESA
          </h1>
          <p className="text-xl md:text-2xl text-secondary glow-cyan mb-4 animate-fade-in">
            Research Facility
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Секретный научно-исследовательский комплекс, расположенный в пустыне Нью-Мексико.
            Специализация: передовые исследования в области квантовой физики и телепортации.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Badge variant="outline" className="border-primary text-primary px-4 py-2">
              <Icon name="AlertTriangle" size={16} className="mr-2" />
              Уровень допуска: 3
            </Badge>
            <Badge variant="outline" className="border-secondary text-secondary px-4 py-2">
              <Icon name="Radio" size={16} className="mr-2" />
              Статус: Критический
            </Badge>
            <Badge variant="outline" className="border-destructive text-destructive px-4 py-2">
              <Icon name="AlertCircle" size={16} className="mr-2" />
              Резонансный каскад
            </Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            {[
              { label: 'Персонал', value: '2,847', icon: 'Users' },
              { label: 'Исследования', value: '127', icon: 'FlaskConical' },
              { label: 'Секторов', value: '15', icon: 'Building' },
              { label: 'Инциденты', value: '1', icon: 'Siren' },
            ].map((stat, i) => (
              <Card
                key={i}
                className="bg-card/50 border-primary/20 backdrop-blur animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-4 text-center">
                  <Icon name={stat.icon} size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold font-orbitron text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="characters" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 text-center font-orbitron text-primary glow-orange">
            Персонажи
          </h2>
          <p className="text-center text-muted-foreground mb-12">Ключевые фигуры Black Mesa</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((char, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in border-glow-orange group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary/10 p-3 rounded group-hover:bg-primary/20 transition-colors">
                      <Icon name={char.icon} size={32} className="text-primary" />
                    </div>
                    <Badge
                      variant={char.status === 'active' ? 'default' : 'secondary'}
                      className={char.status === 'active' ? 'bg-primary' : 'bg-destructive'}
                    >
                      {char.status === 'active' ? 'Активен' : 'Секретно'}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-orbitron">{char.name}</h3>
                  <p className="text-sm text-primary mb-3">{char.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{char.description}</p>
                  <div className="space-y-2">
                    {Object.entries(char.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="capitalize">{key === 'intelligence' ? 'Интеллект' : key === 'combat' ? 'Боевые навыки' : 'Наука'}</span>
                          <span className="text-primary">{value}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-1.5">
                          <div
                            className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-1000"
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="min-h-screen py-20 bg-muted/10 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 text-center font-orbitron text-secondary glow-cyan">
            Игровые локации
          </h2>
          <p className="text-center text-muted-foreground mb-12">Ключевые зоны комплекса</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card
                key={index}
                className="bg-card border-secondary/30 hover:border-secondary transition-all duration-300 cursor-pointer group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => setSelectedLocation(location)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <Badge
                    className={`absolute top-4 right-4 ${
                      location.threat === 'Extreme'
                        ? 'bg-destructive'
                        : location.threat === 'Critical'
                        ? 'bg-destructive/80'
                        : 'bg-primary'
                    }`}
                  >
                    <Icon name="AlertTriangle" size={12} className="mr-1" />
                    {location.threat}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="border-secondary text-secondary mb-3 font-mono text-xs">
                    {location.sector}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3 font-orbitron group-hover:text-secondary transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{location.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 text-center font-orbitron text-primary glow-orange">
            Снаряжение и оружие
          </h2>
          <p className="text-center text-muted-foreground mb-12">Экипировка исследователей</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {equipment.map((item, index) => (
              <Card
                key={index}
                className={`bg-card border-${item.color === 'orange' ? 'primary' : 'secondary'}/30 hover:border-${
                  item.color === 'orange' ? 'primary' : 'secondary'
                } transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div
                    className={`bg-${
                      item.color === 'orange' ? 'primary' : 'secondary'
                    }/10 p-4 rounded-lg mb-4 flex items-center justify-center`}
                  >
                    <Icon
                      name={item.icon}
                      size={48}
                      className={item.color === 'orange' ? 'text-primary' : 'text-secondary'}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-orbitron">{item.name}</h3>
                  <Badge variant="outline" className="mb-3 text-xs">
                    {item.type}
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="space-y-1">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex items-center text-xs text-muted-foreground">
                        <Icon name="Check" size={12} className="text-primary mr-2" />
                        {spec}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-destructive/30 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-6 font-orbitron text-destructive flex items-center">
                <Icon name="Skull" size={32} className="mr-3" />
                Враждебные существа
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {enemies.map((enemy, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-muted/20 rounded border border-destructive/20 hover:border-destructive/50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Icon name={enemy.icon} size={20} className="text-destructive" />
                      <span className="font-mono text-sm">{enemy.name}</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(enemy.threat)].map((_, j) => (
                        <div key={j} className="w-2 h-2 bg-destructive rounded-full"></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="history" className="min-h-screen py-20 bg-muted/20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 text-center font-orbitron text-secondary glow-cyan">
            История
          </h2>
          <p className="text-center text-muted-foreground mb-12">Хронология событий Black Mesa</p>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`mb-8 pl-8 border-l-2 ${
                  item.importance === 'critical'
                    ? 'border-destructive'
                    : item.importance === 'high'
                    ? 'border-primary'
                    : 'border-secondary'
                } relative animate-fade-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className={`absolute -left-3 top-0 w-6 h-6 ${
                    item.importance === 'critical'
                      ? 'bg-destructive'
                      : item.importance === 'high'
                      ? 'bg-primary'
                      : 'bg-secondary'
                  } rounded-full flex items-center justify-center ${
                    item.importance === 'critical' ? 'animate-pulse-glow' : ''
                  }`}
                >
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <div className="mb-1">
                  <Badge
                    variant="outline"
                    className={`${
                      item.importance === 'critical'
                        ? 'border-destructive text-destructive'
                        : item.importance === 'high'
                        ? 'border-primary text-primary'
                        : 'border-secondary text-secondary'
                    } mb-2`}
                  >
                    {item.date}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2 font-orbitron">{item.event}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 text-center font-orbitron text-primary glow-orange">
            Научные исследования
          </h2>
          <p className="text-center text-muted-foreground mb-12">Активные проекты комплекса</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {research.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-secondary transition-all duration-300 animate-fade-in border-glow-cyan"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-secondary/10 p-3 rounded">
                      <Icon name={project.icon} size={32} className="text-secondary" />
                    </div>
                    <Badge
                      variant={project.status === 'В процессе' ? 'default' : 'destructive'}
                      className={project.status === 'В процессе' ? 'bg-primary' : ''}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="border-secondary text-secondary font-mono text-xs mb-3">
                    {project.code}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3 font-orbitron">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Прогресс</span>
                      <span className="text-primary font-bold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-primary/30 border-glow-orange max-w-3xl mx-auto mb-8">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <Icon name="Terminal" size={32} className="text-primary mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold font-orbitron text-primary">
                      Терминал Lambda Complex
                    </h3>
                    <Button
                      size="sm"
                      variant={isTerminalActive ? 'destructive' : 'default'}
                      onClick={() => setIsTerminalActive(!isTerminalActive)}
                      className="font-mono text-xs"
                    >
                      {isTerminalActive ? 'OFFLINE' : 'ONLINE'}
                    </Button>
                  </div>
                  <div className="bg-black p-4 rounded border border-primary/20 font-mono text-sm">
                    <p className="text-primary mb-2">&gt; system_status</p>
                    <p className="text-muted-foreground mb-1">LAMBDA CORE: {isTerminalActive ? 'ONLINE' : 'STANDBY'}</p>
                    <p className="text-muted-foreground mb-1">TELEPORT ARRAY: {isTerminalActive ? 'ACTIVE' : 'OFFLINE'}</p>
                    <p className="text-muted-foreground mb-1">SECURITY LEVEL: MAXIMUM</p>
                    <p className="text-secondary mb-2">XEN PORTAL: {isTerminalActive ? 'OPEN' : 'CLOSED'}</p>
                    <p className="text-primary mb-2">&gt; resonance_cascade_protocol</p>
                    {isTerminalActive && (
                      <p className="text-destructive animate-pulse-glow">
                        WARNING: CONTAINMENT BREACH DETECTED
                      </p>
                    )}
                    <p className="text-primary mt-2">
                      &gt; <span className="animate-pulse-glow">_</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl font-bold text-primary font-orbitron">λ</div>
                <h3 className="text-xl font-bold font-orbitron">BLACK MESA</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Секретный научно-исследовательский комплекс в пустыне Нью-Мексико
              </p>
              <div className="flex gap-2">
                <Badge variant="outline" className="border-primary text-primary">
                  <Icon name="MapPin" size={12} className="mr-1" />
                  New Mexico
                </Badge>
                <Badge variant="outline" className="border-secondary text-secondary">
                  <Icon name="Clock" size={12} className="mr-1" />
                  24/7
                </Badge>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-orbitron text-primary">Навигация</h4>
              <div className="grid grid-cols-2 gap-2">
                {['home', 'characters', 'locations', 'equipment', 'history', 'research'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {section === 'home' && 'Главная'}
                    {section === 'characters' && 'Персонажи'}
                    {section === 'locations' && 'Локации'}
                    {section === 'equipment' && 'Снаряжение'}
                    {section === 'history' && 'История'}
                    {section === 'research' && 'Исследования'}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-orbitron text-secondary">Информация</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="User" size={14} className="text-primary" />
                  Разработчик: Алексей Раевский
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Heart" size={14} className="text-destructive" />
                  Фанатский проект Half-Life
                </p>
                <p className="text-xs mt-4 text-muted-foreground/60">
                  © Black Mesa Research Facility
                  <br />
                  Все права на вселенную Half-Life принадлежат Valve Corporation
                </p>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground font-mono mb-2">
              CLASSIFIED | LEVEL 3 CLEARANCE REQUIRED | λ LAMBDA COMPLEX
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/60">
              <Icon name="ShieldAlert" size={12} />
              <span>This is a fan-made tribute to Half-Life universe</span>
            </div>
          </div>
        </div>
      </footer>

      <Button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary hover:bg-primary/80 shadow-lg border-glow-orange z-50"
        size="icon"
      >
        <Icon name="ArrowUp" size={24} />
      </Button>

      <Dialog open={!!selectedLocation} onOpenChange={() => setSelectedLocation(null)}>
        <DialogContent className="bg-card border-secondary max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-orbitron text-secondary">{selectedLocation?.name}</DialogTitle>
            <DialogDescription>
              <Badge variant="outline" className="border-secondary text-secondary mt-2">
                {selectedLocation?.sector}
              </Badge>
            </DialogDescription>
          </DialogHeader>
          {selectedLocation && (
            <div>
              <img
                src={selectedLocation.image}
                alt={selectedLocation.name}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <p className="text-muted-foreground mb-4">{selectedLocation.description}</p>
              <div className="space-y-2">
                <h4 className="font-bold font-orbitron text-primary">Особенности локации:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedLocation.features.map((feature: string, i: number) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/20 text-secondary">
                      <Icon name="Check" size={12} className="mr-1" />
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mt-4 p-4 bg-destructive/10 border border-destructive/30 rounded">
                <div className="flex items-center gap-2 text-destructive font-bold mb-1">
                  <Icon name="AlertTriangle" size={16} />
                  Уровень угрозы: {selectedLocation.threat}
                </div>
                <p className="text-sm text-muted-foreground">
                  Требуется специальная экипировка и допуск уровня 3+
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
