export const initialElements = [
  { id: 'water', name: 'Water', icon: '💧', category: 'basic' },
  { id: 'fire', name: 'Fire', icon: '🔥', category: 'basic' },
  { id: 'earth', name: 'Earth', icon: '🌍', category: 'basic' },
  { id: 'air', name: 'Air', icon: '💨', category: 'basic' },
]

export const combinations = {
  'air-earth': { id: 'dust', name: 'Dust', icon: '💨', category: 'compound' },
  'air-fire': { id: 'smoke', name: 'Smoke', icon: '💨', category: 'compound' },
  'earth-fire': { id: 'lava', name: 'Lava', icon: '🌋', category: 'compound' },
  'fire-water': { id: 'steam', name: 'Steam', icon: '💨', category: 'compound' },
  'water-air': { id: 'rain', name: 'Rain', icon: '🌧️', category: 'compound' },
  'water-earth': { id: 'mud', name: 'Mud', icon: '🌊', category: 'compound' },
  'fire-steam': { id: 'lava', name: 'Lava', icon: '♨️', category: 'compound' },
}

export const categories = {
  basic: 'Basic Elements',
  compound: 'Compounds',
  special: 'Special Elements'
} 