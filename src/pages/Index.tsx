import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

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
    },
    {
      name: 'G-Man',
      role: 'Неизвестно',
      description: 'Загадочная фигура, наблюдающая за событиями Black Mesa. Истинные мотивы неизвестны.',
      icon: 'Eye',
      status: 'classified',
    },
    {
      name: 'Айзек Кляйнер',
      role: 'Старший научный сотрудник',
      description: 'Руководитель лаборатории аномальных материалов, ментор Гордона Фримена.',
      icon: 'Microscope',
      status: 'active',
    },
    {
      name: 'Барни Калхаун',
      role: 'Офицер службы безопасности',
      description: 'Сотрудник службы безопасности Black Mesa, друг Гордона Фримена.',
      icon: 'Shield',
      status: 'active',
    },
  ];

  const timeline = [
    {
      date: '15 мая 200-',
      event: 'Основание комплекса',
      description: 'Black Mesa Research Facility начинает операционную деятельность в пустыне Нью-Мексико.',
    },
    {
      date: '16 мая 200-',
      event: 'Проект Lambda',
      description: 'Запуск программы исследования телепортации и пограничных миров.',
    },
    {
      date: '16 мая 200-, 08:47',
      event: 'Резонансный каскад',
      description: 'Катастрофический эксперимент в Секторе C. Портал в Зен открыт.',
    },
    {
      date: '16 мая 200-, 12:00',
      event: 'Военное вмешательство',
      description: 'Прибытие военных спецподразделений для зачистки комплекса.',
    },
  ];

  const research = [
    {
      title: 'Телепортация',
      code: 'LAMBDA-TP-01',
      progress: 87,
      status: 'В процессе',
      description: 'Исследования мгновенного перемещения материи через пространство.',
    },
    {
      title: 'Пограничные миры',
      code: 'XEN-EXP-04',
      progress: 45,
      status: 'Приостановлено',
      description: 'Изучение альтернативных измерений и их обитателей.',
    },
    {
      title: 'Аномальные материалы',
      code: 'SECTOR-C-AM',
      progress: 99,
      status: 'Критический',
      description: 'Анализ кристаллических образцов из измерения Зен.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative scan-line">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-primary/30 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl font-bold text-primary glow-orange font-orbitron">λ</div>
              <div>
                <h1 className="text-xl font-bold font-orbitron">BLACK MESA</h1>
                <p className="text-xs text-muted-foreground">Research Facility</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'characters', 'history', 'research'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-orbitron uppercase transition-all hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'characters' && 'Персонажи'}
                  {section === 'history' && 'История'}
                  {section === 'research' && 'Исследования'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 inline-block">
            <div className="text-9xl font-bold text-primary glow-orange animate-pulse-glow font-orbitron">
              λ
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-orbitron glow-orange">
            BLACK MESA
          </h1>
          <p className="text-xl md:text-2xl text-secondary glow-cyan mb-4">
            Research Facility
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Секретный научно-исследовательский комплекс, расположенный в пустыне Нью-Мексико.
            Специализация: передовые исследования в области квантовой физики и телепортации.
          </p>
          <div className="flex gap-4 justify-center">
            <Badge variant="outline" className="border-primary text-primary px-4 py-2">
              <Icon name="AlertTriangle" size={16} className="mr-2" />
              Уровень допуска: 3
            </Badge>
            <Badge variant="outline" className="border-secondary text-secondary px-4 py-2">
              <Icon name="Radio" size={16} className="mr-2" />
              Статус: Критический
            </Badge>
          </div>
        </div>
      </section>

      <section id="characters" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 text-center font-orbitron text-primary glow-orange">
            Персонажи
          </h2>
          <p className="text-center text-muted-foreground mb-12">Ключевые фигуры Black Mesa</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((char, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in border-glow-orange"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary/10 p-3 rounded">
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
                  <p className="text-sm text-muted-foreground">{char.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
                className="mb-8 pl-8 border-l-2 border-secondary relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full glow-cyan"></div>
                <div className="mb-1">
                  <Badge variant="outline" className="border-secondary text-secondary mb-2">
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
                    <Badge variant="outline" className="border-secondary text-secondary font-mono text-xs">
                      {project.code}
                    </Badge>
                    <Badge
                      variant={project.status === 'В процессе' ? 'default' : 'destructive'}
                      className={project.status === 'В процессе' ? 'bg-primary' : ''}
                    >
                      {project.status}
                    </Badge>
                  </div>
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

          <Card className="bg-card border-primary/30 border-glow-orange max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <Icon name="Terminal" size={32} className="text-primary mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 font-orbitron text-primary">
                    Терминал Lambda Complex
                  </h3>
                  <div className="bg-black p-4 rounded border border-primary/20 font-mono text-sm">
                    <p className="text-primary mb-2">&gt; system_status</p>
                    <p className="text-muted-foreground mb-1">LAMBDA CORE: ONLINE</p>
                    <p className="text-muted-foreground mb-1">TELEPORT ARRAY: STANDBY</p>
                    <p className="text-muted-foreground mb-1">SECURITY LEVEL: MAXIMUM</p>
                    <p className="text-secondary mb-2">XEN PORTAL: ACTIVE</p>
                    <p className="text-primary mb-2">&gt; resonance_cascade_protocol</p>
                    <p className="text-destructive animate-pulse-glow">
                      WARNING: CONTAINMENT BREACH DETECTED
                    </p>
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
              <p className="text-sm text-muted-foreground">
                Секретный научно-исследовательский комплекс в пустыне Нью-Мексико
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-orbitron text-primary">Навигация</h4>
              <div className="space-y-2">
                {['home', 'characters', 'history', 'research'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {section === 'home' && 'Главная'}
                    {section === 'characters' && 'Персонажи'}
                    {section === 'history' && 'История'}
                    {section === 'research' && 'Исследования'}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-orbitron text-secondary">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Разработчик: Алексей Раевский</p>
                <p>Фанатский проект Half-Life</p>
                <p className="text-xs mt-4">
                  © Black Mesa Research Facility
                  <br />
                  Все права на вселенную Half-Life принадлежат Valve Corporation
                </p>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground font-mono">
              CLASSIFIED | LEVEL 3 CLEARANCE REQUIRED | λ LAMBDA COMPLEX
            </p>
          </div>
        </div>
      </footer>

      <Button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary hover:bg-primary/80 shadow-lg border-glow-orange"
        size="icon"
      >
        <Icon name="ArrowUp" size={24} />
      </Button>
    </div>
  );
};

export default Index;
