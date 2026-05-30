'use client'
import { LanguageProvider } from '../lib/LanguageContext'
import { useEffect } from 'react'
import { useLanguage } from '../lib/LanguageContext'

function HtmlLangSync() {
  const { language } = useLanguage()
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])
  return null
}

export default function ClientLayout({ children }) {
  return (
    <LanguageProvider>
      <HtmlLangSync />
      {children}
    </LanguageProvider>
  )
}
