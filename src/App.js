import "./App.css"

import HomePage from "./routes/HomePage"
import Navbar from "./components/Navigations/Navbar/Navbar"

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HomePage />
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default App
