import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CatsIndex from './components/CatsIndex';
import CatShow from './components/CatShow';
import CatForm from './components/CatForm';
import PhotoShow from './components/PhotoShow';
import TogglePhotoType from './components/TogglePhotoType';
import cats from './mockData/cats.json'; // IMPORT THE CATS DATA

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<CatsIndex cats={cats} />} />
        <Route path="/cats/:catId" element={<CatShow cats={cats} />} />
        <Route path="/cats/new" element={<CatForm />} />
        <Route path="/photo" element={<PhotoShow />} />
        <Route path="/toggle-photo-type" element={<TogglePhotoType />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;