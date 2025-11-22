import Layout from "@/components/Layout";
import {
  Sparkles,
  Zap,
  Code2,
  Image,
  BookOpen,
  Users,
  ArrowRight,
} from "lucide-react";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <GoalSection />
      <EventsSection />
      <WorkshopSection />
      <StrategicAimSection />
      <ParticipantInstructionsSection />
      <ContactSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-3 md:px-4">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10" />

      <div className="container max-w-4xl text-center">
        <div className="inline-block mb-4 sm:mb-5 md:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 border border-primary/50 animate-fade-in-down">
          <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-primary">
            ✨ The New Generation of Intelligent Creativity
          </p>
        </div>

        <div
          className="mb-2 sm:mb-3 md:mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <p className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 sm:mb-2">
            MYSTIC SUMMIT
          </p>
        </div>

        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            PROMPTATHON
          </span>
        </h1>

        <div
          className="mb-4 sm:mb-5 md:mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-2 sm:mb-3">
            Code. Create. Conquer.
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Conducted by the students of ECE 2
          </p>
        </div>

        <p
          className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground max-w-3xl mx-auto mb-5 sm:mb-7 md:mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Join us for an incredible journey into the world of AI prompting and
          prompt engineering. Learn to communicate with AI systems, showcase
          your creativity, and master the art of intelligent prompting.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#events"
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 duration-300 text-xs sm:text-sm md:text-base"
          >
            Explore Events <ArrowRight className="w-3.5 sm:w-4 md:w-5 h-3.5 sm:h-4 md:h-5" />
          </a>
          <a
            href="#contact"
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs sm:text-sm md:text-base"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

