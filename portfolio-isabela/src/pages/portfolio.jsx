import React from "react";
import * as Lucide from "lucide-react";
import { motion } from "framer-motion";

// Single-file React portfolio component using Tailwind CSS.
// Fixed icon import issue by using a namespace import from `lucide-react`
// and a small Icon helper that maps common icon names to the available exports.
// Customize the `data` object below with your real info, projects and links.
// Save as `Portfolio.jsx` and mount in your app (e.g. in App.jsx).

const data = {
  name: "Isabela Sucharski",
  role: "Frontend Developer (React, TypeScript)",
  location: "Curitiba, Brazil",
  intro:
    "Desenvolvedora Frontend pleno com foco em React e experiências ricas em interfaces acessíveis, performáticas e testáveis.",
  social: {
    linkedin: "https://www.linkedin.com/in/isabela-sucharaski-b2954a171",
    github: "https://github.com/yourusername",
    resume: "#" // link para seu currículo em PDF
  },
  skills: [
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML & CSS",
    "Tailwind CSS",
    "Testing (Jest/RTL)",
    "React Query / SWR",
    "Accessibility (a11y)"
  ],
  projects: [
    {
      title: "Dashboard UI - Food Company",
      desc: "Painel administrativo responsivo com gráficos e filtros dinâmicos. Implementado com React, TypeScript e Recharts.",
      tech: ["React", "TypeScript", "Tailwind", "Recharts"],
      demo: "#",
      repo: "#"
    },
    {
      title: "Design System — Component Library",
      desc: "Biblioteca de componentes com tokens de design, variações e documentação Storybook.",
      tech: ["React", "Storybook", "Figma"],
      demo: "#",
      repo: "#"
    }
  ]
};

// Icon helper: try to resolve common lucide-react exports across different versions.
function Icon({ name, size = 16, className = "", ariaHidden = true }) {
  const map = {
    Linkedin: Lucide.Linkedin || Lucide.LinkedIn || Lucide['Linkedin'],
    LinkedIn: Lucide.Linkedin || Lucide.LinkedIn || Lucide['Linkedin'],
    Github: Lucide.Github || Lucide.GitHub || Lucide['github'] || Lucide['GitHub'],
    GitHub: Lucide.Github || Lucide.GitHub || Lucide['github'] || Lucide['GitHub'],
    Mail: Lucide.Mail,
    FileText: Lucide.FileText || Lucide['Filetext'] || Lucide['fileText']
  };

  const Comp = map[name];
  if (Comp) return <Comp size={size} className={className} aria-hidden={ariaHidden} />;

  // Fallback: simple inline initials box so build doesn't fail if icon isn't present
  const initials = name ? name.slice(0, 2).toUpperCase() : "";
  return (
    <span
      role="img"
      aria-hidden={ariaHidden}
      style={{ display: "inline-flex", width: size, height: size, alignItems: "center", justifyContent: "center", fontSize: Math.round(size * 0.6) }}
      className={className}
    >
      {initials}
    </span>
  );
}

const Card = ({ children, className = "" }) => (
  <div className={`bg-white/80 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl p-6 shadow-md ${className}`}>
    {children}
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <motion.h1
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-4xl font-extrabold"
            >
              {data.name}
            </motion.h1>
            <p className="mt-1 text-slate-600 dark:text-slate-300">{data.role} • {data.location}</p>
          </div>

          <div className="flex items-center gap-3">
            <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl hover:scale-105 transition">
              <Icon name="Linkedin" size={18} /> <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href={data.social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl hover:scale-105 transition">
              <Icon name="Github" size={18} /> <span className="hidden sm:inline">GitHub</span>
            </a>
            <a href={data.social.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl hover:scale-105 transition">
              <Icon name="FileText" size={18} /> <span className="hidden sm:inline">CV</span>
            </a>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column (About + Skills) */}
          <section className="lg:col-span-1 space-y-6">
            <Card>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                <h2 className="text-xl font-semibold mb-2">Sobre</h2>
                <p className="text-sm text-slate-700 dark:text-slate-300">{data.intro}</p>

                <div className="mt-4">
                  <h3 className="text-sm font-medium">Skills</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {data.skills.map((s) => (
                      <span key={s} className="text-xs px-2 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Card>

            <Card>
              <h3 className="text-sm font-semibold mb-2">Contato</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">Quer conversar sobre um projeto, vaga ou parceria?</p>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-600 text-white hover:opacity-90" href={`mailto:isabela.sucharaski@example.com`}>
                <Icon name="Mail" size={16} /> <span className="hidden sm:inline">Enviar e-mail</span>
              </a>
            </Card>

            <Card>
              <h4 className="text-sm font-semibold mb-2">Download</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">Baixe meu currículo em PDF ou veja projetos no GitHub.</p>
              <div className="mt-3 flex gap-2">
                <a href={data.social.resume} className="px-3 py-2 rounded-lg border">CV</a>
                <a href={data.social.github} className="px-3 py-2 rounded-lg border">GitHub</a>
              </div>
            </Card>
          </section>

          {/* Right column (Projects + Footer) */}
          <section className="lg:col-span-2 space-y-6">
            <div className="grid gap-4">
              <h2 className="text-2xl font-bold">Projetos</h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {data.projects.map((p) => (
                  <motion.article key={p.title} className="w-full" initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                    <Card>
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold">{p.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{p.desc}</p>
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {p.tech.join(" • ")}
                          </div>
                        </div>

                        <div className="mt-4 flex gap-2">
                          {p.demo && (
                            <a href={p.demo} className="text-sm px-3 py-2 rounded-lg border">Demo</a>
                          )}
                          {p.repo && (
                            <a href={p.repo} className="text-sm px-3 py-2 rounded-lg border">Repo</a>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.article>
                ))}
              </div>
            </div>

            <footer className="mt-6">
              <Card>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-sm">Feito com ❤️ por {data.name} — open to freelance & full-time.</p>
                    <p className="text-xs text-slate-500">Dica: substitua este componente por seus screenshots e links reais.</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <a href={data.social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                      <Icon name="Github" size={16} /> <span className="hidden sm:inline">GitHub</span>
                    </a>
                    <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                      <Icon name="Linkedin" size={16} /> <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                    <a href={`mailto:isabela.sucharaski@example.com`} className="inline-flex items-center gap-2">
                      <Icon name="Mail" size={16} /> <span className="hidden sm:inline">Email</span>
                    </a>
                  </div>
                </div>
              </Card>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}

// --- Dev / smoke test helper ---
// This tiny component helps to quickly mount the portfolio during development or automated smoke checks.
export function DevSmokeTest() {
  // Render the Portfolio once and return a simple message that test ran.
  // If you use a test runner, you can mount <DevSmokeTest /> in a DOM and assert it doesn't crash.
  return (
    <div>
      <Portfolio />
      <div style={{ display: "none" }} data-testid="portfolio-mounted">mounted</div>
    </div>
  );
}
