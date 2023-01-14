import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home"
import CategorySelection from './components/CategorySelection'
import NewEntry from './components/NewEntry'

const App = () => {
return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<CategorySelection />} />
                <Route path="/entry/new" element={<NewEntry />} />
            </Routes>
        </Router>
    </div>
)
}

export default App
