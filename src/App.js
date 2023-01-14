import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Navbar from './components/Navbar'

const App = () => {
return (
    <div>
        <Router>
            <Navbar/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} exact />
                    <Route path="/Contact" element={<Contact />} exact />
                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
            </main>
        </Router>
    </div>
)
}

export default App
