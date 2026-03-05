export function formatPrice(price, type) {
  return type === "Location"
    ? `${price.toLocaleString("fr-FR")} €/mois`
    : `${price.toLocaleString("fr-FR")} €`;
}