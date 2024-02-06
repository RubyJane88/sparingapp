
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'f:gruppe',
    headerName: 'Account Type',
    width: 150,

  },
  {
    field: 'title',
    headerName: 'Title',
    width: 110,

  },
  {
    field: 'f:navn',
    headerName: 'Navn',
    width: 110,
 
  },

//   {
//     field: 'f:lowestEntryFee',
//     headerName: 'Lowest Entry Fee',
//     width: 110,

//   },
//   {
//     field: 'f:highestEntryFee',
//     headerName: 'Highest Entry Fee',
//     width: 110,

//   },
 
  {
    field: 'f:min_belop',
    headerName: 'Min belop',
    width: 110,

  },
  {
    field: 'f:max_belop',
    headerName: 'Max belop',
    width: 110,

  },
  {
    field: 'f:frie_uttak',
    headerName: 'Frie uttak',
    width: 120,

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