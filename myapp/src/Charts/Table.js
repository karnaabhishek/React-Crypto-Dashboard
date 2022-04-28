import React from 'react'
import DataTable from 'react-data-table-component';
function Table({data}) {
  const columns = [
    {
        name: 'Currency',
        selector: row => row.Currency,
        sortable: true,
    },
    {
        name: 'rate-float',
        selector: row => row.ratefloat,
        sortable: true,
    },
    {
        name: 'code',
        selector: row => row.code,
        sortable: true,
    },
    {
        name: 'symbol',
        selector: row => row.symbol,
        sortable: true,
    },
    {
        name: 'description',
        selector: row => row.description,
        sortable: true,
    },
];

const values = [
    {
        Currency: data.labels[0],
        ratefloat: data.datasets[0].data[0],
        code: data.datasets[0].code[0],
        symbol:data.datasets[0].symbol[0],
        description: data.datasets[0].description[0],
    },
    {
        Currency: data.labels[1],
        ratefloat: data.datasets[0].data[1],
        code: data.datasets[0].code[1],
        symbol:data.datasets[0].symbol[1],
        description: data.datasets[0].description[1],
    },
    {
      Currency: data.labels[2],
      ratefloat: data.datasets[0].data[2],
      code: data.datasets[0].code[2],
      symbol:data.datasets[0].symbol[2],
      description: data.datasets[0].description[2],
    },
]
  return (
    <div>
      <DataTable
            columns={columns}
            data={values}
            
        />
    </div>
  )
}

export default Table