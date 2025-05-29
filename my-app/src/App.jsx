import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer/Footer';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import men_banner from './Components/Assets/menbanner.avif';
import women_banner from './Components/Assets/womenbanner.jpg';
import kids_banner from './Components/Assets/kids_banner.webp';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kid" element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
