import {
  ArrowDown, ArrowUpRight, BadgeDollarSign, BarChart3, BriefcaseBusiness,
  Calculator, Check, Clock3, FileCheck2, Handshake, Laptop, MapPin,
  Phone, ReceiptText, Sparkles, UserCheck, UsersRound,
} from 'lucide-react';

const services = [
  { icon: BarChart3, index: '01', title: 'Contabilidade', text: 'Escrituração contábil e relatórios para uma gestão segura e eficiente.' },
  { icon: ReceiptText, index: '02', title: 'Fiscal', text: 'Apuração e entrega de obrigações fiscais com acompanhamento próximo.' },
  { icon: UsersRound, index: '03', title: 'Departamento pessoal', text: 'Folha de pagamento, admissões, rescisões e rotinas trabalhistas.' },
  { icon: UserCheck, index: '04', title: 'MEI', text: 'Abertura, regularização e acompanhamento para Microempreendedores Individuais.' },
  { icon: Handshake, index: '05', title: 'Consultoria', text: 'Orientação estratégica para apoiar as decisões e o crescimento do seu negócio.' },
  { icon: Calculator, index: '06', title: 'Imposto de renda', text: 'Declaração de pessoa física com orientação em cada etapa.' },
  { icon: FileCheck2, index: '07', title: 'Abertura e regularização', text: 'Da formalização à regularização da empresa, com todo o suporte necessário.' },
  { icon: BadgeDollarSign, index: '08', title: 'Débitos do CPF', text: 'Análise e regularização de pendências junto à Receita Federal.' },
  { icon: BriefcaseBusiness, index: '09', title: 'Carnê-Leão', text: 'Orientação e apuração mensal para profissionais liberais.' },
];

