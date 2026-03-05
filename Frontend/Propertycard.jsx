import { motion } from "framer-motion";
import { formatPrice } from "../utils/formatPrice";

export default function PropertyCard({ property, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
      className="bg-white rounded-2xl overflow-hidden cursor-pointer"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "210px" }}>
        <motion.img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.5 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)" }}
        />
        <span
          className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full"
          style={{
            background: property.type === "Vente" ? "#1a1a2e" : "#b07d52",
            color: "white",
          }}
        >
          {property.type}
        </span>
        {property.tag && (
          <span
            className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: "#e8c547", color: "#1a1a2e" }}
          >
            {property.tag}
          </span>
        )}
        <span
          className="absolute bottom-3 right-3 text-sm font-bold px-3 py-1 rounded-xl"
          style={{ background: "rgba(255,255,255,0.95)", color: "#1a1a2e" }}
        >
          {formatPrice(property.price, property.type)}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="font-bold text-lg mb-1 truncate"
          style={{ color: "#1a1a2e", fontFamily: "'Cormorant Garamond', serif" }}
        >
          {property.title}
        </h3>
        <p className="text-sm mb-4 flex items-center gap-1" style={{ color: "#9a9aaa" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {property.location}
        </p>
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: "1px solid #f0f0f8" }}
        >
          <div className="flex gap-4">
            <span className="text-xs flex items-center gap-1" style={{ color: "#7a7a8a" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              {property.rooms} pièces
            </span>
            <span className="text-xs flex items-center gap-1" style={{ color: "#7a7a8a" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              {property.surface} m²
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs font-semibold px-4 py-2 rounded-xl"
            style={{ background: "#1a1a2e", color: "white", border: "none", cursor: "pointer" }}
          >
            Voir →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}