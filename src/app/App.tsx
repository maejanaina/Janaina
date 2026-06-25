import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import maejanaínaFoto from "@/imports/image.png";

const WHATSAPP_URL = "https://wa.me/5511962785182";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#c9a227]" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const GoldDivider = () => (
  <div className="flex items-center justify-center gap-4 mt-4">
    <div className="h-px w-12 bg-[#c9a227]/40" />
    <span className="text-[#c9a227]">✦</span>
    <div className="h-px w-12 bg-[#c9a227]/40" />
  </div>
);

const benefits = [
  { icon: "❤️", title: "Reconciliação Amorosa", desc: "Reconquiste a pessoa amada com trabalho espiritual focado" },
  { icon: "💍", title: "União de Casais", desc: "Fortaleça o vínculo e o comprometimento no relacionamento" },
  { icon: "🔥", title: "Amarração Amorosa", desc: "Vínculos espirituais profundos e duradouros" },
  { icon: "🛡️", title: "Proteção Espiritual", desc: "Blindagem contra energias negativas e mau-olhado" },
  { icon: "💰", title: "Prosperidade Financeira", desc: "Atrai abundância, emprego e negócios prósperos" },
  { icon: "✨", title: "Limpeza Energética", desc: "Purificação e reequilíbrio do campo energético" },
];

const services = [
  {
    title: "Amarração Amorosa",
    desc: "Trabalho espiritual poderoso para unir almas e fortalecer vínculos afetivos. Realizado com ervas, velas e preces sagradas para resultados duradouros.",
  },
  {
    title: "Reconciliação Amorosa",
    desc: "Restabelece a harmonia e o amor entre casais separados ou afastados. Atua diretamente nos bloqueios que impedem a reunião.",
  },
  {
    title: "União de Casais",
    desc: "Fortalece o relacionamento existente, trazendo cumplicidade, respeito e comprometimento entre os parceiros.",
  },
  {
    title: "Adoçamento Amoroso",
    desc: "Suaviza o coração da pessoa amada, eliminando mágoas, ressentimentos e distância emocional.",
  },
  {
    title: "Afastamento de Rivais",
    desc: "Proteção poderosa contra terceiros que interferem negativamente no relacionamento ou perturbam a paz do casal.",
  },
  {
    title: "Limpeza Espiritual",
    desc: "Purificação energética completa removendo bloqueios, cargas e energias negativas acumuladas ao longo do tempo.",
  },
  {
    title: "Abertura de Caminhos",
    desc: "Desobstrui caminhos fechados no amor, trabalho e vida pessoal, abrindo novas e promissoras oportunidades.",
  },
  {
    title: "Prosperidade Financeira",
    desc: "Atrai abundância, estabilidade financeira e sucesso nos negócios através de trabalhos espirituais específicos.",
  },
];

const testimonials = [
  {
    name: "Ana Carolina M.",
    city: "São Paulo, SP",
    text: "Meu relacionamento voltou em poucas semanas. Gratidão eterna à Mãe Janaína. Ela é uma profissional que realmente funciona e tem o dom!",
  },
  {
    name: "Fernanda S.",
    city: "Rio de Janeiro, RJ",
    text: "Profissional séria, atenciosa e muito certeira. Desde a primeira consulta senti que estava no lugar certo. Meu ex voltou em menos de um mês.",
  },
  {
    name: "Juliana R.",
    city: "Belo Horizonte, MG",
    text: "Minha vida mudou completamente após a consulta. Estou em paz com meu amor, com minha família e com meu trabalho. Recomendo de coração.",
  },
  {
    name: "Priscila L.",
    city: "Curitiba, PR",
    text: "Tentei muitas coisas antes e só com Mãe Janaína obtive resultado real. Meu marido voltou em 3 semanas. Ela é a melhor!",
  },
];

const offerIncludes = [
  "Consulta espiritual completa",
  "Análise detalhada do caso",
  "Orientação espiritual personalizada",
  "Início imediato do trabalho",
];

