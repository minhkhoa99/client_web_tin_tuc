import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./pages/homePages/homePages";
import Headers from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Introduce from "./pages/introduce/Introduce";
import SideBar from "./components/sideBar/SideBar";
import Media from "./pages/promotional-media/Media";
import PublicArt from "./pages/public-art/PublicArt";
import News from "./pages/news/News";
import NewDetail from "./pages/news/NewDetail";
import PublicArtDetail from "./pages/public-art/PublicArtDetail";
import MediaDetail from "./pages/promotional-media/MediaDetail";
import Propagate from "./pages/propagate/Propagate";
import PropagateDetail from "./pages/propagate/PropagateDetail";
import Movies from "./pages/movies/Movies";
import MoviesDetail from "./pages/movies/MoviesDetail";
import SileDer from "./components/sileder/SileDer";
function App() {
  return (
    <div className="App">
      <Headers />
      <div className="container">
        <div className="row">
         <SileDer />
          <div className="col-9">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePages />}></Route>
                <Route path="/introduce" element={<Introduce />}></Route>
                <Route path="/promotional-media" element={<Media />}></Route>
                <Route path="/promotional-media/:id" element={<MediaDetail />}></Route>
                <Route path="/public-art" element={<PublicArt />}></Route>
                <Route path="/public-art/:id" element={<PublicArtDetail />}></Route>
                <Route path="/news" element={<News />}></Route>
                <Route path="/news/:id" element={<NewDetail />}></Route>
                <Route path="/propagate/" element={<Propagate />}></Route>
                <Route path="/propagate/:id" element={<PropagateDetail />}></Route>
                <Route path="/movies/" element={<Movies />}></Route>
                <Route path="/movies/:id" element={<MoviesDetail />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
          <div className="col-3">
            <SideBar/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default App;
