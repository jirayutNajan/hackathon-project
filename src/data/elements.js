export const initialElements = [
  { id: 'water', name: 'Water', icon: '💧', category: 'basic' },
  { id: 'fire', name: 'Fire', icon: '🔥', category: 'basic' },
  { id: 'earth', name: 'Earth', icon: '🌍', category: 'basic' },
  { id: 'air', name: 'Air', icon: '💨', category: 'basic' },
  { id: 'time', name: 'Time', icon: '⏳', category: 'basic' },
  {id:'pressure' , name: 'Pressure', icon: '🗜', category: 'basic'},
  {id:'energy' , name: 'Energy', icon: '⚡', category: 'basic'},  
]

export const combinations = {
  'air-earth': { id: 'dust', name: 'Dust', icon: '🌫️', category: 'compound' },
  'dust-earth': { id: 'rock', name: 'Rock', icon: '🪨', category: 'compound' },
  'rock-time': { id: 'sand' , name: 'Sand', icon: '⛱️', category: 'compound' },
  'rock-rock': { id: 'metal', name: 'Metal', icon: '🔩', category: 'compound' },
  'fire-sand': { id: 'quartz', name: 'Quartz', icon: '𖢻', category: 'compound' },
  'fire-quartz': { id: 'silicon', name: 'Silicon', icon: '🇸🇮', category: 'compound' },
  'heat-metal': { id: 'copper', name: 'Copper', icon: '🥉', category: 'compound' },
  'copper-pressure': { id: 'gold', name: 'Gold', icon: '🪙', category: 'compound' },
  'energy-metal': { id: 'electricity', name: 'Electricity', icon: '🔌', category: 'compound' },
  'energy-silicon': { id: 'semi-conductor', name: 'SC', icon: '📱', category: 'compound' },
  'metal-semi-conductor': { id: 'transistor', name: 'Transistor', icon: '𓇲', category: 'compound' },
  'transistor-gold': { id: 'cpu', name: 'CPU', icon: '🔲', category: 'compound' },

}

export const categories = {
  basic: 'Basic Elements',
  compound: 'Compounds',
  special: 'Special Elements'
}