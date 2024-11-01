import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from "./Components/Write";
import Read from "./Components/Read";
import UpdateRead from "./Components/UpdateRead";
import Navbar from "./Components/Navbar";
import UpdateWrite from "./Components/UpdateWrite";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Write />} />
          <Route path="/write" element={<Write />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<UpdateRead />} />
          <Route
            path="/updateread/edit/:firebaseID"
            element={<UpdateWrite />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
