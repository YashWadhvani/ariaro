import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import About from './components/About';
import Events from "./pages/Events";
import Speakers from "./pages/Speakers";
// import Sponsors from './components/Sponsors';
import Footer from "./components/Footer";
import VideoBackground from "./components/VideoBackground";
import EventDetails from "./pages/EventDetails";
import Schedule from "./pages/Schedule";

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
                        <Route path="/schedule" element={<Schedule />} />
                        <Route
                            path="/events/:eventId"
                            element={<EventDetails />}
                        />
                        {/* <Route path="/sponsors" element={<Sponsors />} /> */}
                    </Routes>
                    <Footer />
                </Router>
            </VideoBackground>
        </>
    );
}

export default App;
