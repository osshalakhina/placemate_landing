import "./App.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Coworkers from "./pages/Coworkers";
import Businesses from "./pages/Businesses";
import Coworkings from "./pages/Coworkings";
import RootLayout from "./layouts/RootLayout";
import {Provider} from "react-redux";
import store from './store/reducers'


export enum RoutesEnum {
  COWORKERS = "/coworkers",
  BUSINESSES = "/businesses",
  COWORKINGS = "/coworkings"
}


function App() {

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
