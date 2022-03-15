import { BrowserRouter as Router, Routes, Route} from "react-router"
import Login from "./Login"

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/"  element = {<Login/>}/>
            </Routes>
        </Router>
    )
}