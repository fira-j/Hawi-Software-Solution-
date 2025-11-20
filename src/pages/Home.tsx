import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Layers3,
  Sparkles,
  Workflow,
  Star,
  Code2,
  Terminal,
  GitBranch,
  Braces,
  FileCode,
  LayoutTemplate,
  CheckCircle2,
  Circle,
} from "lucide-react";
import partner1 from "@/assets/partner 1 logo.png";
import partner2 from "@/assets/partner 2 logo.jpg";
import partner3 from "@/assets/partner 3 logo.png";
import partner4 from "@/assets/partner 4 logo.jpg";

const featureCards = [
  {
    icon: LayoutTemplate,
    title: "Brand Identity development",
    copy: "Creating distinctive visual identities that resonate with your audience and strengthen your market presence.",
  },
  {
    icon: FileCode,
    title: "Web design and development",
    copy: "Building responsive, high-performance websites that deliver exceptional user experiences across all devices.",
  },
  {
    icon: Workflow,
    title: "Custom software development",
    copy: "Tailored solutions designed to meet your unique business needs and drive operational efficiency.",
  },
  {
    icon: Code2,
    title: "Mobile application development",
    copy: "Developing native and cross-platform mobile apps that engage users and deliver seamless experiences.",
  },
];

const serviceHighlights = [
  {
    step: "Step 1",
    label: "Request a meeting",
    body: "A meeting for better understanding of your requirements",
  },
  {
    step: "Step 2",
    label: "Receive custom Plan",
    body: "A custom plan will be provided based on your requirements",
  },
  {
    step: "Step 3",
    label: "We make it happen!",
    body: "Highly reliable client-oriented solution!",
  },
];

const clientLogos = [
  { name: "Partner 1", logo: partner1 },
  { name: "Partner 2", logo: partner2 },
  { name: "Partner 3", logo: partner3 },
  { name: "Partner 4", logo: partner4 },
];

const testimonials = [
  {
    quote:
      "The Hawi team executed a complex migration flawlessly and boosted our deployment cadence by 4x.",
    name: "Liya Kassaye",
    role: "CTO, Orbit Health",
  },
  {
    quote:
      "Our customer satisfaction jumped immediately after releasing the new product experience.",
    name: "Wondimu Getachew",
    role: "Head of Product, VelvetPay",
  },
];

const toolBadges = [
  {
    label: "VS Code",
    icon: Code2,
    position: "top-6 left-4",
    accent: "from-[#3b82f6]/45 via-[#1e1e2e]/80 to-transparent",
  },
  {
    label: "Git Flow",
    icon: GitBranch,
    position: "top-28 right-0",
    accent: "from-[#f97316]/35 via-[#2d0f06]/80 to-transparent",
  },
  {
    label: "Terminal",
    icon: Terminal,
    position: "bottom-20 left-6",
    accent: "from-[#22d3ee]/35 via-[#032c33]/80 to-transparent",
  },
  {
    label: "API Studio",
    icon: Layers3,
    position: "bottom-8 right-6",
    accent: "from-[#c084fc]/35 via-[#2b0f38]/80 to-transparent",
  },
];

const heroCodeIcon = { icon: Braces, className: "top-1/4 left-1/3" };

const uiStack = [
  { label: "HTML5", accent: "from-[#f97316]/20 via-transparent to-transparent", text: "text-[#ea580c]" },
  { label: "CSS", accent: "from-[#2563eb]/20 via-transparent to-transparent", text: "text-[#2563eb]" },
  { label: "Next.js", accent: "from-black/40 via-transparent to-transparent", text: "text-slate-900 dark:text-white" },
  { label: "Tailwind", accent: "from-[#0ea5e9]/20 via-transparent to-transparent", text: "text-[#0ea5e9]" },
  { label: "React", accent: "from-[#38bdf8]/20 via-transparent to-transparent", text: "text-[#38bdf8]" },
  { label: "Figma", accent: "from-[#a855f7]/20 via-transparent to-transparent", text: "text-[#a855f7]" },
];

