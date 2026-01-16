import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Company from "./pages/Company";
import Offerings from "./pages/Offerings";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Insights from "./pages/insights";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
