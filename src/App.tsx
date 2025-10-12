import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig, AnimatePresence } from "framer-motion";
import Grid from "./components/photo-grid/grid";
import PhotoDetail from "./components/photo-detail/photo-detail";

function App() {
  return (
    <BrowserRouter>
      <MotionConfig transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Grid />} />
            <Route path="/photos/:slug" element={<PhotoDetail />} />
          </Routes>
        </AnimatePresence>
      </MotionConfig>
    </BrowserRouter>
  );
}

export default App;
