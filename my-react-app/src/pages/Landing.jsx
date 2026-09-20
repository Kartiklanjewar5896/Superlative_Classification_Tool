import { ArrowRight, Database, Cpu, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* Navbar */}
      <header className="h-16 bg-white border-b border-[#E2E8F0] flex items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-semibold text-sm">
            SC
          </div>

          <span className="font-semibold text-[#0F172A]">
            Superlative Classification
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#2563EB]"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 bg-[#2563EB] text-white text-sm font-medium rounded-lg hover:bg-[#1E40AF] transition"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="max-w-6xl mx-auto px-6 lg:px-10 pt-20 pb-16 text-center">

          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-sm font-medium">
            AI-Powered Classification Platform
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A]">
            Intelligent
            <span className="text-[#2563EB]"> Classification </span>
            Made Simple
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-[#64748B] leading-relaxed">
            Upload your dataset, configure a classification model, run the
            analysis, and understand your results through a simple platform.
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">

            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-medium rounded-lg hover:bg-[#1E40AF] transition"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#E2E8F0] text-[#0F172A] font-medium rounded-lg hover:bg-[#F8FAFC] transition"
            >
              Sign In
            </Link>

          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-20">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Dataset */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                <Database className="w-5 h-5 text-[#2563EB]" />
              </div>

              <h3 className="mt-4 font-semibold text-[#0F172A]">
                Dataset Management
              </h3>

              <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                Upload and organize datasets ready for classification.
              </p>
            </div>

            {/* Machine Learning */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[#2563EB]" />
              </div>

              <h3 className="mt-4 font-semibold text-[#0F172A]">
                Machine Learning
              </h3>

              <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                Configure classification algorithms and run ML operations.
              </p>
            </div>

            {/* Results */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#2563EB]" />
              </div>

              <h3 className="mt-4 font-semibold text-[#0F172A]">
                Results & Reports
              </h3>

              <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                Analyze model performance and access classification reports.
              </p>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E2E8F0] bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-6 text-center text-sm text-[#64748B]">
          Superlative Classification Tool · v0.1.0
        </div>
      </footer>

    </div>
  );
}