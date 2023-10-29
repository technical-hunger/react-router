import About from './components/About';
import FeaturedProducts from './components/FeaturedProducts';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import NewProducts from './components/NewProducts';
import NoMatch from './components/NoMatch';
import Producsts from './components/Producsts';
import Product from './components/Product';
import Profile from './components/Profile';
import RequireAuth from './components/RequireAuth';
import { AuthProvider } from './components/auth';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/logout' element={<Logout />}/>
          
          <Route path='/products/:productId' element={<Product />}/>
          <Route path='/products' element={<Producsts />}>
            <Route index element={<FeaturedProducts />}  />
            <Route path='featured' element={<FeaturedProducts />} />
            <Route path='new' element={<NewProducts />} />
          </Route>
          <Route path='*' element={<NoMatch />}/>
          <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
        </Routes>
        </AuthProvider>
    </>
  );
}

export default App;
