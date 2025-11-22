import Layout from "@/components/Layout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GOOGLE_FORM_ID = "1FAIpQLSe8UNU5n8ok9tCuF7wRHdyaR3lI6hHvV-0Gw78OeD7c9GMxzQ";
const FORM_ENTRY_ID_NAME = "entry.123456789"; // Update with actual form field ID
const FORM_ENTRY_ID_EMAIL = "entry.123456790"; // Update with actual form field ID
const FORM_ENTRY_ID_REG = "entry.123456791"; // Update with actual form field ID
const FORM_ENTRY_ID_DEPT = "entry.123456792"; // Update with actual form field ID
const FORM_ENTRY_ID_SECTION = "entry.123456793"; // Update with actual form field ID
const FORM_ENTRY_ID_EVENT = "entry.123456794"; // Update with actual form field ID

const sections = ["A", "B", "C", "D", "E", "F"];
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const formatName = (name: string): string => {
    const trimmed = name.trim();
    if (trimmed.length === 0) return "";
    const parts = trimmed.split(" ");
    const lastName = parts[parts.length - 1];
    const firstLetter = lastName.charAt(0).toUpperCase();
    const restOfName = parts.slice(0, -1).join(" ").toUpperCase();
    return `${restOfName} ${firstLetter}`.trim();
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
      submitData.append(FORM_ENTRY_ID_EVENT, "See It Say It Get It");

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
      <section className="min-h-[calc(100vh-80px)] pt-20 pb-10 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10" />

        <div className="container max-w-2xl">
          <button
            onClick={() => navigate("/register")}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Events
          </button>

          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              See It Say It Get It
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              AI Image Generation Competition Registration
            </p>
          </div>

          <div className="bg-card rounded-xl border border-primary/20 p-8 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-muted-foreground mb-3">
                  Format: Your Name will be converted to CAPITAL FORMAT WITH INITIAL AT LAST
                  (e.g., "John Doe" becomes "JOHN D")
                </p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Registration Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="regNo"
                  value={formData.regNo}
                  onChange={handleInputChange}
                  placeholder="e.g., RA2301001010010"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Department <span className="text-red-500">*</span>
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Section <span className="text-red-500">*</span>
                </label>
                <select
                  name="section"
                  value={formData.section}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
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
                className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Note:</span> Your
              registration will be submitted to our secure form system. You'll
              receive a confirmation email shortly.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
