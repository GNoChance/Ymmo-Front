import { useState } from "react";
import { motion } from "framer-motion";
import ContainerScroll from "./ContainerScroll";
import { properties } from "../data/properties";
import { formatPrice } from "../utils/formatPrice";

const stats = [
  { value: "12", label: "Agences" },
  { value: "1 200+", label: "Biens" },
  { value: "8 400+", label: "Clients" },
  { value: "15 ans", label: "Expérience" },
];

export default function Hero({ activeType, setActiveType, search, setSearch }) {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #0d0d1a 0%, #1a1a2e 55%, #0f2a4a 100%)",
        paddingTop: "80px",
      }}
    >
      <ContainerScroll
        titleComponent={
          <div className="px-4">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(232,197,71,0.1)",
                border: "1px solid rgba(232,197,71,0.3)",
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "#e8c547" }} />
              <span
                style={{
                  color: "#e8c547",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                }}
              >
                GROUPE IMMOBILIER FRANÇAIS
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              style={{
                color: "white",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              L'immobilier,
              <br />
              <em style={{ color: "#e8c547" }}>autrement.</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                color: "rgba(255,255,255,0.48)",
                lineHeight: 1.8,
                maxWidth: "500px",
                margin: "0 auto 2rem",
                fontSize: "16px",
              }}
            >
              Achetez, vendez ou louez avec Ymmo — 12 agences au cœur de la France,
              une plateforme unique pour tous vos projets.
            </motion.p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto mb-10 p-2 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <input
                type="text"
                placeholder="Ville, quartier, code postal..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.95)", color: "#1a1a2e" }}
              />
              <select
                className="px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.95)", color: "#1a1a2e", minWidth: "130px" }}
                value={activeType}
                onChange={(e) => setActiveType(e.target.value)}
              >
                <option value="Tous">Acheter / Louer</option>
                <option value="Vente">Acheter</option>
                <option value="Location">Louer</option>
              </select>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-3 rounded-xl font-semibold text-sm"
                style={{ background: "#e8c547", color: "#1a1a2e", border: "none", cursor: "pointer" }}
              >
                Rechercher
              </motion.button>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="text-center"
                >
                  <div
                    style={{
                      color: "#e8c547",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "11px", marginTop: "2px" }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        }
      >
        {/* Preview grid inside the scroll card */}
        <div
          className="w-full h-full grid grid-cols-3 gap-3 p-4"
          style={{ background: "#0d0d1a", minHeight: "380px" }}
        >
          {properties.map((p) => (
            <div
              key={p.id}
              className="relative rounded-xl overflow-hidden"
              style={{ minHeight: "160px" }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 50%)" }}
              />
              <div className="absolute bottom-3 left-3 right-3">
                <p
                  style={{
                    color: "white",
                    fontSize: "12px",
                    fontWeight: 600,
                    fontFamily: "'Cormorant Garamond', serif",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {p.title}
                </p>
                <p style={{ color: "#e8c547", fontSize: "11px", marginTop: "2px" }}>
                  {formatPrice(p.price, p.type)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
}