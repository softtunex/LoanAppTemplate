import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserInfo as User } from '../../Page/Dashboard/Dashboard';
import ReactPaginate from "react-paginate";
import "./Table.scss";

interface IUSer {
    displayUsers?: User["displayUsers"]
    pageCount:User["pageCount"];
    changePage:User["changePage"]
    
  }
const BasicTable=(props:IUSer) => {
 
  return (
    <div>
        <div className="table">
    <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table className="tableBg" sx={{ minWidth: 50 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ fontSize: "12px" }}>
                <TableCell style={{ fontSize: "12px" }} align="left">ORGANIZATION</TableCell>
                <TableCell style={{ fontSize: "12px" }} align="left">USERNAME</TableCell> 
                 <TableCell style={{ fontSize: "12px" }} align="left">EMAIL</TableCell>
                <TableCell style={{ fontSize: "12px" }} align="left">PHONE NUMBER</TableCell>
                <TableCell style={{ fontSize: "12px" }} align="left">DATE JOINED</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
              {props.displayUsers}
              </TableBody>
              </Table>
              </TableContainer>
              </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={props.pageCount}
        onPageChange={props.changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    
    </div>
  );
}

export default BasicTable;
