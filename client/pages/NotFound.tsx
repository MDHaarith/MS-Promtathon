import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-6">
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              404
            </h1>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            Oops! The page you're looking for doesn't exist. Don't worry, let's
            get you back to exploring the PROMPTATHON event.
          </p>

          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-all transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
