import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next = {};
    if (!email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email";
    if (!password) next.password = "Password is required";
    else if (password.length < 6)
      next.password = "Must be at least 6 characters";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div
      style={{
        minHeight: "600px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at 20% 20%, #2E1065 0%, #120826 45%, #0A0614 100%)",
        fontFamily:
          "'Poppins', 'Segoe UI', system-ui, -apple-system, sans-serif",
        padding: "40px 16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "20px",
          padding: "36px 32px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            background: "linear-gradient(135deg, #A78BFA, #6D28D9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            boxShadow: "0 8px 20px rgba(109,40,217,0.5)",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L3 7v6c0 5 4 9 9 9s9-4 9-9V7l-9-5z"
              stroke="#fff"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M9 12l2 2 4-4"
              stroke="#fff"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1
          style={{
            color: "#fff",
            fontSize: "24px",
            fontWeight: 600,
            margin: "0 0 6px",
          }}
        >
          Welcome back
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "14px",
            margin: "0 0 28px",
          }}
        >
          Sign in to continue to your account
        </p>

        {submitted ? (
          <div
            style={{
              background: "rgba(74,222,128,0.12)",
              border: "1px solid rgba(74,222,128,0.35)",
              borderRadius: "12px",
              padding: "16px",
              color: "#86EFAC",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Logged in successfully (practice demo) ✓
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setEmail("");
                  setPassword("");
                }}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "13px",
                }}
              >
                Try again
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "13px",
                  marginBottom: "6px",
                }}
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "11px 14px",
                  borderRadius: "10px",
                  border: errors.email
                    ? "1px solid #F87171"
                    : "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
              {errors.email && (
                <div
                  style={{ color: "#F87171", fontSize: "12px", marginTop: "5px" }}
                >
                  {errors.email}
                </div>
              )}
            </div>

            {/* Password */}
            <div style={{ marginBottom: "12px" }}>
              <label
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "13px",
                  marginBottom: "6px",
                }}
              >
                Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "11px 44px 11px 14px",
                    borderRadius: "10px",
                    border: errors.password
                      ? "1px solid #F87171"
                      : "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.06)",
                    color: "#fff",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    color: "rgba(255,255,255,0.55)",
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <div
                  style={{ color: "#F87171", fontSize: "12px", marginTop: "5px" }}
                >
                  {errors.password}
                </div>
              )}
            </div>

            {/* Remember + forgot */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "6px 0 22px",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  style={{ accentColor: "#8B5CF6" }}
                />
                Remember me
              </label>
              <span style={{ color: "#A78BFA", fontSize: "13px", cursor: "pointer" }}>
                Forgot password?
              </span>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                background: "linear-gradient(135deg, #A78BFA, #6D28D9)",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 10px 24px rgba(109,40,217,0.4)",
              }}
            >
              Sign in
            </button>

            <p
              style={{
                textAlign: "center",
                color: "rgba(255,255,255,0.5)",
                fontSize: "13px",
                marginTop: "20px",
              }}
            >
              Don't have an account?{" "}
              <span style={{ color: "#A78BFA", cursor: "pointer" }}>Sign up</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
