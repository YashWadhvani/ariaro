import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Speakers from "./pages/Speakers";
import Footer from "./components/Footer";
import VideoBackground from "./components/VideoBackground";
import EventDetails from "./pages/EventDetails";
import Team from "./pages/Team";
import Schedule from "./pages/Schedule";
// import ComingSoon from "./components/ComingSoon"

function App() {
    return (
        <>
            <VideoBackground>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/speakers" element={<Speakers />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route
                            path="/events/:eventId"
                            element={<EventDetails />}
                        />
                    </Routes>
                    <Footer />
                </Router>
            </VideoBackground>
        </>
    );
}

export default App;
