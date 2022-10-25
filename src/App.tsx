import React, { useState } from 'react';
import './App.scss';
import List from './Component/List';
import NavBar from './Component/NavBar/NavBar';
import Dashboard from './Page/Dashboard/Dashboard';
import LoginPage from './Page/LoginPage/LoginPage';

export interface IBoard{
  dashboard:boolean;
}
function App() {
  const [dashboard,setDashboard]=useState<IBoard["dashboard"]>(true)


  
  return (
    <div className="App">
     {dashboard && <LoginPage dashboard={dashboard} setDashboard = {setDashboard}/>} 
     <div className="App_section">
      {!dashboard && <NavBar/> }
     {!dashboard && <Dashboard/>}

     </div>
    </div>
  );
}

export default App;
