import fr from './fr'
import en from './en'

const dictionaries = { fr, en }

export function getTranslation(lang, key) {
  const dict = dictionaries[lang] || dictionaries.fr
  const value = dict[key]
  if (value !== undefined) return value
  // Fallback to French, then raw key
  const frValue = dictionaries.fr[key]
  if (frValue !== undefined) return frValue
  return key
}

export { fr, en }
