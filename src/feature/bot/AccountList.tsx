
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'f:gruppe', //account group
    headerName: 'Account Type',
    width: 150,

  },
  {
    field: 'f:navn',
    headerName: 'Navn', //bank provider 
    width: 110,
 
  },
  {
    field: 'f:kap_periode',
    headerName: 'Kap Periode', //withdrawal fee
    width: 110,

  }, 
  {
    field: 'f:rentesats1',
    headerName: 'Rentesats', // interest rates 
    width: 110,

  }, 

  {
    field: 'f:min_belop',
    headerName: 'Min belop', //minimum deposit amount
    width: 110,

  },
  {
    field: 'f:max_belop', 
    headerName: 'Max belop', //max deposit amount
    width: 110,

  },
  {
    field: 'f:frie_uttak',
    headerName: 'Frie uttak',
    width: 120,

  },
  {
    field: 'f:spesielle_betingelser',
    headerName: 'Spesielle betingelser',
    width: 150,

  },

];


type Props = {
    recommended : any;
}

export default function AccountList(props: Props ) {
    const {recommended = []} = {... props}

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={recommended}
        columnVisibilityModel={{id: false}}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
   
      />
    </Box>
  );
}