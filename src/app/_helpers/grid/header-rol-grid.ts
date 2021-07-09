export const headerGrid =  [
  {
    headerName: '', field: 'rolId', width: 50, sortable: true, resizable: true,
    checkboxSelection: function (params: any) {
      return params.columnApi.getRowGroupColumns().length === 0;
      },
  },
  {
    headerName: 'Nombre', field: 'rolName', width: 180, sortable: true, filter: true, resizable: true, 
  },
  {
    headerName: 'Estado', field: 'rolEstado', width: 85, sortable: true, filter: true, resizable: true, 
  } 
];
