import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Listings from "./components/listings";
import Footer from "./components/Footer";
import { properties } from "./data/properties";

export default function App() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [activeType, setActiveType] = useState("Tous");
  const [search, setSearch] = useState("");

  const filtered = properties.filter((p) => {
    const matchCat = activeFilter === "Tous" || p.category === activeFilter;
    const matchType = activeType === "Tous" || p.type === activeType;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchType && matchSearch;
  });

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: "#f7f7f9", minHeight: "100vh" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Jost:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <Hero
        activeType={activeType}
        setActiveType={setActiveType}
        search={search}
        setSearch={setSearch}
      />
      <Listings
        properties={filtered}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        activeType={activeType}
        setActiveType={setActiveType}
      />
      <Footer />
    </div>
  );
}