export default function App() {
  const [openService, setOpenService] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* ── Floating WhatsApp button ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white font-semibold px-4 py-3 shadow-2xl shadow-green-900/60 transition-all duration-300 hover:scale-105"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <WhatsAppIcon />
        <span className="hidden sm:inline text-xs tracking-widest uppercase">WhatsApp</span>
      </a>

      {/* ════════════════════════ HERO ════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1573466511070-d947365aa9f5?w=1800&h=1000&fit=crop&auto=format')",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,1,4,0.88) 0%, rgba(61,0,16,0.65) 50%, rgba(5,1,4,0.95) 100%)",
          }}
          aria-hidden="true"
        />

        {/* top/bottom gold lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent" aria-hidden="true" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-28">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#c9a227]/50" />
            <span className="text-[#c9a227] text-2xl">✦</span>
            <div className="h-px w-16 bg-[#c9a227]/50" />
          </div>

          <p
            className="text-[#c9a227] tracking-[0.4em] uppercase text-xs mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Especialista em Espiritualidade
          </p>

          <h1
            className="text-5xl sm:text-6xl md:text-8xl text-[#f0dfc0] leading-tight mb-3"
            style={{ fontFamily: "var(--font-deco)" }}
          >
            Mãe Janaína
          </h1>

          <h2
            className="text-xl sm:text-2xl text-[#c9a227] mb-8 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Especialista em Amarração Amorosa
          </h2>

          <div className="w-24 h-px bg-[#c9a227]/40 mx-auto mb-8" />

          <p className="text-[#d4b896] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Mais de 20 anos de experiência ajudando pessoas na reconciliação amorosa,
            união de casais, afastamento de rivais, prosperidade e proteção espiritual.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#7a1028] hover:bg-[#9a1535] text-[#f0dfc0] font-semibold tracking-widest uppercase text-xs px-8 py-4 border border-[#c9a227]/40 hover:border-[#c9a227]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#7a1028]/50 min-w-[240px] justify-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span>✦</span> Fazer Consulta Agora
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-800 hover:bg-green-700 text-white font-semibold tracking-widest uppercase text-xs px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-green-800/40 min-w-[240px] justify-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 flex-wrap">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} />
            ))}
            <span className="text-[#d4b896] text-sm ml-2">+9.000 clientes atendidos com sucesso</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce pointer-events-none">
          <ChevronDown className="text-[#c9a227]/50 w-6 h-6" />
        </div>
      </section>

      {/* ════════════════════════ SPECIAL OFFER ════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Deep background */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #2a0009 0%, #5a0018 45%, #2a0009 100%)" }}
          aria-hidden="true"
        />
        {/* Glowing center radial */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 40% 50%, rgba(201,162,39,0.12) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        {/* dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #c9a227 1px, transparent 0)", backgroundSize: "28px 28px" }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a227]/70 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a227]/70 to-transparent" aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 sm:py-20">
          {/* Top badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 bg-[#c9a227]/15 border border-[#c9a227]/50 px-6 py-2">
              <span className="text-[#c9a227]">✦</span>
              <span
                className="text-[#c9a227] tracking-[0.4em] uppercase text-xs"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Oferta Especial por Tempo Limitado
              </span>
              <span className="text-[#c9a227]">✦</span>
            </div>
          </div>

          {/* Main layout: content left + image right */}
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-center">

            {/* LEFT — offer content */}
            <div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl text-[#f0dfc0] mb-3 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Amarração Amorosa
                <br />
                <span className="text-[#c9a227]">Completa</span>
              </h2>

              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-[#c9a227]/30" />
                <span className="text-[#c9a227] text-lg">✦</span>
                <div className="h-px flex-1 bg-[#c9a227]/30" />
              </div>

              {/* Price block */}
              <div className="flex items-end gap-6 mb-8 flex-wrap">
                <div>
                  <p className="text-[#d4b896]/50 text-base line-through mb-1">De R$ 297,00</p>
                  <p className="text-[#d4b896] text-sm mb-1" style={{ fontFamily: "var(--font-display)" }}>Por apenas</p>
                  <p
                    className="text-7xl sm:text-8xl lg:text-9xl text-[#c9a227] leading-none"
                    style={{
                      fontFamily: "var(--font-deco)",
                      fontWeight: 900,
                      textShadow: "0 0 60px rgba(201,162,39,0.6), 0 0 120px rgba(201,162,39,0.25)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    R$ 99,90
                  </p>
                </div>
                {/* Savings pill */}
                <div className="bg-[#7a1028] border border-[#c9a227]/40 px-4 py-2 mb-2">
                  <p className="text-[#c9a227] text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>Você economiza</p>
                  <p className="text-[#f0dfc0] text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>R$ 197,10</p>
                </div>
              </div>

              {/* Includes */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {offerIncludes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-black/20 border border-[#c9a227]/15 px-4 py-3">
                    <span className="text-[#c9a227] text-base flex-shrink-0">✓</span>
                    <span className="text-[#d4b896] text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#c9a227] hover:bg-[#e0b82e] text-[#080206] font-bold tracking-widest uppercase text-sm px-8 py-5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#c9a227]/40 hover:scale-105"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  ✦ Quero Aproveitar Agora
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-800 hover:bg-green-700 text-white font-semibold tracking-widest uppercase text-sm px-8 py-5 transition-all duration-300 hover:shadow-xl hover:shadow-green-800/40"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <WhatsAppIcon />
                  Falar Agora
                </a>
              </div>

              <p className="text-[#d4b896]/45 text-xs mt-4 tracking-wide">
                🔒 Sigilo total garantido · Início imediato · Atendimento pelo WhatsApp
              </p>
            </div>

            {/* RIGHT — couple image */}
            <div className="relative hidden lg:block">
              {/* Gold glow behind image */}
              <div
                className="absolute -inset-3 opacity-40"
                style={{ background: "radial-gradient(ellipse at center, #c9a227 0%, transparent 70%)", filter: "blur(24px)" }}
                aria-hidden="true"
              />
              <div className="relative border-2 border-[#c9a227]/40 overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src="https://images.unsplash.com/photo-1548210612-9968def675bb?w=500&h=660&fit=crop&auto=format"
                  alt="Casal apaixonado se beijando"
                  className="w-full h-full object-cover"
                />
                {/* Warm overlay to blend with section */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(42,0,9,0.1) 0%, rgba(42,0,9,0.5) 100%)" }}
                />
              </div>
              {/* Corner ornaments */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#c9a227]" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#c9a227]" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#c9a227]" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#c9a227]" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ BENEFITS ════════════════════════ */}
      <section className="py-20 bg-[#0a0204] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/20 to-transparent" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p
              className="text-[#c9a227] tracking-[0.3em] uppercase text-xs mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nossos Trabalhos
            </p>
            <h2
              className="text-3xl sm:text-4xl text-[#f0dfc0]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Como Posso Ajudar Você?
            </h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group bg-card border border-[#c9a227]/15 hover:border-[#c9a227]/45 p-6 text-center transition-all duration-300 hover:bg-[#1a0c15] hover:shadow-xl hover:shadow-[#7a1028]/20"
              >
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3
                  className="text-[#f0dfc0] text-sm mb-2 tracking-wide"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {b.title}
                </h3>
                <p className="text-[#9b7e6a] text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ ABOUT ════════════════════════ */}
      <section className="py-20 bg-[#0d0307] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/20 to-transparent" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image column */}
            <div className="relative">
              <div
                className="absolute -inset-2 opacity-30"
                style={{
                  background: "linear-gradient(135deg, #c9a227 0%, #7a1028 100%)",
                  filter: "blur(16px)",
                }}
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden border border-[#c9a227]/25 bg-[#130810]">
                <img
                  src={maejanaínaFoto}
                  alt="Mãe Janaína em traje cerimonial branco com cocar realizando ritual espiritual"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,3,7,0.7) 0%, transparent 60%)",
                  }}
                />
              </div>
              {/* Floating stat badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#7a1028] border border-[#c9a227]/50 p-5 text-center shadow-2xl">
                <div
                  className="text-3xl text-[#c9a227]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  20+
                </div>
                <div
                  className="text-[#f0dfc0] text-xs tracking-widest uppercase mt-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Anos de
                  <br />
                  Experiência
                </div>
              </div>
            </div>

            {/* Text column */}
            <div>
              <p
                className="text-[#c9a227] tracking-[0.3em] uppercase text-xs mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Sobre
              </p>
              <h2
                className="text-3xl sm:text-4xl text-[#f0dfc0] mb-6 leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Conheça
                <br />
                Mãe Janaína
              </h2>
              <div className="h-px w-16 bg-[#c9a227]/40 mb-6" />
              <p className="text-[#d4b896] text-lg leading-relaxed mb-5">
                Com décadas de experiência na espiritualidade, Mãe Janaína realiza
                consultas espirituais completas para identificar bloqueios, energias
                negativas e caminhos para o amor, prosperidade e equilíbrio espiritual.
              </p>
              <p className="text-[#9b7e6a] leading-relaxed mb-8">
                Atendendo clientes em todo o Brasil e no exterior, com sigilo total e
                atendimento humanizado. Cada caso é tratado com atenção individual,
                respeito e total dedicação espiritual.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { num: "9.000+", label: "Clientes" },
                  { num: "20+", label: "Anos" },
                  { num: "100%", label: "Sigilo" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="text-center border border-[#c9a227]/20 p-3 bg-card"
                  >
                    <div
                      className="text-2xl text-[#c9a227]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.num}
                    </div>
                    <div
                      className="text-[#9b7e6a] text-xs tracking-wider uppercase mt-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#7a1028] hover:bg-[#9a1535] text-[#f0dfc0] font-semibold tracking-widest uppercase text-xs px-8 py-4 border border-[#c9a227]/30 hover:border-[#c9a227]/70 transition-all duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Agendar Consulta ✦
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ SERVICES ════════════════════════ */}
      <section className="py-20 bg-[#0a0204] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/20 to-transparent" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p
              className="text-[#c9a227] tracking-[0.3em] uppercase text-xs mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Trabalhos Espirituais
            </p>
            <h2
              className="text-3xl sm:text-4xl text-[#f0dfc0]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Serviços Disponíveis
            </h2>
            <GoldDivider />
          </div>

          {/* Accordion on mobile, grid on larger screens */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-card border border-[#c9a227]/15 hover:border-[#c9a227]/40 transition-all duration-300 hover:bg-[#1a0c15] hover:shadow-lg hover:shadow-[#7a1028]/20 flex flex-col"
              >
                <button
                  className="flex items-center justify-between p-5 text-left w-full sm:cursor-default"
                  onClick={() => setOpenService(openService === i ? null : i)}
                  aria-expanded={openService === i}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-px bg-[#c9a227]/50 mt-3 flex-shrink-0" />
                    <h3
                      className="text-[#f0dfc0] text-sm leading-snug"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <span className="sm:hidden text-[#c9a227] ml-2 flex-shrink-0">
                    {openService === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                <div
                  className={`px-5 pb-5 flex-1 flex flex-col transition-all duration-300 ${
                    openService === i ? "block" : "hidden sm:flex"
                  }`}
                >
                  <p className="text-[#9b7e6a] text-sm leading-relaxed flex-1 mb-5">{s.desc}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start text-[#c9a227] hover:text-[#f0dfc0] text-xs tracking-widest uppercase border-b border-[#c9a227]/30 hover:border-[#c9a227] transition-all duration-200 pb-0.5"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Saiba Mais →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ TESTIMONIALS ════════════════════════ */}
      <section className="py-20 bg-[#0d0307] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/20 to-transparent" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p
              className="text-[#c9a227] tracking-[0.3em] uppercase text-xs mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Resultados Reais
            </p>
            <h2
              className="text-3xl sm:text-4xl text-[#f0dfc0]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Histórias de Amor Transformadas
            </h2>
            <GoldDivider />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-card border border-[#c9a227]/15 hover:border-[#c9a227]/35 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#7a1028]/20 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <StarIcon key={j} />
                  ))}
                </div>
                <p className="text-[#d4b896] text-sm leading-relaxed mb-5 italic flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="h-px bg-[#c9a227]/15 mb-4" />
                <div>
                  <p
                    className="text-[#c9a227] text-xs tracking-wider"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[#9b7e6a] text-xs mt-0.5">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ FINAL CTA ════════════════════════ */}
      <section className="py-28 bg-[#0a0204] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/20 to-transparent" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-8"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=700&fit=crop&auto=format')",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#c9a227]/40" />
            <span className="text-[#c9a227] text-xl">✦</span>
            <div className="h-px w-16 bg-[#c9a227]/40" />
          </div>

          <h2
            className="text-4xl sm:text-6xl text-[#f0dfc0] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Não Sofra Mais
            <br />
            Pelo Amor
          </h2>

          <p className="text-[#d4b896] text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Receba orientação espiritual agora mesmo e descubra os caminhos que a
            espiritualidade reserva para sua vida.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-800 hover:bg-green-700 text-white font-bold tracking-widest uppercase text-xs px-10 py-5 transition-all duration-300 hover:shadow-2xl hover:shadow-green-800/50 hover:scale-105"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <WhatsAppIcon />
            Chamar no WhatsApp
          </a>

          <p className="text-[#9b7e6a] text-xs mt-5 tracking-wide">
            Atendimento imediato · Online para todo Brasil e Exterior
          </p>
        </div>
      </section>

      {/* ════════════════════════ FOOTER ════════════════════════ */}
      <footer className="bg-[#050104] border-t border-[#c9a227]/20 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#c9a227]/30" />
              <span className="text-[#c9a227]">✦</span>
              <div className="h-px w-12 bg-[#c9a227]/30" />
            </div>
            <h3
              className="text-2xl text-[#f0dfc0] mb-1"
              style={{ fontFamily: "var(--font-deco)" }}
            >
              Mãe Janaína
            </h3>
            <p
              className="text-[#9b7e6a] text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Especialista em Amarração Amorosa
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { icon: "🇧🇷", label: "Atendimento Online", sub: "Todo Brasil e Exterior" },
              { icon: "💬", label: "Consultas pelo", sub: "WhatsApp" },
              { icon: "🔒", label: "Sigilo Total", sub: "Total discrição" },
              { icon: "❤️", label: "Atendimento", sub: "Humanizado" },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-[#c9a227]/12 bg-card p-4 text-center hover:border-[#c9a227]/30 transition-colors duration-200"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div
                  className="text-[#f0dfc0] text-xs uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.label}
                </div>
                <div className="text-[#9b7e6a] text-xs mt-1">{item.sub}</div>
              </div>
            ))}
          </div>

          <div className="text-center border-t border-[#c9a227]/10 pt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 text-sm transition-colors duration-200 mb-4"
            >
              <WhatsAppIcon />
              Entrar em Contato via WhatsApp
            </a>
            <p className="text-[#9b7e6a]/45 text-xs mt-2">
              © 2024 Mãe Janaína — Todos os direitos reservados. Consultas espirituais para maiores de 18 anos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
