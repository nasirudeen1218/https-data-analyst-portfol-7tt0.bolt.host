import { useState, useEffect } from 'react';
import {
  BarChart2,
  Database,
  FileSpreadsheet,
  Filter,
  LayoutDashboard,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  TrendingUp,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Award,
  Users,
  Activity,
} from 'lucide-react';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

const SKILLS = [
  { name: 'Power BI', icon: LayoutDashboard, level: 90 },
  { name: 'Excel', icon: FileSpreadsheet, level: 92 },
  { name: 'SQL', icon: Database, level: 78 },
  { name: 'Power Query', icon: Filter, level: 85 },
  { name: 'Data Cleaning', icon: Activity, level: 88 },
  { name: 'Data Visualization', icon: BarChart2, level: 91 },
  { name: 'Dashboard Design', icon: LayoutDashboard, level: 87 },
  { name: 'Problem Solving', icon: Lightbulb, level: 84 },
];

const PROJECTS = [
  {
    title: 'MTN Customer Churn Analysis',
    description:
      'Analyzed customer churn trends using Power BI and Excel to identify key reasons customers leave telecom services. Delivered actionable retention strategies through visual storytelling.',
    tools: ['Power BI', 'Excel', 'Power Query'],
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-600 to-cyan-500',
    metric: '34% churn reduction',
    icon: TrendingUp,
  },
  {
    title: 'Human Resources Dashboard',
    description:
      'Built an interactive dashboard to help HR teams monitor and analyze key workforce metrics including headcount, turnover rates, and departmental performance.',
    tools: ['Power BI', 'SQL', 'Excel'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-emerald-600 to-teal-500',
    metric: '12 KPIs tracked',
    icon: Users,
  },
  {
    title: 'Hospital Transaction Dashboard',
    description:
      'Created a clean and modern dashboard to visualize hospital sales, revenue, and regional performance, enabling data-driven decisions for hospital management.',
    tools: ['Power BI', 'DAX', 'Power Query'],
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-rose-500 to-orange-400',
    metric: '$2M+ revenue tracked',
    icon: BarChart2,
  },
];

const STATS = [
  { label: 'Projects Completed', value: '10+' },
  { label: 'Dashboards Built', value: '15+' },
  { label: 'Data Tools Used', value: '5+' },
  { label: 'Datasets Cleaned', value: '20+' },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((l) => l.toLowerCase());
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-gray-900">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-700 tracking-tight">BK.</span>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.toLowerCase()
                    ? 'text-blue-600'
                    : scrolled
                    ? 'text-gray-600 hover:text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Hire Me
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="block w-full text-left text-gray-700 font-medium py-2 hover:text-blue-600 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="about" className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-blue-100">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for opportunities
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5 tracking-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Bankole</span>
              </h1>

              <p className="text-lg text-gray-500 mb-3 font-medium uppercase tracking-widest text-sm">
                Junior Data Analyst
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                I transform raw data into meaningful insights and beautiful
                interactive dashboards that help businesses make smarter
                decisions.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => scrollTo('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-semibold shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 flex items-center gap-2"
                >
                  View Projects
                  <ExternalLink size={16} />
                </button>
                <a
                  href="#"
                  className="border-2 border-gray-200 px-7 py-3 rounded-full font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-gray-700"
                >
                  Download CV
                </a>
              </div>

              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-56 h-56 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <BarChart2 className="text-white" size={28} />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 text-lg">Bankole Nasirudeen</h2>
                    <p className="text-sm text-gray-500">Data Analyst · Lagos, Nigeria</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  Focused on creating dashboards, cleaning datasets, and
                  uncovering insights that drive business value. Skilled in
                  Power BI, Excel, SQL, and data visualization.
                </p>

                <div className="space-y-3">
                  {[
                    { label: 'Dashboard Design', pct: 91 },
                    { label: 'Data Analysis', pct: 88 },
                    { label: 'SQL Querying', pct: 78 },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-gray-600">{bar.label}</span>
                        <span className="text-blue-600">{bar.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                          style={{ width: `${bar.pct}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2">
                  <Award size={16} className="text-amber-500" />
                  <span className="text-sm text-gray-600 font-medium">Open to internships & freelance work</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button
              onClick={() => scrollTo('skills')}
              className="text-gray-400 hover:text-blue-600 transition-colors animate-bounce"
              aria-label="Scroll down"
            >
              <ChevronDown size={28} />
            </button>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">What I work with</p>
            <h2 className="text-4xl font-extrabold tracking-tight">Skills & Expertise</h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto">
              A focused toolkit built around data analysis, visualization, and business intelligence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {SKILLS.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 p-6 rounded-2xl transition-all duration-200 cursor-default"
                >
                  <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-all duration-200">
                    <Icon size={20} className="text-blue-600 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-3 text-sm">{skill.name}</h3>
                  <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1.5">{skill.level}%</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className="text-4xl font-extrabold tracking-tight">Featured Projects</h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto">
              Real-world data projects solving business challenges through analytics and visual storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-75`}></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <div className="flex items-center justify-between">
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
                          {project.metric}
                        </div>
                        <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Icon size={18} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 leading-snug">{project.title}</h3>
                    <p className="text-gray-500 text-sm mb-5 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-100"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">My journey</p>
            <h2 className="text-4xl font-extrabold tracking-tight">Experience</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 to-transparent"></div>

              <div className="relative pl-16">
                <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <BarChart2 size={22} className="text-white" />
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Junior Data Analyst</h3>
                      <p className="text-blue-600 font-semibold mt-0.5">Freelance & Personal Projects</p>
                    </div>
                    <span className="text-sm font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full self-start sm:self-auto">
                      2023 – Present
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {[
                      'Cleaned and transformed complex datasets using Power Query and Excel for analysis-ready outputs.',
                      'Designed interactive Power BI dashboards for business reporting and executive decision-making.',
                      'Wrote optimized SQL queries for data extraction, joining multiple tables for deep analysis.',
                      'Created KPI reports and visual storytelling dashboards communicating trends clearly to stakeholders.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Get in touch</p>
            <h2 className="text-4xl font-extrabold tracking-tight">Let's Work Together</h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto">
              Open to internships, freelance projects, and entry-level data analyst opportunities.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail size={30} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Ready to collaborate?</h3>
                <p className="text-blue-100 text-sm">
                  Let's turn your data into actionable insights.
                </p>
              </div>

              <div className="p-8 space-y-5">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'bankolenasirudeen28@gmail.com',
                    href: 'mailto:bankolenasirudeen28@gmail.com',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+234 8054725581',
                    href: 'tel:+2348054725581',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Lagos, Nigeria',
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors duration-200">
                      <Icon size={18} className="text-blue-600 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{label}</p>
                      {href ? (
                        <a href={href} className="text-gray-800 font-semibold text-sm hover:text-blue-600 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-semibold text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <a
                  href="mailto:bankolenasirudeen28@gmail.com"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-2xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 mt-2"
                >
                  Send a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Bankole Nasirudeen. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
