import {Route, Routes} from 'react-router-dom'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CommisionsPage from './pages/CommisionsPage'

function App() {
  return(
    <div className='bg-cyan-100'>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/commisions' element={<CommisionsPage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
