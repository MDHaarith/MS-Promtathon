import Layout from "@/components/Layout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GOOGLE_FORM_ID = "1FAIpQLSfMtWEdU0ZUx0gP0RkkPIiA20M12710F321l3_1qCZ2movcgQ";

const sections = ["1", "2", "3"];
const departments = [
  "Electronics and Communication Engineering",
  "Computer Science and Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Other",
];

interface Member {
  name: string;
  email: string;
  regNo: string;
  department: string;
  section: string;
}

interface MemberFormSectionProps {
  memberNum: 1 | 2;
  data: Member;
  onInputChange: (
    memberNum: "member1" | "member2",
    field: keyof Member,
    value: string
  ) => void;
}

function MemberFormSection({ memberNum, data, onInputChange }: MemberFormSectionProps) {
  const memberKey = memberNum === 1 ? "member1" : "member2";

  return (
    <div className="p-4 sm:p-6 rounded-lg border border-primary/20 bg-primary/5">
      <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-primary">Member {memberNum}</h3>

      <div className="space-y-3 sm:space-y-4">
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
            value={data.name}
            onChange={(e) =>
              onInputChange(memberKey as "member1" | "member2", "name", e.target.value)
            }
            placeholder="Enter full name"
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
            value={data.email}
            onChange={(e) =>
              onInputChange(memberKey as "member1" | "member2", "email", e.target.value)
            }
            placeholder="email@example.com"
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
            value={data.regNo}
            onChange={(e) =>
              onInputChange(memberKey as "member1" | "member2", "regNo", e.target.value)
            }
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
            value={data.department}
            onChange={(e) =>
              onInputChange(
                memberKey as "member1" | "member2",
                "department",
                e.target.value
              )
            }
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
            value={data.section}
            onChange={(e) =>
              onInputChange(memberKey as "member1" | "member2", "section", e.target.value)
            }
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
      </div>
    </div>
  );
}

export default function CodesmitersArenaForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    member1: {
      name: "",
      email: "",
      regNo: "",
      department: "",
      section: "",
    } as Member,
    member2: {
      name: "",
      email: "",
      regNo: "",
      department: "",
      section: "",
    } as Member,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = useCallback(
    (
      memberNum: "member1" | "member2",
      field: keyof Member,
      value: string
    ) => {
      setFormData((prev) => ({
        ...prev,
        [memberNum]: {
          ...prev[memberNum],
          [field]: value,
        },
      }));
      setError("");
    },
    []
  );

  const formatName = (name: string): string => {
    return name.trim().toUpperCase();
  };

  const validateMember = (member: Member, memberNum: number): boolean => {
    if (!member.name.trim()) {
      setError(`Member ${memberNum} name is required`);
      return false;
    }
    if (!member.email.trim()) {
      setError(`Member ${memberNum} email is required`);
      return false;
    }
    if (!member.email.includes("@")) {
      setError(`Member ${memberNum} email is invalid`);
      return false;
    }
    if (!member.regNo.trim()) {
      setError(`Member ${memberNum} registration number is required`);
      return false;
    }
    if (!member.department) {
      setError(`Member ${memberNum} department is required`);
      return false;
    }
    if (!member.section) {
      setError(`Member ${memberNum} section is required`);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateMember(formData.member1, 1)) return;
    if (!validateMember(formData.member2, 2)) return;

    setIsSubmitting(true);

    try {
      const formattedMember1Name = formatName(formData.member1.name);
      const formattedMember2Name = formatName(formData.member2.name);

      const submitData = new FormData();
      submitData.append("entry.1884265043", formattedMember1Name); // Member 1 Name
      submitData.append("entry.551813573", formData.member1.email); // Member 1 Email
      submitData.append("entry.513669972", formData.member1.regNo); // Member 1 Reg No
      submitData.append("entry.85602000", formData.member1.department); // Member 1 Department
      submitData.append("entry.1212348438", formData.member1.section); // Member 1 Section
      submitData.append("entry.994293442", formattedMember2Name); // Member 2 Name
      submitData.append("entry.258782101", formData.member2.email); // Member 2 Email
      submitData.append("entry.1696388815", formData.member2.regNo); // Member 2 Reg No
      submitData.append("entry.318312040", formData.member2.department); // Member 2 Department
      submitData.append("entry.1521586158", formData.member2.section); // Member 2 Section

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
              Codesmith's Arena
            </h1>
            <p className="text-xs sm:text-sm md:text-lg text-muted-foreground">
              AI-Assisted Coding Challenge Registration - Team of 2
            </p>
          </div>

          <div className="bg-card rounded-lg sm:rounded-xl border border-primary/20 p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 md:space-y-8">
              {error && (
                <div className="p-3 sm:p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 text-sm sm:text-base">
                  {error}
                </div>
              )}

              <MemberFormSection memberNum={1} data={formData.member1} />
              <MemberFormSection memberNum={2} data={formData.member2} />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {isSubmitting ? "Submitting..." : "Submit Team Registration"}
                {!isSubmitting && <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
