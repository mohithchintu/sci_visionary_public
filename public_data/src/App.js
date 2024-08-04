import './App.css';
import { createContext, useState } from 'react';
import Guidelines from './subPages/guidelines';
import HomePage from './subPages/homepage';
import Contact from './subPages/contact';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Peerreview from './subPages/peerreview';
import JournalsPage from './subPages/journals_p';
import AddEditJournal from './subPages/admin/addeditjournal';
import Detail from './subPages/detail';
import Submit from './subPages/submit';
import AddEB from './subPages/admin/AddEB';
import AdminLogin from './subPages/admin/adminlogin';
import Admin_panel from './subPages/admin/admin_panel';
import Admin from './subPages/admin/admin';
import Manage_jnal from './subPages/admin/manage_jnal';
import { Add_article } from './subPages/admin/add_art';

export const AuthContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}> </Route>
          <Route path="/journals" element={<JournalsPage />}> </Route>
          <Route path="/submit" element={<Submit />}> </Route>
          <Route path="/journal/:title/:id" element={<Detail />}> </Route>
          <Route path="/guidelines" element={<Guidelines />}> </Route>
          <Route path="/about-us" element={<Peerreview />}> </Route>
          <Route path="/contact-us" element={<Contact />}> </Route>
          <Route path="/admin_login" element={<AdminLogin />} />
          {isAuthenticated && (
            <>
              <Route path='/add_eb' element={<AddEB />} />
              <Route path="/add_jnal" element={<AddEditJournal />} />
              <Route path="/admin_panel" element={<Admin_panel />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/manage_jnal' element={<Manage_jnal />} />
              <Route path='/add_articel' element={<Add_article />} />
            </>
          )}
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;