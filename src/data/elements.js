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
  "air-earth": { 
    id: "dust", 
    name: "Dust", 
    icon: "🌫️", 
    category: "compound",
    description: "Dust is formed when wind (air) erodes and carries away tiny particles from the earth's surface. This process is called wind erosion.",
    game: "digitalLogic"
  },
  "earth-fire": {
    id: "dust",
    name: "Dust",
    icon: "🌫️",
    category: "compound",
    requiresTemperature: true,
    minTemp: 800,
    maxTemp: 1000,
    description: "When fire burns organic matter, it creates ash and dust particles through combustion.",
    game: "brookshear"
  },
  "dust-earth": { 
    id: "rock", 
    name: "Rock", 
    icon: "🪨", 
    category: "compound",
    description: "Over time, dust and earth particles can compact and solidify under pressure to form sedimentary rocks."
  },
  "rock-time": { 
    id: "sand", 
    name: "Sand", 
    icon: "⛱️", 
    category: "compound",
    description: "Sand is formed when rocks are broken down into tiny particles through weathering and erosion over time."
  },
  "rock-rock": { 
    id: "metal", 
    name: "Metal", 
    icon: "🔩", 
    category: "compound",
    description: "Metals are naturally occurring elements found in rocks. When rocks containing metal ores are heated and processed, pure metals can be extracted."
  },
  "fire-sand": {
    id: "quartz",
    name: "Quartz",
    icon: "𖢻",
    category: "compound",
    requiresTemperature: true,
    minTemp: 300,
    maxTemp: 700,
    description: "When sand (which contains silica) is heated to high temperatures, it can form quartz crystals through a process called crystallization."
  },
  "fire-quartz": {
    id: "silicon",
    name: "Silicon",
    icon: "🇸🇮",
    category: "compound",
    requiresTemperature: true,
    minTemp: 800,
    maxTemp: 1000,
    description: "Silicon is extracted from quartz through a high-temperature reduction process, where the oxygen is removed from silicon dioxide."
  },
  "heat-metal": {
    id: "copper",
    name: "Copper",
    icon: "🥉",
    category: "compound",
    requiresTemperature: true,
    minTemp: 400,
    maxTemp: 600,
    description: "Copper is a naturally occurring metal that can be extracted from its ore through heating and smelting processes."
  },
  "copper-pressure": {
    id: "gold",
    name: "Gold",
    icon: "🪙",
    category: "compound",
    description: "Gold is a precious metal that forms deep within the Earth's crust under extreme pressure and heat."
  },
  "energy-metal": {
    id: "electricity",
    name: "Electricity",
    icon: "🔌",
    category: "compound",
    description: "Electricity is generated when electrons flow through a conductive material like metal, creating an electric current."
  },
  "energy-silicon": {
    id: "semi-conductor",
    name: "SC",
    icon: "📱",
    category: "compound",
    description: "Silicon is a semiconductor material that can control the flow of electricity, making it essential for electronic devices."
  },
  "metal-semi-conductor": { 
    id: 'transistor', 
    name: 'Transistor', 
    icon: '𓇲', 
    category: 'compound',
    description: "A transistor is created by combining metal and semiconductor materials. It acts as an electronic switch or amplifier, controlling the flow of electricity. This invention revolutionized electronics and paved the way for modern computing."
  },
  "fire-fire": { 
    id: 'transistor', 
    name: 'Transistor', 
    icon: '𓇲', 
    category: 'compound',
    description: "A transistor is created by combining metal and semiconductor materials. It acts as an electronic switch or amplifier, controlling the flow of electricity. This invention revolutionized electronics and paved the way for modern computing."
  },
  "transistor-gold": { 
    id: 'cpu', 
    name: 'CPU', 
    icon: '🔲', 
    category: 'compound',
    description: "The CPU (Central Processing Unit) is the brain of a computer, made up of millions of transistors connected with gold wiring. Gold is used because it's an excellent conductor of electricity and doesn't corrode, ensuring reliable connections between transistors."
  },
};

export const categories = {
  basic: "Basic Elements",
  compound: "Compounds",
  special: "Special Elements",
};