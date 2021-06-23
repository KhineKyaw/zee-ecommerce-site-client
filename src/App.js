import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navigations/Navbar/Navbar"
import LanguageProvider from "./context/LanguageProvider"
import Footer from "./components/Footer/Footer"
import HomePage from "./routes/HomePage"
import ProductDetails from "./routes/ProductDetails"

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/product/:id' component={ProductDetails} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
