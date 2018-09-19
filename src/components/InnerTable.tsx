import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { getModel } from './Functions';

const InnerTable = (props:any) => {

    return(
        <Paper style={{overflowX : 'auto',display: 'block',width:'100%'}}>
        <div >
          <Table >
            <TableHead>
                <TableRow>
                      <TableCell>NAME</TableCell>
                      <TableCell>SERIAL</TableCell>
                      <TableCell>MODEL</TableCell>
                      <TableCell>NOTE</TableCell>
                      <TableCell/>
                </TableRow>
            </TableHead>
            <TableBody>
              {props.item.slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage).map((row:any,index:any) => {
                    
                return (
                  <TableRow key={index} >
                    <TableCell numeric={true} style={{ textAlign:"left" }}>{row.name}</TableCell>
                    <TableCell numeric={true} style={{ textAlign:"left" }}>{row.serial}</TableCell>
                    <TableCell numeric={true} style={{ textAlign:"left" }}>{getModel(row.deviceModel,row["@id"])}</TableCell>
                    <TableCell numeric={true} style={{ textAlign:"left" }}>{row.note}</TableCell>
                    <TableCell numeric={true} style={{ textAlign:"left" }}><Link to={`/edit${row["@id"]}`} style={{ textDecoration:"none" }}>EDIT</Link></TableCell>
                  </TableRow>
                );
              })}
              { props.emptyRows > 0 && (
                <TableRow style={{ height: 48 * props.emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow style={{ textAlign:"left" }}>
                <TablePagination
                  rowsPerPageOptions={[1,2,5]}
                  colSpan={3}
                  count={props.item.length}
                  rowsPerPage={props.rowsPerPage}
                  page={props.page}
                  onChangePage={props.handleChangePage}
                  onChangeRowsPerPage={props.handleChangeRowsPerPage}
                  ActionsComponent={props.TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );

}

export default InnerTable ;