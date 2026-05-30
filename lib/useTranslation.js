'use client'
import { useLanguage } from './LanguageContext'
import { getTranslation } from './translations'

export function useTranslation() {
  const { language, switchLanguage } = useLanguage()

  const t = (key, params = {}) => {
    let value = getTranslation(language, key)
    // Replace {param} placeholders
    Object.entries(params).forEach(([k, v]) => {
      value = value.replace(`{${k}}`, v)
    })
    return value
  }

  return { t, language, switchLanguage }
}
