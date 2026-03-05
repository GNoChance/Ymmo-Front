import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between"
      style={{
        background: "rgba(10,10,20,0.88)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: "#e8c547" }}
        >
          <span
            style={{
              color: "#1a1a2e",
              fontWeight: 900,
              fontSize: "15px",
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
            fontSize: "20px",
            fontWeight: 600,
            letterSpacing: "0.04em",
          }}
        >
          Ymmo
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        {["Acheter", "Louer", "Vendre", "Agences", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              fontSize: "14px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "white")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          style={{
            color: "rgba(255,255,255,0.65)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "12px",
            padding: "8px 16px",
            fontSize: "13px",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          Connexion
        </button>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          style={{
            background: "#e8c547",
            color: "#1a1a2e",
            borderRadius: "12px",
            padding: "8px 16px",
            fontSize: "13px",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          Estimer
        </motion.button>
      </div>
    </motion.nav>
  );
}