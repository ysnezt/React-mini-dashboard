
export const emptyRows = (rowsPerPage:any,length:any,page:any) => {
    return  rowsPerPage - Math.min(rowsPerPage, length - page * rowsPerPage)
}


export const lastPage = ( count:any, rowsPerPage:any ) => {
    return  Math.max(0, Math.ceil( count / rowsPerPage ) - 1)
}



export const disabledProp = (page:any, count:any, rowsPerPage:any) => {
    return ( page >= Math.ceil(count / rowsPerPage) - 1 )
}
