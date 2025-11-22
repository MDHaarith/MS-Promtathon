import Layout from "@/components/Layout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GOOGLE_FORM_ID = "1FAIpQLScinbo3nP8RAKPUaq4pVRHxiaQwhg0WM65B6ywcxwOt5oncoA";
const FORM_ENTRY_ID_NAME = "entry.1884265043";
const FORM_ENTRY_ID_EMAIL = "entry.1839467031";
const FORM_ENTRY_ID_REG = "entry.1195877935";
const FORM_ENTRY_ID_DEPT = "entry.513669972";
const FORM_ENTRY_ID_SECTION = "entry.1212348438";

const sections = ["1", "2", "3"];
const departments = [
  "Electronics and Communication Engineering",
  "Computer Science and Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Other",
];

export default function SeeItSayItForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    regNo: "",
    department: "",
    section: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      setError("");
    },
    []
  );

  const formatName = (name: string): string => {
    return name.trim().toUpperCase();
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email");
      return false;
    }
    if (!formData.regNo.trim()) {
      setError("Registration number is required");
      return false;
    }
    if (!formData.department) {
      setError("Department is required");
      return false;
    }
    if (!formData.section) {
      setError("Section is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formattedName = formatName(formData.name);

      const submitData = new FormData();
      submitData.append(FORM_ENTRY_ID_NAME, formattedName);
      submitData.append(FORM_ENTRY_ID_EMAIL, formData.email);
      submitData.append(FORM_ENTRY_ID_REG, formData.regNo);
      submitData.append(FORM_ENTRY_ID_DEPT, formData.department);
      submitData.append(FORM_ENTRY_ID_SECTION, formData.section);

      await fetch(
        `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`,
        {
          method: "POST",
          body: submitData,
          mode: "no-cors",
        }
      );

      setTimeout(() => {
        navigate("/register?success=true");
      }, 1000);
    } catch (err) {
      setError("Failed to submit form. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="w-full relative pt-6 sm:pt-10 md:pt-20 pb-10 px-3 sm:px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-x-hidden" style={{minHeight: 'auto'}}>

        <div className="w-full max-w-2xl mx-auto relative z-20">
          <button
            onClick={() => navigate("/register")}
            className="inline-flex items-center gap-1 sm:gap-2 text-primary hover:text-primary/80 transition-colors mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Back to Events
          </button>

          <div className="mb-6 sm:mb-10 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              See It Say It Get It
            </h1>
            <p className="text-xs sm:text-sm md:text-lg text-muted-foreground">
              AI Image Generation Competition Registration
            </p>
          </div>

          <div className="bg-card rounded-lg sm:rounded-xl border border-primary/20 p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative z-10">
              {error && (
                <div className="p-3 sm:p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 text-sm sm:text-base">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-muted-foreground mb-2 sm:mb-3">
                  Format: Your Name will be converted to CAPITAL FORMAT WITH INITIAL AT LAST
                  (e.g., "Navin Kumar K" becomes "NAVIN KUMAR K")
                </p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  spellCheck="false"
                  inputMode="text"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colors text-base [-webkit-appearance:none]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  inputMode="email"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colors text-base [-webkit-appearance:none]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                  Registration Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="regNo"
                  value={formData.regNo}
                  onChange={handleInputChange}
                  placeholder="e.g., 14222510XXXX"
                  autoComplete="off"
                  inputMode="numeric"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colors text-base [-webkit-appearance:none]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                  Department <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  placeholder="Enter department"
                  autoComplete="off"
                  inputMode="text"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colors text-base [-webkit-appearance:none]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                  Section <span className="text-red-500">*</span>
                </label>
                <select
                  name="section"
                  value={formData.section}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colors text-base appearance-none cursor-pointer [-webkit-appearance:none]"
                  required
                >
                  <option value="">Select Section</option>
                  {sections.map((section) => (
                    <option key={section} value={section}>
                      Section {section}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
                {!isSubmitting && <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />}
              </button>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  );
}
