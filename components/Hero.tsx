import Image from "next/image";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="section-shell section-space relative overflow-hidden pt-14 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-hero-grid" />
      <div className="absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute -left-24 bottom-10 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-7">
          <p className="chip animate-floatUp">Mentor • Strategist • Academic Guide</p>
          <h1 className="animate-floatUp font-[var(--font-display)] text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Anjali Mehta
            <span className="mt-3 block text-2xl font-medium text-ink sm:text-3xl">
              Mentor for MBA Careers, Startups, Research &amp; PhD Guidance
            </span>
          </h1>
          <p className="max-w-2xl animate-floatUp text-base leading-relaxed text-muted sm:text-lg">
            Helping ambitious students and early-stage professionals build meaningful careers, launch stronger startups,
            publish better research, and make confident academic decisions.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTAButton href="#mentorship-form">Book a Mentorship Call</CTAButton>
            <CTAButton href="#services" variant="secondary">
              Explore Services
            </CTAButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:justify-self-end">
          <div className="surface-card fancy-ring overflow-hidden p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-b from-[#f3ede2] to-[#efe6d8]">
              <Image
                src="/images/anjali-mehta.jpg"
                alt="Anjali Mehta portrait"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
            <div className="p-3 pb-2">
              <p className="text-sm font-semibold text-navy">Marketing Professional | Mentor | Research Guide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
