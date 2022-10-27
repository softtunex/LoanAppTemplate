
import React, { useState,useEffect } from 'react';
import './App.scss';
import List from './Component/List';
import NavBar from './Component/NavBar/NavBar';
import Dashboard from './Page/Dashboard/Dashboard';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import LoginPage from './Page/LoginPage/LoginPage';
import BasicTable from './Component/Table/Table';

export interface IBoard{
  dashboard:boolean;
}

interface User{
  orgName:string|any;
  userName:string;
  email:string;
  phoneNumber: string|number;
  lastActiveDate:string

}

const App:React.FC = () => {
  const [dashboard,setDashboard]=useState<IBoard["dashboard"]>(true)
  const [users,setUsers]= useState([])
  const [pageNumber, setPageNumber] = useState(0);


useEffect(()=>{
  fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))
    .catch(err=> alert("An error occured"))
},[])
  
const PagePerPage = 10;
const pagesVisited = pageNumber * PagePerPage;  

const displayUsers = users
    .slice(pagesVisited, pagesVisited + PagePerPage)
    .map((user:User,i) => {
      return (
          <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{user.orgName}</TableCell>
                  <TableCell align="left">{user.userName}</TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">{user.phoneNumber}</TableCell>
                  <TableCell align="left">{user.lastActiveDate}</TableCell>
                  
                </TableRow>
      );
    });
    const usersPageCount = Math.ceil(users.length / PagePerPage);
  
    const changePage = (props:any) => {
      setPageNumber(props.selected);
    };
  return (
    <div className="App">
     {dashboard && <LoginPage dashboard={dashboard} setDashboard = {setDashboard}/>} 
     <div className="App_section">
      {!dashboard && <NavBar/> }
     {!dashboard && <Dashboard displayUsers={displayUsers} pageCount={usersPageCount} changePage={changePage} />}


     </div>
    </div>
  );
}

export default App;
