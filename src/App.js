import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePages from "./pages/homePages/homePages";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      <Route path="/pages/home" element = {<HomePages/>}></Route>
      {/* <Route path="/user/register" element={  <Registration />}></Route> */}
      </Routes>
    
      </BrowserRouter>

    </div>
  );
}
export default App;
