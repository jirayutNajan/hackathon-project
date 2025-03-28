export const initialElements = [
  {
    id: "water",
    name: "Water",
    icon: "💧",
    category: "basic",
    hasTemperature: true,
    minTemp: 0,
    maxTemp: 100,
    defaultTemp: 20,
  },
  {
    id: "fire",
    name: "Fire",
    icon: "🔥",
    category: "basic",
    hasTemperature: true,
    minTemp: 100,
    maxTemp: 1000,
    defaultTemp: 500,
  },
  { id: "earth", name: "Earth", icon: "🌍", category: "basic" },
  { id: "air", name: "Air", icon: "💨", category: "basic" },
  { id: "time", name: "Time", icon: "⏳", category: "basic" },
  { id: "pressure", name: "Pressure", icon: "🗜", category: "basic" },
  { id: "energy", name: "Energy", icon: "⚡", category: "basic" },
];

export const combinations = {
  "air-earth": { id: "dust", name: "Dust", icon: "🌫️", category: "compound" },
  "dust-earth": { id: "rock", name: "Rock", icon: "🪨", category: "compound" },
  "rock-time": { id: "sand", name: "Sand", icon: "⛱️", category: "compound" },
  "rock-rock": { id: "metal", name: "Metal", icon: "🔩", category: "compound" },
  "fire-sand": {
    id: "quartz",
    name: "Quartz",
    icon: "𖢻",
    category: "compound",
    requiresTemperature: true,
    minTemp: 300,
    maxTemp: 700,
  },
  "fire-quartz": {
    id: "silicon",
    name: "Silicon",
    icon: "🇸🇮",
    category: "compound",
    requiresTemperature: true,
    minTemp: 800,
    maxTemp: 1000,
  },
  "heat-metal": {
    id: "copper",
    name: "Copper",
    icon: "🥉",
    category: "compound",
    requiresTemperature: true,
    minTemp: 400,
    maxTemp: 600,
  },
  "copper-pressure": {
    id: "gold",
    name: "Gold",
    icon: "🪙",
    category: "compound",
  },
  "energy-metal": {
    id: "electricity",
    name: "Electricity",
    icon: "🔌",
    category: "compound",
  },
  "energy-silicon": {
    id: "semi-conductor",
    name: "SC",
    icon: "📱",
    category: "compound",
  },
};

export const stages = [
  { id: "sand", name: "Sand" },
  { id: "glass", name: "Glass" },
  { id: "metal", name: "Metal" },
  { id: "electricity", name: "Electricity" },
  { id: "silicon", name: "Silicon" },
  { id: "semi-conductor", name: "Computer" },
];

export const categories = {
  basic: "Basic Elements",
  compound: "Compounds",
  special: "Special Elements",
};
