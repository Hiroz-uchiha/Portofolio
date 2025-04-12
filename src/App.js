import DetailProject from "./Halaman/DetailProject";
import Home from "./Halaman/Home";
import "./tailwinds/output.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="detailProject/" element={ <DetailProject />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
