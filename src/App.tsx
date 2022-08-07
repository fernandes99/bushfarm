import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Navigation } from "./components/navigation";
import { HomePage } from "./pages/home";

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;