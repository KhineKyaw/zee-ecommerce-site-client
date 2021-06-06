import "./App.css"

import HomePage from "./routes/HomePage"
import Navbar from "./components/Navigations/Navbar/Navbar"
import LanguageProvider from "./context/LanguageProvider"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <LanguageProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <HomePage />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
