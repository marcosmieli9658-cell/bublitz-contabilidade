'use client';

import { useEffect } from 'react';
import {
  ArrowDown, ArrowUpRight, BadgeDollarSign, BarChart3, BriefcaseBusiness,
  Calculator, Check, Clock3, FileCheck2, Handshake, Laptop, Mail, MapPin,
  LogIn, MessageCircle, Phone, ReceiptText, Sparkles, UserCheck, UsersRound,
} from 'lucide-react';

const services = [
  { icon: BarChart3, index: '01', title: 'Contabilidade', text: 'Escrituração contábil e relatórios para uma gestão segura e eficiente.' },
  { icon: ReceiptText, index: '02', title: 'Fiscal', text: 'Apuração e entrega das obrigações fiscais da sua empresa.' },
  { icon: UsersRound, index: '03', title: 'Departamento pessoal', text: 'Folha de pagamento, admissões, rescisões e rotinas trabalhistas.' },
  { icon: UserCheck, index: '04', title: 'MEI', text: 'Abertura, regularização e acompanhamento para Microempreendedores Individuais.' },
  { icon: Handshake, index: '05', title: 'Consultoria', text: 'Orientação contábil para apoiar decisões e organizar os próximos passos.' },
  { icon: Calculator, index: '06', title: 'Imposto de renda', text: 'Declaração de Imposto de Renda de Pessoa Física com orientação em cada etapa.' },
  { icon: FileCheck2, index: '07', title: 'Abertura e regularização', text: 'Suporte para abrir ou regularizar sua empresa com mais tranquilidade.' },
  { icon: BadgeDollarSign, index: '08', title: 'Débitos do CPF', text: 'Análise e regularização de débitos do CPF junto à Receita Federal.' },
  { icon: BriefcaseBusiness, index: '09', title: 'Carnê-Leão', text: 'Orientação e apuração mensal para profissionais liberais e autônomos.' },
];

const specialties = [
  ['01', 'Tecnologia da Informação'],
  ['02', 'Psicologia'],
  ['03', 'Fisioterapia'],
  ['04', 'MEIs em geral'],
  ['05', 'Prestadores de serviços'],
];

function Brand() {
  return (
    <span className="brand-lockup">
      <span className="brand-mark" aria-hidden="true">
        {/* oxlint-disable-next-line next/no-img-element -- símbolo original da marca */}
        <img src="./bublitz-logo-escuro.jpeg" alt="" />
      </span>
      <span className="brand-name"><strong><b>BU</b>BLITZ</strong><small>CONTABILIDADE</small></span>
    </span>
  );
}

