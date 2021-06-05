import React, { useReducer } from "react"
import LanguageContext from "./language-context"
import languageMap, { DEFAULT_LANGUAGE } from "./language-map"

const defaultLanguageState = {
  language: DEFAULT_LANGUAGE,
  languageDict: languageMap[DEFAULT_LANGUAGE]
}

const languageReducer = (state, action) => {
  if (action.type === "UPDATE") {
    return {
      language: action.language,
      languageDict: languageMap[action.language]
    }
  }
  return defaultLanguageState
}

const LanguageProvider = props => {
  const [languageState, dispatchLanguageAction] = useReducer(
    languageReducer,
    defaultLanguageState
  )

  const languageChangedHandler = ln => {
    dispatchLanguageAction({ type: "UPDATE", language: ln })
  }

  const languageContext = {
    language: languageState.language,
    languageDict: languageState.languageDict,
    changeLanguage: languageChangedHandler
  }

  return (
    <LanguageContext.Provider value={languageContext}>
      {props.children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
