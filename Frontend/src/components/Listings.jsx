import { motion } from "framer-motion";
import PropertyCard from "./Propertycard";

const filters = ["Tous", "Résidentiel", "Professionnel"];
const types = ["Tous", "Vente", "Location"];

export default function Listings({ properties, activeFilter, setActiveFilter, activeType, setActiveType }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p
            style={{
              color: "#b07d52",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              marginBottom: "8px",
            }}
          >
            NOS BIENS
          </p>
          <h2
            style={{
              color: "#1a1a2e",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.5rem",
              fontWeight: 700,
            }}
          >
            Biens disponibles
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                background: activeFilter === f ? "#1a1a2e" : "white",
                color: activeFilter === f ? "white" : "#6b6b7b",
                border: `1.5px solid ${activeFilter === f ? "#1a1a2e" : "#e0e0ea"}`,
                borderRadius: "12px",
                padding: "8px 16px",
                fontSize: "13px",
                cursor: "pointer",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
            >
              {f}
            </button>
          ))}
          <div style={{ width: "1px", background: "#e0e0ea", margin: "0 4px" }} />
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              style={{
                background: activeType === t ? "#b07d52" : "white",
                color: activeType === t ? "white" : "#6b6b7b",
                border: `1.5px solid ${activeType === t ? "#b07d52" : "#e0e0ea"}`,
                borderRadius: "12px",
                padding: "8px 16px",
                fontSize: "13px",
                cursor: "pointer",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p style={{ color: "#9a9aaa", fontSize: "13px", marginBottom: "24px" }}>
        {properties.length} bien{properties.length > 1 ? "s" : ""} trouvé{properties.length > 1 ? "s" : ""}
      </p>

      {/* Grid */}
      {properties.length === 0 ? (
        <div className="text-center py-24">
          <p style={{ color: "#9a9aaa", fontSize: "18px" }}>
            Aucun bien ne correspond à votre recherche.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {properties.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-14">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: "#1a1a2e",
            color: "white",
            border: "none",
            borderRadius: "16px",
            padding: "16px 32px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 8px 30px rgba(26,26,46,0.25)",
          }}
        >
          Voir tous les biens →
        </motion.button>
      </div>
    </section>
  );
}