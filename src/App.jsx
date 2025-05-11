import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Songs from "./pages/Songs";
import Song from "./pages/Song";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/artists" element={<Artists />}></Route>
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/songs" element={<Songs />}></Route>
          <Route path="/song/:id" element={<Song />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
