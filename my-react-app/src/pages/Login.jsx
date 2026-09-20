import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail, ArrowLeft } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No account found. Please create an account first.");
      return;
    }

    if (
      storedUser.email !== email ||
      storedUser.password !== password
    ) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        name: storedUser.name,
        email: storedUser.email,
        role: storedUser.role,
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-semibold">
              SC
            </div>

            <span className="font-semibold text-[#0F172A]">
              Superlative Classification
            </span>
          </Link>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 shadow-sm">

          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-[#0F172A]">
              Welcome back
            </h1>

            <p className="mt-1 text-sm text-[#64748B]">
              Sign in to your classification platform.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-[#E2E8F0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#DBEAFE] focus:border-[#2563EB]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-2.5 border border-[#E2E8F0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#DBEAFE] focus:border-[#2563EB]"
                />
              </div>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-[#64748B]">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-[#CBD5E1]"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-[#2563EB] hover:text-[#1E40AF] font-medium"
              >
                Forgot password?
              </button>

            </div>

            {/* Error */}
            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            {/* Login */}
            <button
              type="submit"
              className="w-full py-2.5 bg-[#2563EB] text-white text-sm font-medium rounded-lg hover:bg-[#1E40AF] transition"
            >
              Sign In
            </button>

          </form>

          {/* Register */}
          <p className="mt-6 text-center text-sm text-[#64748B]">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-[#2563EB] hover:text-[#1E40AF]"
            >
              Create account
            </Link>
          </p>
        </div>

        {/* Back */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#2563EB]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>

      </div>
    </div>
  );
}