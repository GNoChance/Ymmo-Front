export default function Footer() {
  return (
    <footer
      className="py-10 mt-10"
      style={{
        background: "#1a1a2e",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "#e8c547" }}
          >
            <span
              style={{
                color: "#1a1a2e",
                fontWeight: 900,
                fontSize: "13px",
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Y
            </span>
          </div>
          <span
            style={{
              color: "white",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
            }}
          >
            Ymmo
          </span>
        </div>

        {/* Copyright */}
        <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "12px" }}>
          © 2025 Ymmo – Groupe Immobilier Français
        </p>

        {/* Links */}
        <div className="flex gap-6">
          {["Mentions légales", "Confidentialité", "Contact"].map((l) => (
            <a
              key={l}
              href="#"
              style={{
                color: "rgba(255,255,255,0.33)",
                fontSize: "12px",
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}