const Home = () => {
  return (
    <div className="bg-background text-foreground transition-colors duration-500">
      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-white text-slate-900 dark:bg-[#020202] dark:text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-48 left-1/4 h-[55vh] w-[70vw] -rotate-6 rounded-[50%/65%] bg-gradient-to-r from-[#ff9f9f]/60 via-[#ffeded]/40 to-transparent blur-3xl opacity-70" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[60vh] w-[60vw] rounded-[40%] bg-gradient-to-l from-[#dd3333]/30 via-[#ff7b7b]/20 to-transparent blur-[140px]" />
          <div className="absolute inset-x-[-20%] bottom-[-35%] h-[70vh] rounded-[45%/55%] bg-gradient-to-r from-transparent via-[#ffb3b3]/40 to-transparent blur-[160px] opacity-80" />

          <div className="absolute inset-0 opacity-25">
            <heroCodeIcon.icon
              className="absolute left-1/4 top-1/3 -translate-x-1/3 -translate-y-1/2 text-[#DD3333]/40 drop-shadow-[0_30px_80px_rgba(221,51,51,0.45)] dark:text-white/5 animate-drift"
              style={{ width: "420px", height: "420px" }}
            />
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle,rgba(255,255,255,0.9),transparent_70%)]"
          aria-hidden="true"
        >
          {toolBadges.map((badge, index) => (
            <div key={badge.label} className={`hidden sm:block absolute ${badge.position}`}>
              <div
                className={`h-32 w-32 rounded-[30px] bg-gradient-to-br ${badge.accent} blur-3xl opacity-70`}
              />
              <div
                className="absolute left-6 top-4 flex w-40 items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-2xl animate-float"
                style={{ animationDelay: `${index * 0.45}s` }}
              >
                <badge.icon className="h-5 w-5 text-white/90" />
                <span>{badge.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto grid gap-16 px-4 pb-24 pt-32 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold tracking-wide text-slate-700 dark:border-white/20 dark:bg-white/10 dark:text-white">
              <Sparkles className="h-4 w-4 text-[#DD3333]" />
              Crafting Future Software Today
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
                Making Better Future.
              </h1>
              <p className="text-lg text-slate-600 dark:text-white/80 md:text-xl">
                We design, engineer, and scale intelligent products for teams
                that need clarity, velocity, and a trusted partner from strategy
                to launch.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center rounded-full bg-[#DD3333] px-6 py-3 text-base font-semibold text-white shadow-[0_20px_60px_-10px_rgba(221,51,51,0.7)] transition hover:-translate-y-0.5 hover:bg-[#c42c2c]"
              >
                Book a discovery call
                <ArrowUpRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-base font-semibold text-slate-900 transition hover:border-[#DD3333] hover:text-[#DD3333] dark:border-white/30 dark:text-white dark:hover:border-white"
              >
                Explore services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

          </div>

          <div className="relative mx-auto max-w-lg">
            <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 text-slate-900 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.35)] dark:border-white/10 dark:bg-gradient-to-br dark:from-[#151517] dark:via-[#0f0f11] dark:to-[#050505] dark:text-white">
              <div className="absolute inset-4 rounded-[30px] border border-white/70 bg-white/40 dark:border-white/10 dark:bg-white/5" />
              <div className="relative space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-white/50">
                      Product Kit
                    </p>
                    <h3 className="mt-2 text-3xl font-bold">Launch-Ready UI System</h3>
                  </div>
                  <div className="rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                    Sprint 07
                  </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-white/70">
                  Modular components, atomic tokens, and coded hand-off assets aligned to your roadmap.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {uiStack.map((tool) => (
                    <div
                      key={tool.label}
                      className={`relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm font-semibold shadow-sm dark:border-white/10 dark:bg-white/5 ${tool.text}`}
                    >
                      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tool.accent}`} />
                      <span className="relative flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-current opacity-70" />
                        {tool.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-[24px] border border-slate-200/70 bg-white/90 p-5 shadow-inner dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/50">
                    <span>Current phase</span>
                    <span>Next Milestone</span>
                  </div>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-slate-900 dark:text-white">Prototype QA</p>
                      <p className="text-sm text-slate-500 dark:text-white/70">Micro-interactions & perf tuning</p>
                    </div>
                    <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#DD3333] shadow-sm dark:border-white/20 dark:bg-[#DD3333]/10 dark:text-white">
                      Launch ETA · 4 weeks
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-4 rounded-full bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 shadow-lg dark:bg-white/10 dark:text-white">
              New slots open
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="relative bg-white py-20 dark:bg-slate-950">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DD3333]/40 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#DD3333]">
                Services
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                Modern engineering partnerships built for ambitious teams.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-[#DD3333] hover:text-[#DD3333] dark:border-white/20 dark:text-white dark:hover:text-[#DD3333]"
            >
              Download capabilities deck
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:border-[#DD3333]/40 dark:border-white/10 dark:bg-slate-900"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-5">
                  <div className="h-full w-full bg-gradient-to-br from-[#DD3333] to-black" />
                </div>
                <feature.icon className="h-10 w-10 text-[#DD3333]" />
                <h3 className="mt-6 text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{feature.copy}</p>
                <button className="mt-8 inline-flex items-center text-sm font-semibold text-[#DD3333] transition hover:gap-2 dark:text-[#DD3333]">
                  Schedule a walkthrough
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#faf8f8] py-16 dark:bg-slate-950">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[1.2fr,0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#DD3333]">
              Check out our Work Process
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
              Choose a Service
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Pick a service from our services catalog
            </p>
            <div className="mt-10 space-y-6">
              {serviceHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/60 bg-white p-6 shadow-sm transition hover:border-[#DD3333]/40 hover:shadow-lg dark:border-white/10 dark:bg-slate-900"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#DD3333] dark:text-[#DD3333]">
                    {item.step}
                  </p>
                  <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg text-slate-800 dark:text-slate-200">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#DD3333]/20 bg-[#050505] p-8 text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] dark:border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Ready to get started?
                </p>
                <h3 className="mt-3 text-3xl font-bold text-white">
                  We make it happen
                </h3>
              </div>
              <Sparkles className="h-10 w-10 text-[#DD3333]" />
            </div>
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              From idea to realistic solution for your problem.
            </p>
            <p className="mt-4 text-base text-white/70">
              Let's discuss your project and turn your vision into reality with our expert team.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-base font-semibold text-[#DD3333] transition hover:bg-slate-100 hover:scale-105"
            >
              Contact Us Today
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>

            {/* Process Flow */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-8 text-center font-medium">
                Our Process
              </p>
              <div className="flex items-center justify-between gap-3 px-2">
                {/* Step 1 */}
                <div className="flex-1 flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-[#DD3333]/30 to-[#DD3333]/10 border-2 border-[#DD3333] flex items-center justify-center animate-wave shadow-lg shadow-[#DD3333]/20" style={{ animationDelay: "0s" }}>
                      <Circle className="h-7 w-7 text-[#DD3333] fill-[#DD3333] stroke-2" />
                    </div>
                    <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#DD3333] to-[#c42c2c] flex items-center justify-center shadow-md shadow-[#DD3333]/50 animate-pulse-glow" style={{ animationDelay: "0s" }}>
                      <span className="text-[9px] font-bold text-white">1</span>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-white leading-tight mb-1">
                    Request
                  </p>
                  <p className="text-[11px] text-white/70 leading-tight">
                    Meeting
                  </p>
                </div>

                {/* Arrow 1 */}
                <div className="flex-shrink-0 px-1">
                  <ArrowRight className="h-6 w-6 text-white/50 animate-arrow-flow" style={{ animationDelay: "0.3s" }} />
                </div>

                {/* Step 2 */}
                <div className="flex-1 flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-[#DD3333]/30 to-[#DD3333]/10 border-2 border-[#DD3333] flex items-center justify-center animate-wave shadow-lg shadow-[#DD3333]/20" style={{ animationDelay: "0.6s" }}>
                      <Circle className="h-7 w-7 text-[#DD3333] fill-[#DD3333] stroke-2" />
                    </div>
                    <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#DD3333] to-[#c42c2c] flex items-center justify-center shadow-md shadow-[#DD3333]/50 animate-pulse-glow" style={{ animationDelay: "0.6s" }}>
                      <span className="text-[9px] font-bold text-white">2</span>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-white leading-tight mb-1">
                    Receive
                  </p>
                  <p className="text-[11px] text-white/70 leading-tight">
                    Custom Plan
                  </p>
                </div>

                {/* Arrow 2 */}
                <div className="flex-shrink-0 px-1">
                  <ArrowRight className="h-6 w-6 text-white/50 animate-arrow-flow" style={{ animationDelay: "0.9s" }} />
                </div>

                {/* Step 3 */}
                <div className="flex-1 flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-[#DD3333]/30 to-[#DD3333]/10 border-2 border-[#DD3333] flex items-center justify-center animate-wave shadow-lg shadow-[#DD3333]/20" style={{ animationDelay: "1.2s" }}>
                      <CheckCircle2 className="h-7 w-7 text-[#DD3333] fill-[#DD3333] stroke-2" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-white leading-tight mb-1">
                    We Make It
                  </p>
                  <p className="text-[11px] text-white/70 leading-tight">
                    Happen!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos + Testimonials */}
      <section className="bg-white py-20 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="rounded-[32px] border border-slate-100 bg-slate-50/60 p-10 text-center shadow-inner dark:border-white/10 dark:bg-slate-900/60">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#DD3333]">
              Trusted by teams worldwide
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {clientLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center rounded-2xl border border-transparent bg-white px-6 py-6 shadow-sm transition hover:-translate-y-1 hover:border-[#DD3333]/30 dark:bg-slate-900"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto object-contain opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[32px] border border-slate-100 bg-white p-10 shadow-[0_40px_80px_-60px_rgba(15,23,42,0.5)] transition hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900"
              >
                <Star className="h-10 w-10 text-[#DD3333]" />
                <p className="mt-6 text-lg text-slate-700 dark:text-slate-200">
                  {testimonial.quote}
                </p>
                <div className="mt-8 border-t border-slate-100 pt-4">
                  <p className="text-base font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-white py-20 text-slate-900 dark:bg-[#050505] dark:text-white">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="rounded-[40px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-12 text-slate-900 shadow-[0_50px_120px_-50px_rgba(15,23,42,0.35)] dark:border-white/10 dark:bg-gradient-to-br dark:from-[#0f0f0f] dark:via-[#171717] dark:to-[#050505] dark:text-white">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
                  Let’s collaborate
                </p>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                  Ready to launch your next product, platform, or internal tool?
                </h2>
                <p className="text-lg text-slate-600 dark:text-white/80">
                  Tell us about your roadmap and we’ll assemble the perfect
                  product squad, complete with delivery rituals, instrumentation,
                  and executive-ready reporting.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#DD3333] px-8 py-3 text-base font-semibold text-white shadow-[0_25px_60px_-15px_rgba(221,51,51,0.65)] transition hover:-translate-y-0.5"
                >
                  Plan a project workshop
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/blogs"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 text-base font-semibold text-slate-900 transition hover:border-[#DD3333] hover:text-[#DD3333] dark:border-white/30 dark:text-white dark:hover:border-white"
                >
                  Browse latest insights
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
