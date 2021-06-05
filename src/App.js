import "./App.css"

import HomePage from "./routes/HomePage"
import Navbar from "./components/Navigations/Navbar/Navbar"
import LanguageProvider from "./context/LanguageProvider"

function App() {
  return (
    <LanguageProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <HomePage />
      </main>
      <footer>Footer</footer>
    </LanguageProvider>
  )
}

export default App
