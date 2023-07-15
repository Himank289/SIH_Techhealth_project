import React from 'react'
import { Bar } from 'react-chartjs-2'
import Navbar_Admin from './Navbar_Admin'
import { Box } from '@mui/system';



const BarChart = () => {
  return (
    <>
    <div>
        <Navbar_Admin/>
    </div>
    <Box>
    <Box sx={{paddingTop:'10em', overflow:'inherit'}}> 
     <Bar 
        data={{
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'],
          datasets: [
            {
              label: 'Queries Solved',
              data: [12, 19, 3, 5, 2, 3,6],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(34, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            {
              label: 'Queries Generated',
              data: [20, 21, 23, 7, 3, 4,7],
              backgroundColor:"red",
              borderColor:['rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',],
            }
            
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
        
      />
    </Box>
    </Box>
    </>
  )
}

export default BarChart
