import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Receipe from "./Receipe";
import Test from "./test";
import Testing from "./testing";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Receipe />} />
          <Route path="/test" element={<Test/>} />
          <Route path="/testing" element={<Testing/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App