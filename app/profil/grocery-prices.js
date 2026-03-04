// REAL PRICES from Arnold's MASTER DATABASE - March 4, 2026
// Source: ~/.openclaw/shared/grocery-offers/PRECIOUS-MASTER.md

export const groceryPrices = {
  // MEAT
  "Hakket oksekød": { price: 29, store: "REMA", qty: "400g" },
  "Hakket kyllingekød": { price: 29, store: "REMA", qty: "400g" },
  "Kyllingebryst": { price: 29, store: "REMA", qty: "450g" },
  "Svinemørbrad": { price: 59.94, store: "REMA", qty: "600g" },
  "Medister": { price: 35.02, store: "REMA", qty: "500g" },
  "Bacon i tern": { price: 14.95, store: "REMA", qty: "200g" },
  
  // FISH
  "Fiskefars": { price: 34.95, store: "REMA", qty: "400g" },
  "Laksefilet": { price: 80, store: "Nemlig", qty: "600g" },
  
  // DAIRY
  "Æg": { price: 12, store: "REMA", qty: "10 stk" },
  "Mælk": { price: 10.50, store: "REMA", qty: "1L" },
  "Yoghurt": { price: 10, store: "REMA", qty: "1kg" },
  "Smør": { price: 27.95, store: "REMA", qty: "200g" },
  "Fløde": { price: 13.95, store: "REMA", qty: "250ml" },
  "Mozzarella": { price: 12, store: "REMA", qty: "200g" },
  "Cheddar": { price: 14.95, store: "REMA", qty: "150g" },
  "Creme Fraiche": { price: 15, store: "REMA", qty: "200g" },
  
  // VEGETABLES
  "Gulerødder": { price: 5, store: "REMA", qty: "1kg" },
  "Broccoli": { price: 15, store: "REMA", qty: "1 stk" },
  "Løg": { price: 6, store: "REMA", qty: "1kg" },
  "Hvidløg": { price: 8, store: "REMA", qty: "2 fed" },
  "Cherrytomater": { price: 15, store: "REMA", qty: "250g" },
  "Persille": { price: 8, store: "REMA", qty: "1 bdt" },
  "Champignons": { price: 15, store: "REMA", qty: "250g" },
  "Kartofler": { price: 10, store: "REMA", qty: "2.5kg" },
  
  // PANTRY
  "Hakkede tomater": { price: 6.37, store: "REMA", qty: "400g" },
  "Tomatpure": { price: 6.10, store: "REMA", qty: "140g" },
  "Kokosmælk": { price: 8.95, store: "REMA", qty: "400ml" },
  "Kikærter": { price: 7.86, store: "REMA", qty: "240g" },
  "Pasta": { price: 7.66, store: "REMA", qty: "500g" },
  "Havregryn": { price: 8.95, store: "REMA", qty: "1kg" },
  "Hvedemel": { price: 11.66, store: "REMA", qty: "2kg" },
  "Ris": { price: 12, store: "REMA", qty: "1kg" },
  "Tortillas": { price: 10.70, store: "REMA", qty: "370g" },
  "Olivenolie": { price: 35, store: "REMA", qty: "250ml" },
};

export function getPrice(ingredientName) {
  // Try exact match first
  if (groceryPrices[ingredientName]) {
    return groceryPrices[ingredientName];
  }
  
  // Try partial match
  const lower = ingredientName.toLowerCase();
  for (const [key, value] of Object.entries(groceryPrices)) {
    if (lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) {
      return value;
    }
  }
  
  return null; // No price found
}
