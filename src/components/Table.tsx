import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {HashRouter as Router} from 'react-router-dom';
import InnerTable from './InnerTable';
import TablePaginationActions from './TablePaginationActions';


const actionsStyles = (theme:any) => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});


const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions,
);



class CustomPaginationActionsTable extends React.Component<any,any> {
  public state = {
    page: 0,
    rowsPerPage: 2,
  };

  public handleChangePage = (event:any, page:any) => {
    this.setState({ page });
  };

  public handleChangeRowsPerPage = (event:any) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  public render() {
   
    const { rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.props.item.length - page * rowsPerPage);

    return (
        <Router>

          <InnerTable item={this.props.item} emptyRows={emptyRows} page={page} rowsPerPage={rowsPerPage} 
          TablePaginationActionsWrapped={TablePaginationActionsWrapped} handleChangePage={this.handleChangePage} 
          handleChangeRowsPerPage={this.handleChangeRowsPerPage} />

        </Router>
    );
  }
}


export default CustomPaginationActionsTable;
