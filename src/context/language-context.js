import React from "react"

import languageMap, { DEFAULT_LANGUAGE } from "./language-map"

const LanguageContext = React.createContext({
  language: DEFAULT_LANGUAGE,
  languageDict: languageMap[DEFAULT_LANGUAGE],
  changeLanguage: () => {}
})

export default LanguageContext
