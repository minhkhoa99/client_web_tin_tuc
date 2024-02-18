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
import SiteMap from "./pages/introduce/sitemap/Sitemap";
import Notification from "./pages/notification/Notification";
import Page from "./pages/introduce/page";
import DirectiveText from "./pages/DirectiveText/DirectiveText";
import Commands from "./pages/Commands/Commands";
import Radioarticle from "./pages/Radioarticle/Radioarticle";
import Exhibitionset from "./pages/Exhibitionset/Exhibitionset";
import Paintingset from "./pages/Paintingset/Paintingset";
function App() {
  return (
    <div className="App">
      <Headers />
      <SileDer />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePages />}></Route>
                <Route path="/introduce" element={<Introduce />}></Route>
                <Route path="/introduce/sitemap" element={<SiteMap />}></Route>
                <Route path="/promotional-media" element={<Media />}></Route>
                <Route
                  path="/promotional-media/:id"
                  element={<MediaDetail />}
                ></Route>
                <Route path="/public-art" element={<PublicArt />}></Route>
                <Route path="/DirectiveText" element={<DirectiveText />}></Route>
                <Route path="/commands" element={<Commands />}></Route>
                <Route path="/radioarticle" element={<Radioarticle />}></Route>
                <Route path="/exhibitionset" element={<Exhibitionset />}></Route>
                <Route path="/paintingset" element={<Paintingset />}></Route>


                
                


                
                <Route
                  path="/public-art/:id"
                  element={<PublicArtDetail />}
                ></Route>
                <Route path="/news" element={<News />}></Route>
                <Route path="/page" element={<Page />}></Route>

                <Route path="/news/:id" element={<NewDetail />}></Route>
                <Route path="/propagate/" element={<Propagate />}></Route>
                <Route
                  path="/propagate/:id"
                  element={<PropagateDetail />}
                ></Route>
                <Route path="/movies/" element={<Movies />}></Route>
                <Route path="/movies/:id" element={<MoviesDetail />}></Route>
                <Route path="/notification/" element={<Notification />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
          <div className="col-3">
            <SideBar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default App;
