export const initialElements = [
  { id: 'water', name: 'Water', icon: '💧', category: 'basic' },
  { id: 'fire', name: 'Fire', icon: '🔥', category: 'basic' },
  { id: 'earth', name: 'Earth', icon: '🌍', category: 'basic' },
  { id: 'air', name: 'Air', icon: '💨', category: 'basic' },
]

export const combinations = {
  'earth-water': { 
    id: 'sand', 
    name: 'Sand', 
    icon: '🏖️', 
    category: 'compound',
    hint: 'Next: Try heating sand with fire to create quartz crystals'
  },
  'sand-fire': { 
    id: 'quartz', 
    name: 'Quartz', 
    icon: '💎', 
    category: 'compound',
    hint: 'Next: Refine quartz with fire to get pure silicon'
  },
  'quartz-fire': { 
    id: 'silicon', 
    name: 'Silicon', 
    icon: '🔷', 
    category: 'compound',
    hint: 'Next: Combine earth and fire to create metal'
  },
  'earth-fire': { 
    id: 'metal', 
    name: 'Metal', 
    icon: '⚙️', 
    category: 'compound',
    hint: 'Next: Try heating metal to extract copper'
  },
  'metal-fire': { 
    id: 'copper', 
    name: 'Copper', 
    icon: '🔸', 
    category: 'compound',
    hint: 'Next: Apply pressure to metal to create gold'
  },
  'metal-pressure': { 
    id: 'gold', 
    name: 'Gold', 
    icon: '💰', 
    category: 'compound',
    hint: 'Next: Combine metal with energy to create electricity'
  },
  'metal-energy': { 
    id: 'electricity', 
    name: 'Electricity', 
    icon: '⚡', 
    category: 'compound',
    hint: 'Next: Combine silicon with electricity to create a semiconductor'
  },
  'silicon-electricity': { 
    id: 'semiconductor', 
    name: 'Semiconductor', 
    icon: '🔋', 
    category: 'compound',
    hint: 'Next: Combine semiconductor with metal to create a transistor'
  },
  'semiconductor-metal': { 
    id: 'transistor', 
    name: 'Transistor', 
    icon: '🔌', 
    category: 'compound',
    hint: 'Next: Combine two transistors to create a microchip'
  },
  'transistor-transistor': { 
    id: 'microchip', 
    name: 'Microchip', 
    icon: '💻', 
    category: 'compound',
    hint: 'Next: Add gold to the microchip to create a CPU'
  },
  'microchip-gold': { 
    id: 'cpu', 
    name: 'CPU', 
    icon: '🧠', 
    category: 'compound',
    hint: 'Congratulations! You\'ve built a CPU from scratch!'
  }
}

export const categories = {
  basic: 'Basic Elements',
  compound: 'Compounds',
  special: 'Special Elements'
}