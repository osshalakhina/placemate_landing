import "./App.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Coworkers from "./pages/Coworkers";
import Businesses from "./pages/Businesses";
import Coworkings from "./pages/Coworkings";
import RootLayout from "./layouts/RootLayout";

export enum RoutesEnum {
  COWORKERS = "/coworkers",
  BUSINESSES = "/businesses",
  COWORKINGS = "/coworkings"
}



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout/>}>
            <Route path={RoutesEnum.COWORKERS} element={<Coworkers/>}/>
            <Route path={RoutesEnum.BUSINESSES} element={<Businesses/>}/>
            <Route path={RoutesEnum.COWORKINGS} element={<Coworkings/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
