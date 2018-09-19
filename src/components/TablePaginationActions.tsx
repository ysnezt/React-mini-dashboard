import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { lastPage , disabledProp } from './functions/innerFunctions';


export default class TablePaginationActions extends React.Component<any,any> {

    public handleFirstPageButtonClick = (event:any) => {
      this.props.onChangePage(event, 0);
    };
  
    public handleBackButtonClick = (event:any) => {
      this.props.onChangePage(event, this.props.page - 1);
    };
  
    public handleNextButtonClick = (event:any) => {
      this.props.onChangePage(event, this.props.page + 1);
    };
  
    public handleLastPageButtonClick = (event:any) => {
      this.props.onChangePage(
        event,
        lastPage( this.props.count, this.props.rowsPerPage )  
      );
    };
  
    public render() {
      const { classes, count, page, rowsPerPage, theme } = this.props;
  
      return (
        <div className={classes.root}>
          <IconButton
            onClick={this.handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="First Page"
          >
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
          </IconButton>
          <IconButton
            onClick={this.handleBackButtonClick}
            disabled={page === 0}
            aria-label="Previous Page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
          <IconButton
            onClick={this.handleNextButtonClick}
            disabled= { disabledProp (page, count, rowsPerPage) }
            aria-label="Next Page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
          <IconButton
            onClick={this.handleLastPageButtonClick}
            disabled= { disabledProp (page, count, rowsPerPage) }
            aria-label="Last Page"
          >
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
          </IconButton>
        </div>
      );
    }
  }
  