const specialties = ['Tecnologia da Informação', 'Psicologia', 'Fisioterapia', 'MEIs', 'Prestadores de serviços'];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-glow" aria-hidden="true" />
        <header className="site-header shell">
          <a className="brand" href="#inicio" aria-label="Bublitz Contabilidade — início">
            {/* oxlint-disable-next-line next/no-img-element -- site estático no GitHub Pages */}
            <img src="./bublitz-logo-escuro.jpeg" alt="Bublitz Contabilidade" />
          </a>
          <nav aria-label="Navegação principal">
            <a href="#servicos">Serviços</a><a href="#especialidades">Especialidades</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a>
          </nav>
          <a className="header-phone" href="tel:+5512982658942"><Phone size={16} aria-hidden="true" /><span>(12) 98265-8942</span></a>
        </header>

        <div className="hero-content shell">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Contabilidade em São José dos Campos</div>
            <h1>Clareza para decidir.<br /><em>Segurança para crescer.</em></h1>
            <p className="hero-lead">Soluções contábeis para profissionais e empresas que querem cuidar do presente sem perder de vista o futuro.</p>
            <div className="hero-actions">
              <a className="button-primary" href="tel:+5512982658942">Fale com a Bublitz <ArrowUpRight size={19} aria-hidden="true" /></a>
              <a className="text-link" href="#servicos">Conheça nossos serviços</a>
            </div>
            <div className="experience-note"><Clock3 aria-hidden="true" /><div><strong>13 anos</strong><span>de experiência no ramo</span></div></div>
          </div>
          <div className="hero-visual" aria-label="Material institucional da Bublitz Contabilidade">
            <div className="image-frame">
              {/* oxlint-disable-next-line next/no-img-element -- material institucional fornecido */}
              <img src="./bublitz-servicos.jpeg" alt="Material da Bublitz com calculadora, documentos e a frase Seu negócio em boas mãos" />
            </div>
            <div className="visual-caption"><span>01</span><p>Organização<br />Segurança<br />Resultados</p></div>
          </div>
        </div>
        <a className="scroll-cue" href="#servicos" aria-label="Ir para os serviços"><span>Explore</span><ArrowDown size={16} aria-hidden="true" /></a>
      </section>

      <section className="trust-strip" aria-label="Diferenciais">
        <div className="shell trust-grid">
          <div><strong>13</strong><span>anos de experiência</span></div>
          <div><strong>05</strong><span>segmentos de atuação</span></div>
          <div><Sparkles aria-hidden="true" /><span>Atendimento próximo<br />e especializado</span></div>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="shell">
          <div className="section-head">
            <div><span className="kicker">O que fazemos</span><h2>Contabilidade que<br />trabalha <em>com você.</em></h2></div>
            <p>Da rotina mensal às decisões importantes, reunimos os serviços que mantêm sua vida profissional e o seu negócio bem cuidados.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, index, title, text }) => (
              <article className="service-card" key={title}>
                <div className="card-top"><span>{index}</span><Icon aria-hidden="true" /></div>
                <h3>{title}</h3><p>{text}</p>
                <div className="card-line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="specialties section" id="especialidades">
        <div className="shell specialties-grid">
          <div className="specialties-copy">
            <span className="kicker kicker-dark">Experiência que entende o seu contexto</span>
            <h2>Especialistas em quem presta serviços.</h2>
            <p>Conhecemos as particularidades de profissionais e negócios que precisam de orientação clara, rotina organizada e segurança para avançar.</p>
            <ul>{specialties.map((item) => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul>
          </div>
          <div className="specialties-visual">
            <div className="specialty-number">13<span>anos</span></div>
            <div className="specialty-photo">
              {/* oxlint-disable-next-line next/no-img-element -- material institucional fornecido */}
              <img src="./bublitz-institucional.jpeg" alt="Apresentação institucional da Bublitz Contabilidade" />
            </div>
            <div className="blue-panel"><Laptop aria-hidden="true" /><span>Atuação especializada para a área de tecnologia e profissionais liberais.</span></div>
          </div>
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="shell about-grid">
          <figure className="about-brand"><div className="about-logo">
            {/* oxlint-disable-next-line next/no-img-element -- logo original fornecido */}
            <img src="./bublitz-logo-claro.jpeg" alt="Marca Bublitz Contabilidade em fundo claro" />
          </div><figcaption>Uma marca construída para acompanhar cada fase do seu negócio.</figcaption></figure>
          <div className="about-copy">
            <span className="kicker">Seu negócio em boas mãos</span>
            <h2>Mais que contabilidade, <em>um parceiro para o seu futuro.</em></h2>
            <p>Há 13 anos, a Bublitz Contabilidade atua ao lado de empreendedores e profissionais, transformando obrigações em organização e informação em decisões mais seguras.</p>
            <p>Com atendimento para empresas, MEIs e pessoas físicas, o escritório une proximidade, conhecimento e uma visão prática da rotina de quem presta serviços.</p>
            <a className="text-link light-link" href="#contato">Encontre a Bublitz <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="contact section" id="contato">
        <div className="shell contact-box">
          <div className="contact-heading"><span className="kicker kicker-dark">Vamos conversar?</span><h2>Sua contabilidade pode ser mais <em>simples, próxima e segura.</em></h2></div>
          <div className="contact-actions">
            <a className="contact-link" href="tel:+5512982658942"><span className="contact-icon"><Phone aria-hidden="true" /></span><span><small>Telefone</small><strong>(12) 98265-8942</strong></span><ArrowUpRight aria-hidden="true" /></a>
            <a className="contact-link" href="https://www.google.com/maps/search/?api=1&query=Rua+Nelson+Cesar+de+Oliveira+134+Sao+Jose+dos+Campos+SP" target="_blank" rel="noreferrer"><span className="contact-icon"><MapPin aria-hidden="true" /></span><span><small>Endereço</small><strong>Rua Nelson Cesar de Oliveira, 134 — sala 24</strong><b>Jardim das Indústrias · São José dos Campos — SP</b></span><ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          {/* oxlint-disable-next-line next/no-img-element -- logo original fornecido */}
          <img src="./bublitz-logo-escuro.jpeg" alt="Bublitz Contabilidade" />
          <p>Soluções contábeis para o seu crescimento.</p>
          <a href="tel:+5512982658942">Fale conosco <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Bublitz Contabilidade</span><span>CNPJ 50.380.342/0001-52</span></div>
      </footer>
    </main>
  );
}
