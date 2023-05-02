import './App.css';
import HomePage from './Pages/HomePage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Tables from './Pages/Tables';
import Boards from './Pages/Boards';
import NavbarCategory from './Navbar/NavbarCategory';
import ItemPage from './Pages/ItemPage';
import Mirrors from './Pages/Mirrors';
import SmallTables from './Pages/SmallTables';
import WallClocks from './Pages/WallClocks';
import AboutUs from './Pages/AboutUs';
import { AllProducts } from './Pages/AllProducts';
import Shelves from './Pages/Shelves';
import Cnc from './Pages/Cnc';
import Wood from './Pages/Wood';
import NavbarUpperSide from './Navbar/NavbarUpperSide';
import Home from './Admin/pages/Home';
import AddProduct from './Admin/Products/AddProduct';
import EditProduct from './Admin/Products/EditProduct';
import { ContactComponent } from './Components/ContactComponent';
import { useIsAdminRoute } from './useIsAdminRoute';
import PasswordAuth from './PasswordAuth';
const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;



function App() {


  return (
    <div>
      <Router>
          <Navbar/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/coffee-tables' element={<SmallTables/>}/>
          <Route exact path='/kitchen-office-tables' element={<Tables/>}/>
          <Route exact path='/clocks' element={<WallClocks/>}/>
          <Route exact path='/boards' element={<Boards/>}/>
          <Route exact path='/mirrors' element={<Mirrors/>}/>
          <Route exact path='/shelves' element={<Shelves/>}/>
          <Route exact path='/cnc' element={<Cnc/>}/>
          <Route exact path='/wood' element={<Wood/>}/>
          <Route exact path='/aboutus' element={<AboutUs/>}/>
          <Route exact path='/products' element={<AllProducts/>}/>
          <Route exact path='/product/:id' element={<ItemPage/>}/>


          <Route
            exact
            path="/admin-coke-zero"
            element={
              <PasswordAuth
                password={ADMIN_PASSWORD}
                onAuthSuccess={() => {}}
              >
                <Home />
              </PasswordAuth>
            }
          />
          <Route
            exact
            path='/admin-coke-zero/addproduct'
            element={
              <PasswordAuth
                password={ADMIN_PASSWORD}
                onAuthSuccess={() => {}}
              >
                <AddProduct />
              </PasswordAuth>
            }
          />
          <Route
            exact
            path='/admin-coke-zero/editproduct/:id'
            element={
              <PasswordAuth
                password={ADMIN_PASSWORD}
                onAuthSuccess={() => {}}
              >
                <EditProduct />
              </PasswordAuth>
            }
          />

        </Routes>
      </Router>
      <ContactComponent/>

      {/* Footer */}
      <footer className="footer">
      <p>&copy; 2023 Epoxy Store. All rights reserved.</p>
      </footer>
          </div>
  );
}

function Navbar() {
  const isAdminRoute = useIsAdminRoute();

  return (
    <>
      {!isAdminRoute && <NavbarUpperSide />}
      {!isAdminRoute && <NavbarCategory />}
    </>
  );
}
export default App;


