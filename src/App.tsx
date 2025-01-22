import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
