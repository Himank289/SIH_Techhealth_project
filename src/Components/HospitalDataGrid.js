import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/material'



const columns = [

  { field: 'id', headerName: 'ID', width:20 },
  { field: 'title', headerName: 'Title', width:200 },
  { field: 'body', headerName: 'Body', width:200 }

]

const Datagrid = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))
  }, [])

  return (
    <Box style={{ height: 470, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={7}
        sx={{backgroundColor:'#e3f2fd' }}
      />
    </Box>
  )
}

export default Datagrid