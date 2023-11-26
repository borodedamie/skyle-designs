import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "../src/css/main.css";
import ScrollToTop from "./components/ScrollToTop";
import './App.css'
import Works from "./pages/Works";
import WorksPage from "./pages/WorksPage";
function App() {
  return (
    <main >
      <Router>
      <ScrollToTop />

        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/works" element={<Works />} />
            <Route path="/works/:pathname" element={<WorksPage/>} />
           
          </Routes>
        </Layout>
      </Router>
    </main>
  );
}

export default App;
