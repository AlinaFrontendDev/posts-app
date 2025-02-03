import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import axiosInstance from "./axiosinstance";
import { User } from "./types";

function App() {
  const [profile, setProfile] = useState<User | null>(null);

  useEffect(() => {
    axiosInstance.get("/users/1").then((res) => {
      setProfile(res.data);
    });
  }, []);

  return (
    <div style={{ background: "#FAFAFB" }}>
      <Header profile={profile} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
