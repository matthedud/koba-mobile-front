import "./App.css"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login.page"
import Home from "./pages/Home.page"
import Planning from "./pages/Planning.page"
import Photo from "./pages/Photo.page"
import Chantier from "./pages/ChantierList.page"
import PointageChantier from "./pages/PointageChantier.page"
import PointageTache from "./pages/PointageTache.page"
import Loading from "./pages/Loading.page"

function App() {
  return (
    <div className="App">
      <Loading>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/pointage-chantier" element={<PointageChantier />} />
          <Route path="/pointage-tache" element={<PointageTache />} />
          <Route path="/pointageTache" element={<Login />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/chantier" element={<Chantier />} />
          <Route path="/chantier/:chantierID" element={<Chantier />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Loading>
    </div>
  )
}

export default App
