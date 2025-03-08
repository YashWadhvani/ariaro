import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import About from './components/About';
import Events from "./pages/Events";
import Speakers from "./pages/Speakers";
// import Sponsors from './components/Sponsors';
import Footer from "./components/Footer";
import VideoBackground from "./components/VideoBackground";

function App() {
    return (
        <>
            <VideoBackground>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/about" element={<About />} /> */}
                        <Route path="/events" element={<Events />} />
                        <Route path="/speakers" element={<Speakers />} />
                        {/* <Route path="/sponsors" element={<Sponsors />} /> */}
                    </Routes>
                    <Footer />
                </Router>
            </VideoBackground>
        </>
    );
}

export default App;
