import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler
} from 'chart.js'

import { Radar } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';


ChartJS.register(
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler
)

function RadarChart () {

    const data = {
        labels: ['JavaScript', 'CSS', 'React', 'Node', 'SequelizeSQL'],
        datasets: [
          {
            label: 'Tecnologias',
            data: [2.95 ,2.8 ,2.9 ,3 ,2.9],
            color:'#fff',
            font:{size:14},
            // backgroundColor: 'rgba(75, 192, 192, 0.2)',
            backgroundColor: 'rgba(0, 241, 52, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointBorderWidth: 1,
          },
        ],
      };
    
      const options: ChartOptions<'radar'> = {
        scales: {
            r: {
                angleLines:{
                    color:"#fff"
                },
                grid:{
                    color:"#fff"
                },
                pointLabels:{
                    color:"#fff",
                    font:{size:14}
                },
                ticks: {
                  display: false, // Deshabilita la visualización de los números
                  color:'blue',
                },
            },

        },
        plugins: {
          legend: {
            labels:{
                color:'#ff0',
                // font:{size:14}
            },
            display: false,
          },
          
        },
      };
    
      return <Radar data={data} options={options} />;
    }
    
    export default RadarChart;
    