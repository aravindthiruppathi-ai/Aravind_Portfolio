"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Link as LinkIcon, FileText, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-gray-900">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="#home" className="font-bold tracking-tight">Aravind Thiruppathi</a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#awards" className="hover:underline">Awards</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
            <a href="#resume" className="hover:underline">Resume</a>
            <a href="#blog" className="hover:underline">Blog</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <div className="flex gap-2">
            <a href="#contact" className="hidden md:inline-block"><Button size="sm">Say hello</Button></a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center text-center py-20 px-6">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="/images/hero-photo.jpg"
          alt="Aravind Thiruppathi"
          className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover"
        />
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-3 max-w-3xl"
        >
          Logistics with clarity, speed, and trust.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="italic text-lg text-gray-600 mb-6"
        >
          “What gets measured gets managed.” – Peter Drucker
        </motion.p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Button asChild><a href="#resume"><FileText className="w-4 h-4 mr-2"/>Download CV</a></Button>
          <Button variant="outline" asChild><a href="https://www.linkedin.com/in/at-2046b313b/" target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4 mr-2"/>LinkedIn</a></Button>
          <Button variant="outline" asChild><a href="#projects"><LinkIcon className="w-4 h-4 mr-2"/>Projects</a></Button>
          <Button variant="outline" asChild><a href="#contact"><Mail className="w-4 h-4 mr-2"/>Contact</a></Button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src="/images/graduation-photo.jpg" alt="Graduation" className="rounded-2xl shadow-md" />
          <div className="space-y-4">
            <p>
              Hands-on logistics planner with an MSc in Logistics & Supply Chain Management (University of Sheffield) and a Lean Six Sigma Black Belt. At Maersk, I plan high-volume retail flows (Amazon, B&Q, Argos, Westcoast, Wickes) — booking slots, managing ASNs, resolving exceptions fast, and turning data into clear daily/weekly KPI stories. Previously at ELGI Ultra I built capacity models, OEE and standard work that lifted capacity ~20% and on-time delivery to ~93%; earlier at Kotiswara I reduced stockouts ~15% through tighter inventory controls. I use Advanced Excel (Power Query/Pivots, XLOOKUP), Power BI and IBM Cognos to make performance visible and keep stakeholders aligned. I’m motivated by simple, reliable operations that protect OTIF, cost and customer trust.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Excel / Power Query","Power BI","IBM Cognos","Lean / DMAIC","WMS/TMS","ERP/MRP"].map((chip) => (
                <span key={chip} className="text-xs bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">{chip}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white py-16 px-6 border-t border-slate-200">
        <h2 className="text-2xl font-semibold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((proj) => (
            <Card key={proj.title} className="shadow-sm hover:shadow-md transition rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-1">{proj.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{proj.summary}</p>
                <Button variant="link" className="px-0" asChild>
                  <a href={proj.href}>View Project →</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold mb-6">Awards & Recognition</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Employer of the Month – Maersk (Feb 2025)</li>
          <li>Spot Award – Maersk (Dec 2024)</li>
          <li>Employee of the Quarter – ELGI Ultra (2021)</li>
          <li>National Yoga Champion – India (2012)</li>
        </ul>
      </section>

      {/* Testimonials (marquee) */}
      <section id="testimonials" className="bg-slate-50 py-16 px-6 border-t border-slate-200">
        <h2 className="text-2xl font-semibold text-center mb-6">Testimonials</h2>
        <p className="text-center text-sm text-gray-500 mb-8">(Hover to pause • 3–4 visible at once)</p>

        <style>{`
          @keyframes marqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee { overflow: hidden; position: relative; }
          .marquee__track {
            display: flex;
            width: 200%;
            animation: marqueeScroll 35s linear infinite;
          }
          .marquee:hover .marquee__track { animation-play-state: paused; }
        `}</style>

        <div className="max-w-6xl mx-auto marquee rounded-2xl">
          <div className="marquee__track gap-4">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={`t-${i}`} className="shrink-0 px-2" style={{ width: "25%" }}>
                <Card className="rounded-2xl h-full">
                  <CardContent className="p-5">
                    <p className="text-gray-800 mb-3">“{t.quote}”</p>
                    <p className="text-xs text-gray-500">– {t.author}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="sr-only">This carousel automatically scrolls right to left and can be paused on hover.</div>
      </section>

      {/* Resume */}
      <section id="resume" className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold mb-6">Resume / CV</h2>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-2/3 w-full">
            <div className="aspect-[4/3] w-full rounded-xl border bg-white shadow-sm grid place-items-center text-sm text-gray-500">
              <object data="/cv/Aravind_CV.pdf" type="application/pdf" className="w-full h-full">
                <a href="/cv/Aravind_CV.pdf" download>Download CV</a>
              </object>
            </div>
          </div>
          <div className="md:w-1/3 w-full space-y-3">
            <Button asChild className="w-full"><a href="/cv/Aravind_CV.pdf" download><FileText className="w-4 h-4 mr-2"/>Download CV</a></Button>
            <Button variant="outline" asChild className="w-full"><a href="https://www.linkedin.com/in/at-2046b313b/" target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4 mr-2"/>View LinkedIn</a></Button>
            <Button variant="outline" asChild className="w-full"><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram className="w-4 h-4 mr-2"/>Instagram</a></Button>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="bg-white py-16 px-6 border-t border-slate-200">
        <h2 className="text-2xl font-semibold text-center mb-10">Blog / Articles</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.title} className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="link" className="px-0" asChild>
                  <a href={post.href}>Read summary →</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center py-20 px-6">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-6">Let’s keep goods flowing — connect with me today.</p>
        <div className="flex gap-3 justify-center flex-wrap mb-8">
          <Button asChild><a href="mailto:aravind.thiruppathi@gmail.com"><Mail className="w-4 h-4 mr-2"/>Email Me</a></Button>
          <Button variant="outline" asChild><a href="/cv/Aravind_CV.pdf" download><FileText className="w-4 h-4 mr-2"/>Download CV</a></Button>
          <Button variant="outline" asChild><a href="https://www.linkedin.com/in/at-2046b313b/" target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4 mr-2"/>LinkedIn</a></Button>
        </div>
        <form className="max-w-xl mx-auto grid grid-cols-1 gap-3" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Your name" required />
          <Input type="email" placeholder="Your email" required />
          <Input placeholder="Your message" />
          <div className="text-left text-xs text-gray-500">This form is a placeholder – wire to your preferred form tool later.</div>
          <div className="text-left"><Button type="submit">Send</Button></div>
        </form>
      </section>

      <footer className="border-t border-slate-200 py-6 text-center text-sm text-gray-500">
        Built by Aravind Thiruppathi — light theme, easy to edit.
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "AI in Supply Chain Resilience (MSc Research)",
    summary: "Explored how AI strengthens retail supply chain resilience through forecasting, inventory optimization, and predictive risk analytics.",
    href: "/projects/ai-scr"
  },
  {
    title: "Reducing Late Deliveries with Six Sigma",
    summary: "DMAIC on last-mile shipments; identified bottlenecks and piloted improvements, targeting ~50% reduction in late deliveries.",
    href: "/projects/dmaic-late-deliveries"
  },
  {
    title: "eBike Rental Startup – Business Analysis",
    summary: "Stakeholder maps, MoSCoW, ERD, and low-fi prototype for a Sheffield MVP.",
    href: "/projects/ebike-analysis"
  },
  {
    title: "Excel Dashboard – Car Sales Analytics",
    summary: "Interactive Excel dashboard (Pivots, charts) visualising profit and dealer performance.",
    href: "/projects/excel-dashboard"
  },
  {
    title: "IBM Cognos Dashboard",
    summary: "Automated KPI reporting in Cognos to improve decision speed.",
    href: "/projects/cognos-dashboard"
  },
  {
    title: "Ergonomic Assessment using Kinect",
    summary: "Low-cost motion capture pipeline (Kinect + MATLAB) for ergonomic design.",
    href: "/projects/kinect-ergonomics"
  }
];

