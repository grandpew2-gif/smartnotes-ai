import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Brain,
  Check,
  ChevronDown,
  FileText,
  FlaskConical,
  Mail,
  Menu,
  MessageSquare,
  PenLine,
  Sparkles,
  Star,
  Twitter,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 shadow-sm backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between sm:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight sm:text-xl">
              SmartNotes AI
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className="rounded-xl px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Log in
            </a>
            <a
              href="#pricing"
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="grid h-10 w-10 place-items-center rounded-xl bg-accent lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-2 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Log in
                </a>
                <a
                  href="#pricing"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32">
      <div className="gradient-hero pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by 10,000+ students
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Turn Notes into{" "}
            <span className="relative inline-block text-primary">
              Success
              <svg
                className="absolute -bottom-2 left-0 w-full text-primary/30 sm:-bottom-3"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 10C50 2 250 2 298 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
          >
            SmartNotes AI transforms your messy notes into clear summaries, smart flashcards, and
            personalized quizzes — so you study less and remember more.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30 hover:-translate-y-0.5 sm:w-auto"
            >
              Get Started
              <Zap className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-accent hover:-translate-y-0.5 sm:w-auto"
            >
              Learn More
              <BookOpen className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-2xl shadow-primary/5">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-primary" />
            <div className="grid gap-4 rounded-2xl bg-muted/50 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
              <HeroCard
                icon={<FileText className="h-6 w-6" />}
                title="Upload Notes"
                description="Drag & drop PDFs, images, or paste text in seconds."
              />
              <HeroCard
                icon={<Brain className="h-6 w-6" />}
                title="AI Summarizes"
                description="Get concise summaries and key concepts automatically."
              />
              <HeroCard
                icon={<FlaskConical className="h-6 w-6" />}
                title="Study Smarter"
                description="Generate flashcards and quizzes tailored to your material."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI Summaries",
      description:
        "Turn long lectures and textbooks into bite-sized summaries that highlight what actually matters.",
    },
    {
      icon: <PenLine className="h-6 w-6" />,
      title: "Smart Flashcards",
      description:
        "Auto-generate flashcards from your notes with spaced repetition built right in.",
    },
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: "Practice Quizzes",
      description:
        "Test yourself with AI-generated quizzes that adapt to your weak spots over time.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Study Chatbot",
      description:
        "Ask questions about your notes anytime and get instant, context-aware answers.",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Features
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything you need to ace your studies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful AI tools designed to help you learn faster, remember longer, and stress less.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 sm:p-8"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for trying out SmartNotes AI.",
      features: [
        "5 AI summaries per month",
        "50 smart flashcards",
        "10 practice quizzes",
        "Basic study chatbot",
        "Community support",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$9",
      period: "/month",
      description: "For serious students who want unlimited power.",
      features: [
        "Unlimited AI summaries",
        "Unlimited flashcards",
        "Unlimited practice quizzes",
        "Advanced study chatbot",
        "Priority support",
        "Export to PDF & Anki",
        "Study analytics dashboard",
      ],
      cta: "Get Pro",
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="bg-blue-50/50 py-20 sm:py-28 dark:bg-blue-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Pricing
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, student-friendly pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free and upgrade when you're ready to unlock your full potential.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`relative rounded-3xl border p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:p-10 ${
                plan.popular
                  ? "border-primary bg-card shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground shadow-md">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-muted-foreground">{plan.description}</p>
              </div>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-extrabold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full rounded-2xl px-6 py-3.5 text-center text-base font-semibold transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30"
                    : "border border-border bg-background text-foreground hover:bg-accent"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        "SmartNotes AI turned my 50-page biology notes into flashcards in minutes. I got an A on my final!",
      author: "Sarah Chen",
      role: "Pre-med Student",
      rating: 5,
    },
    {
      quote:
        "The quiz feature is a game changer. It feels like having a personal tutor available 24/7.",
      author: "Marcus Johnson",
      role: "Computer Science Major",
      rating: 5,
    },
    {
      quote:
        "I went from cramming all night to studying efficiently. My grades improved and my stress dropped.",
      author: "Emily Rodriguez",
      role: "Law Student",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Testimonials
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Loved by students everywhere
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how SmartNotes AI is helping students study smarter and achieve more.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={fadeInUp}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-foreground">“{testimonial.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-display font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      question: "How does SmartNotes AI summarize my notes?",
      answer:
        "Our AI reads your uploaded documents or pasted text and extracts the most important concepts, creating concise summaries while preserving key details.",
    },
    {
      question: "Is there a free plan?",
      answer:
        "Yes! The Free plan includes 5 AI summaries, 50 flashcards, and 10 quizzes per month — no credit card required.",
    },
    {
      question: "Can I export my flashcards?",
      answer:
        "Pro users can export flashcards to PDF and Anki format, making it easy to study anywhere.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Absolutely. We use enterprise-grade encryption and never sell your data. You can delete your notes at any time.",
    },
    {
      question: "What file types are supported?",
      answer:
        "SmartNotes AI supports PDF, DOCX, TXT, and common image formats like PNG and JPG.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-blue-50/50 py-20 sm:py-28 dark:bg-blue-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about SmartNotes AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
          className="mx-auto mt-14 max-w-3xl space-y-4"
        >
          {items.map((item, index) => (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
                aria-expanded={openIndex === index}
              >
                <span className="font-display text-lg font-semibold">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: easeOutExpo }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed sm:px-8">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Contact
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Get in touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
          className="mx-auto mt-14 max-w-xl"
        >
          {submitted ? (
            <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                <Check className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold">Message sent!</h3>
              <p className="mt-2 text-muted-foreground">
                Thanks for reaching out. We'll get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "#" },
    { icon: <MessageSquare className="h-5 w-5" />, label: "Discord", href: "#" },
    { icon: <Mail className="h-5 w-5" />, label: "Email", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">SmartNotes AI</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SmartNotes AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
