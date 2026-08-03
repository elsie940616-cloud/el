import { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Gallery = lazy(() => import("./pages/Gallery"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const BubbleField = lazy(() => import("./pages/BubbleField"));
const DiaryCalendar = lazy(() => import("./pages/DiaryCalendar"));
const PoemFlow = lazy(() => import("./pages/PoemFlow"));
const Reunion = lazy(() => import("./pages/Reunion"));
const YinYang = lazy(() => import("./pages/YinYang"));

function App() {
  return (
    <Router>
      {/* 顶部导航 */}
      <header className="flex justify-center gap-10 p-6 bg-white shadow-sm text-lg font-light">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/gallery" className="hover:underline">Gallery</Link>
        <Link to="/poem" className="hover:underline">Poem</Link>
        <Link to="/about" className="hover:underline">Canvas</Link>
        {/* <Link to="/contact" className="hover:underline">Contact</Link> */}
        {/* <Link to="/BubbleField" className="hover:underline">BubbleField</Link>
        <Link to="/diary" className="hover:underline">diary</Link> */}

      </header>

      {/* 页面内容 */}
      <main className="min-h-screen bg-white text-gray-800">
        <Suspense fallback={<div className="min-h-screen bg-white" aria-label="页面加载中" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/BubbleField" element={<BubbleField />} />
            <Route path="/diary" element={<DiaryCalendar />} />
            <Route path="/poem" element={<PoemFlow />} />
            <Route path="/yinyang" element={<YinYang />} />
            <Route path="/reunion" element={<Reunion />} />
          </Routes>
        </Suspense>
      </main>

      {/* 底部 */}
      <footer className="text-center p-6 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Elsie. All Rights Reserved.
      </footer>
    </Router>
  );
}

export default App;
