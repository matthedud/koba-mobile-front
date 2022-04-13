import "./App.css"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login.page"
import Home from "./pages/Home.page"
import PlanningRealise from "./pages/PlanningRealise.page"
import PlanningHebdo from "./pages/PlanningHebdo.page"
import PlanningHome from "./pages/PlanningHome.page"
import PhotoTake from "./pages/PhotoTake.page"
import PhotoForm from "./pages/PhotoForm.page"
import ChantierList from "./pages/ChantierList.page"
import ChantierDetail from "./pages/ChantierDetail.page"
import PointageChantier from "./pages/PointageChantier.page"
import PointageTache from "./pages/PointageTache.page"
import PointageValidation from "./pages/PointageValidation.page"
import LoadingOverLay from "./components/LoadingOverLay"

function App() {
  return (
    <div className="App">
      <LoadingOverLay/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/pointage/*">
            <Route path="pointage-chantier" element={<PointageChantier />} />
            <Route path="pointage-tache" element={<PointageTache />} />
            <Route path="pointage-validation" element={<PointageValidation />} />
          </Route>
          <Route path="/planning/*" >
            <Route path="planning-realise" element={<PlanningRealise />} />
            <Route path="planning-hebdo" element={<PlanningHebdo />} />
            <Route path="*" element={<PlanningHome />} />
          </Route>
          <Route path="/photo/*">
            <Route path="photo-take" element={<PhotoTake />} />
            <Route path="photo-form" element={<PhotoForm />} />
          </Route>
          <Route path="/chantiers/*">
            <Route path="" element={<ChantierList />} />
            <Route path=":chantierID" element={<ChantierDetail />} />
          </Route>
          <Route path="/*" element={<Home />} />
        </Routes>
    </div>
  )
}

export default App
