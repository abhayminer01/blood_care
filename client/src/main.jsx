import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Inventory from './components/Inventory';
import Authentication from './components/authentication/Authentication';
import Profile from './components/Profile';
import Register from './components/authentication/Register';
import RequestBlood from './components/RequestBlood';
import Notifications from './components/Notifications';
import Donation from './components/donation/Donation';
import DonorRegistration from './components/donation/DonorRegistration';
import AdminPage from './components/admin/AdminPage';
import ManagerPanel from './components/manager/ManagerPanel';
import ManageInventory from './components/manager/ManageInventory';
import EditInventory from './components/manager/EditInventory';
import ManageRequest from './components/manager/ManageRequest';
import ManageUsers from './components/admin/ManageUsers';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='auth' element = {<Authentication />} />
        <Route path='/auth/reg' element = {<Register />} />
        <Route path='donor-reg' element = {<DonorRegistration />} />
        <Route path='inventory' element = {<Inventory />} />
        <Route path='profile/:id' element = {<Profile />} />
        <Route path='request-blood' element = {<RequestBlood />} />
        <Route path='notifications' element = {<Notifications />} />
        <Route path='donation' element = {<Donation />} />
        <Route path='admin-page' element = {<AdminPage />} />
        <Route path='manager-panel' element = {<ManagerPanel />} />
        <Route path='manager-panel/manage-inv' element = {<ManageInventory />} />
        <Route path='manager-panel/manage-inv/edit' element = {<EditInventory />} />
        <Route path='manager-panel/manage-req' element = {<ManageRequest />} />
        <Route path='/admin-page/user' element = {<ManageUsers />} />
      </Routes>
    </Router>
  </StrictMode>
);