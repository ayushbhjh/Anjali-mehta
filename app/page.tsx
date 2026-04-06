import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MentorshipForm from "@/components/MentorshipForm";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StatBadge from "@/components/StatBadge";
import TestimonialCard from "@/components/TestimonialCard";

const trustItems = [
  { title: "MDI'29", subtitle: "Advanced management pathway" },
  { title: "DSE'23", subtitle: "Economics and strategic thinking" },
  { title: "SRCC'21", subtitle: "Academic rigor and excellence" },
  { title: "Marketing", subtitle: "Brand and growth orientation" },
  { title: "Research Expertise", subtitle: "Methodology and publication support" },
  { title: "Mentorship", subtitle: "Career and academic guidance" }
];

const services = [
  {
    title: "MBA Career Mentorship",
    description:
      "Build a focused career direction with practical support on role mapping, internship targeting, personal branding, and interview performance.",
    outcomes: ["Career clarity and goal setting", "Interview and resume refinement", "Confident job and internship strategy"]
  },
  {
    title: "Startup Strategy & Funding Guidance",
    description:
      "Translate business ideas into investor-ready pathways through market positioning, growth planning, and structured funding preparation.",
    outcomes: ["Sharper startup direction", "Fundraising narrative and deck guidance", "Growth priorities and execution roadmap"]
  },
  {
    title: "Research, Publication & Methodology Support",
    description:
      "Strengthen your research output with hands-on guidance across topic framing, methodology design, literature synthesis, and publication readiness.",
    outcomes: ["Clearer research architecture", "Methodology and analysis support", "Publication strategy and quality uplift"]
  },
  {
    title: "PhD & Academic Guidance",
    description:
      "Navigate complex academic decisions with confidence, from topic alignment and SOP direction to long-term research and doctoral pathways.",
    outcomes: ["Stronger academic decision-making", "PhD pathway clarity", "Long-term research alignment"]
  }
];

const processSteps = [
  {
    title: "Discover Goals",
    description: "Define your current stage, constraints, and high-impact outcomes across career, startup, or academic tracks."
  },
  {
    title: "Build Strategy",
    description: "Create a focused plan tailored to your ambitions, with practical milestones and realistic timelines."
  },
  {
    title: "Execute with Guidance",
    description: "Receive hands-on mentorship, tactical feedback, and accountability support through key decisions."
  },
  {
    title: "Track Progress",
    description: "Review outcomes, refine direction, and sustain momentum with clear checkpoints and next steps."
  }
];

const outcomes = [
  "Better career clarity and direction",
  "Stronger applications, CVs, and interviews",
  "Structured startup and funding roadmap",
  "Sharper research quality and methodology",
  "Higher publication readiness",
  "Confidence in academic and PhD decisions"
];

const testimonials = [
  {
    quote:
      "Anjali helped me convert scattered preparation into a focused MBA job strategy. I walked into interviews with a much stronger story and confidence.",
    name: "MBA Student",
    role: "Summer Internship Candidate"
  },
  {
    quote:
      "Her startup guidance brought clarity to our early-stage decisions. We refined our value proposition and funding narrative significantly.",
    name: "Early-Stage Founder",
    role: "Pre-Seed Startup"
  },
  {
    quote:
      "I got practical support on research structure, methodology, and publication planning. The quality jump in my work was immediately visible.",
    name: "Research Scholar",
    role: "Publication Aspirant"
  }
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section className="section-shell pb-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => (
            <StatBadge key={item.title} title={item.title} subtitle={item.subtitle} />
          ))}
        </div>
      </section>

      <section id="about" className="section-shell section-space">
        <div className="surface-card grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr]">
          <SectionHeading
            eyebrow="About Anjali"
            title="Mentorship that bridges career ambition, startup execution, and academic excellence."
            description="Anjali Mehta combines structured strategic thinking with empathetic mentorship. Her approach is built for ambitious students, researchers, and founders who want practical clarity, stronger execution, and measurable progress."
          />
          <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            <p>
              Whether you are navigating placements, refining a startup thesis, strengthening research output, or evaluating a PhD pathway, each engagement is tailored around your goals and constraints.
            </p>
            <p>
              The mentorship style is warm, intellectually rigorous, and outcomes-focused, giving you both strategic direction and hands-on guidance at critical points.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section-space border-y border-line/70 bg-white/60">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Services"
            title="Focused support across career, startup, and academic growth journeys."
            description="Each mentorship track combines strategic planning with practical implementation support so your progress is intentional and result-oriented."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} outcomes={service.outcomes} />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-shell section-space">
        <SectionHeading
          eyebrow="Process"
          title="A premium coaching workflow designed for progress."
          description="A clear mentorship process that transforms ambition into structured execution."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="surface-card p-6">
              <p className="text-sm font-semibold text-accent">Step {index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space bg-white/60">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Outcomes"
            title="What you can expect from guided mentorship."
            description="Designed to improve clarity, decision quality, and confidence across professional and academic goals."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome) => (
              <div key={outcome} className="surface-card flex items-center gap-3 p-5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal/15 text-teal" aria-hidden>
                  ✓
                </span>
                <p className="text-sm font-medium text-ink">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-shell section-space">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by ambitious students, researchers, and founders."
          description="Placeholder testimonial format ready for real client stories, social proof, and measurable outcomes."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell pb-20">
        <div className="surface-card overflow-hidden p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">Final CTA</p>
              <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                Ready to build your next career move?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                Book a mentorship session to get tailored guidance for your MBA trajectory, startup strategy, research plans, or
                academic path.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <CTAButton href="#mentorship-form">Book a Session</CTAButton>
                <CTAButton href="#services" variant="secondary">
                  View Services
                </CTAButton>
              </div>
            </div>
            <div className="rounded-xl2 border border-line bg-gradient-to-br from-white to-[#f6f1e8] p-6">
              <p className="text-sm font-semibold text-navy">Booking Calendar Integration Placeholder</p>
              <p className="mt-2 text-sm text-muted">
                Add Calendly, Google Calendar, or a custom scheduling form here for live conversion.
              </p>
              <button
                type="button"
                className="mt-5 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent"
              >
                Download Brochure (Placeholder)
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="mentorship-form" className="section-shell pb-20">
        <MentorshipForm />
      </section>

      <Footer />
    </main>
  );
}