export default function Home() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) return;

    document.documentElement.classList.add('reveal-ready');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('reveal-ready');
    };
  }, []);

  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-glow" aria-hidden="true" />
        <header className="site-header shell">
          <a className="brand" href="#inicio" aria-label="Bublitz Contabilidade — início"><Brand /></a>
          <nav aria-label="Navegação principal">
            <a href="#servicos">Serviços</a><a href="#especialidades">Especialidades</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a>
          </nav>
          <div className="header-actions">
            <a
              className="client-area-link"
              href="https://portal-bublitzcontabilidade.web.app/login/@bublitzcontabilidade"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir a Área do cliente em uma nova aba"
              title="Abrir Área do cliente"
            >
              <LogIn size={17} aria-hidden="true" /><span>Área do cliente</span>
            </a>
            <a className="header-phone" href="tel:+5512982658942" aria-label="Ligar para a Bublitz Contabilidade"><Phone size={17} aria-hidden="true" /><span>(12) 98265-8942</span></a>
          </div>
        </header>

        <div className="hero-content shell">
          <div className="hero-copy" data-reveal="left">
            <div className="eyebrow"><span /> Contabilidade em São José dos Campos</div>
            <h1>Clareza para decidir.<br /><em>Segurança para crescer.</em></h1>
            <p className="hero-lead">Soluções contábeis para profissionais e empresas que querem cuidar do presente sem perder de vista o futuro.</p>
            <div className="hero-actions">
              <a className="button-primary" href="https://wa.me/5512982658942" target="_blank" rel="noopener noreferrer"><MessageCircle size={19} aria-hidden="true" /> Fale com a Bublitz <ArrowUpRight size={19} aria-hidden="true" /></a>
              <a className="text-link" href="#servicos">Conheça nossos serviços</a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Experiência e especialidades" data-reveal="right">
            <div className="panel-top"><span>Experiência que acompanha seu negócio</span><Clock3 aria-hidden="true" /></div>
            <div className="experience-number"><strong>13</strong><span>anos<br />no ramo</span></div>
            <p>Atendimento contábil próximo e especializado para quem empreende e presta serviços.</p>
            <div className="panel-tags"><span>Empresas</span><span>MEIs</span><span>Pessoas físicas</span></div>
          </aside>
        </div>
        <a className="scroll-cue" href="#servicos" aria-label="Ir para os serviços"><span>Explore</span><ArrowDown size={16} aria-hidden="true" /></a>
      </section>

      <section className="trust-strip" aria-label="Diferenciais">
        <div className="shell trust-grid" data-reveal="left">
          <div><strong>13</strong><span>anos de experiência</span></div>
          <div><strong>05</strong><span>segmentos de atuação</span></div>
          <div><Sparkles aria-hidden="true" /><span>Atendimento próximo<br />e especializado</span></div>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="shell">
          <div className="section-head" data-reveal="left">
            <div><span className="kicker">O que fazemos</span><h2>Soluções para cada<br />fase do <em>seu negócio.</em></h2></div>
            <p>Da rotina mensal às decisões importantes, reunimos os serviços que mantêm sua vida profissional e a sua empresa bem cuidados.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, index, title, text }) => (
              <article className="service-card" key={title} data-reveal={Number(index) % 2 === 0 ? 'right' : 'left'}>
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
          <div className="specialties-copy" data-reveal="left">
            <span className="kicker kicker-dark">Experiência que entende o seu contexto</span>
            <h2>Especialistas em quem presta serviços.</h2>
            <p>Conhecemos as particularidades de profissionais e negócios que precisam de orientação clara, rotina organizada e segurança para avançar.</p>
            <ul>
              <li><Check size={18} aria-hidden="true" /> Orientação clara e objetiva</li>
              <li><Check size={18} aria-hidden="true" /> Acompanhamento próximo</li>
              <li><Check size={18} aria-hidden="true" /> Soluções para cada fase</li>
            </ul>
          </div>
          <div className="specialty-board" aria-label="Segmentos de especialização" data-reveal="right">
            <div className="board-heading"><Laptop aria-hidden="true" /><span>Áreas de<br /><strong>especialização</strong></span></div>
            {specialties.map(([number, name]) => <div className="specialty-row" key={name}><span>{number}</span><strong>{name}</strong><ArrowUpRight aria-hidden="true" /></div>)}
          </div>
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="shell about-grid">
          <div className="about-statement" data-reveal="left">
            <span className="statement-mark" aria-hidden="true">B</span>
            <p>Organização.<br />Proximidade.<br /><strong>Confiança.</strong></p>
          </div>
          <div className="about-copy" data-reveal="right">
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
          <div className="contact-heading" data-reveal="left"><span className="kicker kicker-dark">Vamos conversar?</span><h2>Sua contabilidade pode ser mais <em>simples, próxima e segura.</em></h2></div>
          <div className="contact-actions" data-reveal="right">
            <a className="contact-link" href="https://wa.me/5512982658942" target="_blank" rel="noopener noreferrer"><span className="contact-icon"><MessageCircle aria-hidden="true" /></span><span><small>WhatsApp</small><strong>(12) 98265-8942</strong></span><ArrowUpRight aria-hidden="true" /></a>
            <a className="contact-link" href="tel:+5512982658942"><span className="contact-icon"><Phone aria-hidden="true" /></span><span><small>Telefone</small><strong>(12) 98265-8942</strong></span><ArrowUpRight aria-hidden="true" /></a>
            <a className="contact-link contact-link-email" href="mailto:bublitz.scontabeis@gmail.com"><span className="contact-icon"><Mail aria-hidden="true" /></span><span><small>E-mail</small><strong>bublitz.scontabeis@gmail.com</strong></span><ArrowUpRight aria-hidden="true" /></a>
            <a className="contact-link" href="https://www.google.com/maps/search/?api=1&query=Rua+Nelson+Cesar+de+Oliveira+134+Sao+Jose+dos+Campos+SP" target="_blank" rel="noreferrer"><span className="contact-icon"><MapPin aria-hidden="true" /></span><span><small>Endereço</small><strong>Rua Nelson Cesar de Oliveira, 134 — sala 24</strong><b>Jardim das Indústrias · São José dos Campos — SP</b></span><ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-main" data-reveal="left">
          <a className="footer-brand" href="#inicio" aria-label="Voltar ao início"><Brand /></a>
          <p>Soluções contábeis para o seu crescimento.</p>
          <a className="footer-action" href="https://wa.me/5512982658942" target="_blank" rel="noopener noreferrer"><MessageCircle size={16} aria-hidden="true" /> Fale conosco <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Bublitz Contabilidade</span><span>CNPJ 50.380.342/0001-52</span></div>
      </footer>
    </main>
  );
}