function GoalSection() {
  return (
    <section id="about" className="py-10 sm:py-14 md:py-20 px-2 sm:px-3 md:px-4 bg-card">
      <div className="container max-w-4xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Goal
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming the way students interact with AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div
            className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-primary">
              Spread Awareness
            </h3>
            <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
              Our primary goal is to spread awareness about AI prompting and
              prompt engineering, enabling every student to understand how to
              use AI effectively and creatively.
            </p>
          </div>

          <div
            className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 hover:border-secondary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-secondary">
              Teach Practical Skills
            </h3>
            <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
              We teach students how to communicate effectively with AI systems
              through structured prompting and apply these skills in practical
              problem-solving, design, and coding tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section id="events" className="py-10 sm:py-14 md:py-20 px-2 sm:px-3 md:px-4">
      <div className="container max-w-5xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Events
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
            Two exciting competitions to showcase your AI creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Event 1: See It Say It Get It */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <EventCard
              icon={<Image className="w-8 h-8" />}
              title="See It Say It Get It"
              subtitle="AI Image Generation Competition"
              description="Recreate displayed images using a single prompt in AI tool selected by hosts. Two images will be shown with 5 minutes given for each. The image that matches most accurately wins."
              color="from-primary"
            />
          </div>

          {/* Event 2: Codesmith's Arena */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <EventCard
              icon={<Code2 className="w-8 h-8" />}
              title="Codesmith's Arena"
              subtitle="AI-Assisted Coding Challenge"
              description="Create something original using only AI and your prompts. You'll have 30 minutes to use any AI of your choice. The entry with the best idea and fewest prompts used will win."
              color="from-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function EventCard({
  icon,
  title,
  subtitle,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}) {
  return (
    <div className="group h-full">
      <div
        className={`h-full p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl bg-gradient-to-br ${color}/10 to-accent/5 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:-translate-y-2`}
      >
        <div
          className={`inline-block p-3 sm:p-4 rounded-lg bg-gradient-to-br ${color} to-secondary text-white mb-4 sm:mb-5 md:mb-6 transition-all duration-300 group-hover:scale-110`}
        >
          {icon}
        </div>

        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1.5 sm:mb-2 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-primary font-semibold mb-2 sm:mb-3 md:mb-4">
          {subtitle}
        </p>
        <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="mt-3 sm:mt-4 md:mt-6 flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all duration-300 text-xs sm:text-sm">
          Learn more
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
}

function WorkshopSection() {
  return (
    <section
      id="workshop"
      className="py-10 sm:py-14 md:py-20 px-2 sm:px-3 md:px-4 bg-gradient-to-br from-primary/5 to-secondary/5"
    >
      <div className="container max-w-4xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI Prompting Workshop
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
            Ignite Knowledge On AI Prompting
          </p>
        </div>

        <div
          className="bg-card rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
            <BookOpen className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Future's Blueprint</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg">
                We'll conduct a short, interactive session on AI prompting and
                prompt engineering to help participants understand the
                fundamentals before the competition.
              </p>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6 md:mt-8">
            <div
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 transform hover:translate-x-1 hover:shadow-md animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Practical Examples</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  See how prompt engineering enhances productivity in software
                  development, design, education, and data analysis.
                </p>
              </div>
            </div>

            <div
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 transform hover:translate-x-1 hover:shadow-md animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Interactive Learning</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Engage with real-world scenarios and hands-on exercises to
                  master AI prompting techniques.
                </p>
              </div>
            </div>

            <div
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 transform hover:translate-x-1 hover:shadow-md animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Users className="w-5 sm:w-6 h-5 sm:h-6 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Community Learning</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Learn alongside your peers and discover innovative approaches
                  to prompt crafting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StrategicAimSection() {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-2 sm:px-3 md:px-4">
      <div className="container max-w-4xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Strategic Aim
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <AimCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Spread Awareness"
              description="About AI, prompting, and prompt engineering across the entire campus community."
            />
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <AimCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Build Understanding"
              description="Ensure every participant understands the essentials of effective prompting techniques."
            />
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <AimCard
              icon={<Zap className="w-8 h-8" />}
              title="Showcase Creativity"
              description="Bring together students from all departments to showcase their AI creativity and innovation."
            />
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <AimCard
              icon={<Code2 className="w-8 h-8" />}
              title="Craft Precise Prompts"
              description="Train students in crafting precise, high-impact prompts for image generation, coding, and automation."
            />
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <AimCard
              icon={<Users className="w-8 h-8" />}
              title="AI Literacy"
              description="Develop AI literacy across campus so students use AI as a productive tool, not just a gimmick."
            />
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <AimCard
              icon={<Image className="w-8 h-8" />}
              title="Practical Application"
              description="Enable students to apply AI prompting skills to real-world problems and creative projects."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AimCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1">
      <div className="text-primary mb-2.5 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110 w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8">
        {icon}
      </div>
      <h3 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base md:text-lg transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function ParticipantInstructionsSection() {
  return (
    <section id="participant-instructions" className="py-10 sm:py-14 md:py-20 px-2 sm:px-3 md:px-4 bg-card">
      <div className="container max-w-4xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Participant Instructions
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
            Here's what you need to know to participate
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div
            className="space-y-3 sm:space-y-4 md:space-y-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="hover:bg-muted/50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xs sm:text-sm transition-all duration-300 group-hover:scale-125 flex-shrink-0">
                  1
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">See It Say It Get It</h3>
              </div>
              <p className="text-muted-foreground ml-9 sm:ml-10 mb-2.5 sm:mb-3 md:mb-4 text-xs sm:text-sm">
                AI Image Generation Competition
              </p>
              <ul className="ml-9 sm:ml-10 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex gap-2 transition-all duration-300 hover:translate-x-1">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>
                    Recreate the displayed image using a single prompt
                  </span>
                </li>
                <li className="flex gap-2 transition-all duration-300 hover:translate-x-1">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Two images will be shown with 5 minutes each</span>
                </li>
                <li className="flex gap-2 transition-all duration-300 hover:translate-x-1">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Use the AI tool selected by the hosts</span>
                </li>
                <li className="flex gap-2 transition-all duration-300 hover:translate-x-1">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>The image matching most accurately wins</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="space-y-3 sm:space-y-4 md:space-y-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="hover:bg-muted/50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-white font-bold text-xs sm:text-sm transition-all duration-300 group-hover:scale-125 flex-shrink-0">
                  2
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Codesmith's Arena</h3>
              </div>
              <p className="text-muted-foreground ml-9 sm:ml-10 mb-2.5 sm:mb-3 md:mb-4 text-xs sm:text-sm">
                Vibe Coding Challenge
              </p>
              <ul className="ml-9 sm:ml-10 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex gap-2 transition-all duration-300 hover:translate-x-1">
                  <span className="text-secondary flex-shrink-0">•</span>
                  <span>
                    Create something original using AI and your prompts
                  </span>
                </li>
                <li className="flex gap-2 transition-all duration-300 hover:translate-x-1">
                  <span className="text-secondary flex-shrink-0">•</span>
                  <span>You'll have 30 minutes to complete the task</span>
                </li>
                <li className="flex gap-2 transition-all duration-300 hover:translate-x-1">
                  <span className="text-secondary flex-shrink-0">•</span>
                  <span>Use any AI of your choice</span>
                </li>
                <li className="flex gap-2 transition-all duration-300 hover:translate-x-1">
                  <span className="text-secondary flex-shrink-0">•</span>
                  <span>Winner: Best idea with fewest prompts used</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-10 sm:py-14 md:py-20 px-2 sm:px-3 md:px-4">
      <div className="container max-w-3xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Join Us
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
            Be part of the AI revolution at SRM Valliammai Engineering College
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div
            className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 text-center hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="inline-block p-3 sm:p-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110">
              <Users className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2">Contact Us</h3>
            <p className="text-muted-foreground mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm md:text-base">
              Reach out for any queries or registrations
            </p>
            <a
              href="tel:+918015885707"
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base"
            >
              +91-8015885707
            </a>
          </div>

          <div
            className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 text-center hover:border-secondary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="inline-block p-3 sm:p-4 rounded-lg bg-gradient-to-r from-secondary to-accent text-white mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110">
              <Sparkles className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2">Event Details</h3>
            <p className="text-muted-foreground mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm md:text-base">
              Location and timing will be announced soon
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Stay tuned for updates!
            </p>
          </div>
        </div>

        <div
          className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl bg-card border border-border text-center hover:border-border/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
            SRM Valliammai Engineering College
          </h3>
          <p className="text-muted-foreground mb-1.5 sm:mb-2 text-xs sm:text-sm">
            Department of Electronics and Communication Engineering
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm">Conducted by ECE 2 Batch</p>
        </div>
      </div>
    </section>
  );
}
