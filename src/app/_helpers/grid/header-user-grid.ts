export const headerGrid =  [
  {
    headerName: 'Nombres', field: 'nombres', width: 120, sortable: true, resizable: true,
    checkboxSelection: function (params: any) {
      return params.columnApi.getRowGroupColumns().length === 0;
      },
  },
  {
    headerName: 'Apellidos', field: 'apellidos', width: 120, sortable: true, resizable: true, 
  },
  {
    headerName: 'Email', field: 'email', width: 160, sortable: true, filter: true, resizable: true, 
  },
  {
    headerName: 'Fecha_Nac', field: 'fecha_Nac', width: 120, sortable: true, filter: true, resizable: true, 
  },
  {
    headerName: 'Edad', field: 'edad', width: 70, sortable: true, resizable: true, 
  },
  {
    headerName: 'Rol', field: 'rol', width: 120, sortable: true, filter: true, resizable: true, 
  }   
];
