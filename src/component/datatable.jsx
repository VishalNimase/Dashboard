import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'dateTime', headerName: 'Date', width: 300 },
  { field: 'temp1', headerName: 'T1-Evaporator In', width: 200 },
  { field: 'temp2', headerName: 'T2-Evaporator Exit', width: 200 },
  { field: 'temp3', headerName: 'Storage Temperature 1', width: 200 },
  { field: 'temp4', headerName: 'Storage Temperature 1', width: 200 }
];


export default function DataTable() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://148.72.246.96:8081/newTempRecords')
      const rows = await data.json()
      setRows(rows)
    }
    fetchData()
  }, [])
  return (
    <div style={{ height: 550, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[50]}
        getRowId={row => row['dateTime']}
      />
    </div>
  );
}