const testimonials = [
  { quote: "Good luck, Thank you for all the hard work this year", author: "Operation manager, Maersk" },
  { quote: "Thank you, Good luck in your future", author: "shift manager, Maersk" },
  { quote: "PER ASPERA AD ASHA, Keep your heads high and your quality even higher", author: "shift manager, Maersk" },
  { quote: "All the best brother, you will be missed", author: "FLM, Maersk" },
  { quote: "All the best Aravind, it was massive please working with you (end you survived after working with me too :)", author: "FLM, Maersk" },
  { quote: "Its been a pleasure working together, i wish you all the best on your new adventure!", author: "College, Maersk" },
  { quote: "Wishing you all strength, you'll be missed", author: "college, Maersk" },
  { quote: "You are the best boy aravind, you will be missed : (", author: "college, Maersk" },
  { quote: "All the best for the future mate, you'll be missed", author: "external stakeholder" },
  { quote: "All the best for the future aravind, it was immerse pleasure working with you.", author: "external stake holder" },
  { quote: "All the best Aravind. Do well and enjoy your classes. You did very well at Elgi and will miss seeing you grow with us.", author: "operations director, Elgi ultra" },
  { quote: "All the best for chasing your goals Aravind", author: "DGM, Elgi ultra" },
  { quote: "You will rock the world one day fight and chase for it", author: "Senior manufacturing manager, Elgi ultra" },
  { quote: "Right way to go, all the best Aravind", author: "College, Elgi ultra" },
  { quote: "your hard work speaks some day, good luck", author: "college, Elgi ultra" },
  { quote: "Good luck for building your future more resilient prosperous and joyful.”", author: "MD, Kotiswara gears" },
  { quote: "your curiosity will thrive to achieve goals, all the best for the future", author: "JK fenner" },
  { quote: "Good luck", author: "United enterprise" }
];

const blogPosts = [
  {
    title: "AI in Supply Chain Resilience — MSc Research Summary",
    excerpt: "How forecasting, demand sensing, and predictive risk analytics can cut stockouts, lift service levels, and reduce working capital.",
    href: "/blog/ai-scr-summary"
  },
  {
    title: "DMAIC Case Study — Reducing Late Deliveries",
    excerpt: "From baseline and Pareto to DOE and control: lessons from a last-mile improvement pilot.",
    href: "/blog/dmaic-late-deliveries"
  }
];
