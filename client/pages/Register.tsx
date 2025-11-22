import Layout from "@/components/Layout";
import { Image, Code2, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe8UNU5n8ok9tCuF7wRHdyaR3lI6hHvV-0Gw78OeD7c9GMxzQ/viewform";

export default function Register() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const showSuccess = searchParams.get("success") === "true";
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  return (
    <Layout>
      <section className="min-h-[calc(100vh-80px)] pt-10 sm:pt-14 md:pt-20 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-3 md:px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10" />

        <div className="container max-w-5xl">
          {showSuccess && (
            <div className="mb-8 sm:mb-10 md:mb-12 p-3 sm:p-4 md:p-6 rounded-xl bg-green-500/10 border border-green-500/30 flex items-start gap-3 animate-fade-in-up">
              <CheckCircle className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-green-600 mb-0.5 sm:mb-1 text-sm sm:text-base">Registration Successful!</h3>
                <p className="text-xs sm:text-sm text-green-600/90">
                  Thank you for registering. We've received your submission and will send you a confirmation email shortly.
                </p>
              </div>
            </div>
          )}

          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Register for PROMPTATHON
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose an event to register and showcase your AI skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {/* Event 1: See It Say It Get It */}
            <EventRegistrationCard
              icon={<Image className="w-8 h-8" />}
              title="See It Say It Get It"
              subtitle="AI Image Generation Competition"
              description="Recreate displayed images using a single prompt in AI tool selected by hosts. Two images will be shown with 5 minutes given for each. The image that matches most accurately wins."
              color="from-primary"
              isSelected={selectedEvent === "see-it-say-it"}
              onSelect={() => setSelectedEvent("see-it-say-it")}
              onRegister={() => navigate("/register/see-it-say-it")}
            />

            {/* Event 2: Codesmith's Arena */}
            <EventRegistrationCard
              icon={<Code2 className="w-8 h-8" />}
              title="Codesmith's Arena"
              subtitle="AI-Assisted Coding Challenge"
              description="Create something original using only AI and your prompts. You'll have 30 minutes to use any AI of your choice. The entry with the best idea and fewest prompts used will win."
              color="from-secondary"
              isSelected={selectedEvent === "codesmith"}
              onSelect={() => setSelectedEvent("codesmith")}
              onRegister={() => navigate("/register/codesmiths-arena")}
            />
          </div>

          {selectedEvent && (
            <div className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl bg-card border-2 border-primary/50 text-center animate-fade-in-up">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">Ready to Register?</h2>
              <p className="text-muted-foreground mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm md:text-base">
                Fill out your details on the next page to complete your registration
              </p>
              <button
                onClick={() => {
                  if (selectedEvent === "see-it-say-it") {
                    navigate("/register/see-it-say-it");
                  } else if (selectedEvent === "codesmith") {
                    navigate("/register/codesmiths-arena");
                  }
                }}
                className="inline-flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-all transform hover:scale-105 hover:shadow-lg text-xs sm:text-sm md:text-base"
              >
                Continue to Registration <ArrowRight className="w-3.5 sm:w-4 md:w-5 h-3.5 sm:h-4 md:h-5" />
              </button>
            </div>
          )}

          <div className="mt-12 sm:mt-14 md:mt-16 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-6">Important Information</h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-1.5 sm:mb-2">Eligibility</h4>
                <p>
                  All students are welcome to participate. No prior AI
                  experience required.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1.5 sm:mb-2">When</h4>
                <p>
                  Location and timing will be announced soon. Stay tuned for
                  updates!
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1.5 sm:mb-2">Contact</h4>
                <p>
                  Have questions? Reach out at +91-8015885707 or
                  mohamedhaarith239@gmail.com
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1.5 sm:mb-2">
                  Organization
                </h4>
                <p>
                  Conducted by the Department of Electronics and Communication
                  Engineering, ECE 2 Batch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function EventRegistrationCard({
  icon,
  title,
  subtitle,
  description,
  color,
  isSelected,
  onSelect,
  onRegister,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  isSelected: boolean;
  onSelect: () => void;
  onRegister: () => void;
}) {
  return (
    <div className="group h-full animate-fade-in-up">
      <div
        className={`h-full p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl bg-gradient-to-br ${color}/10 to-accent/5 border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg hover:-translate-y-2 ${
          isSelected
            ? "border-primary/80 shadow-lg scale-105"
            : "border-primary/20 hover:border-primary/50"
        }`}
        onClick={onSelect}
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
        <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-5 md:mb-6">
          {description}
        </p>

        {isSelected && (
          <button
            onClick={onRegister}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-primary/20 text-xs sm:text-sm"
          >
            Register for this event
            <ArrowRight className="w-3.5 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        )}

        {!isSelected && (
          <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all duration-300 text-xs sm:text-sm">
            Select Event
            <ArrowRight className="w-3.5 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        )}
      </div>
    </div>
  );
}
