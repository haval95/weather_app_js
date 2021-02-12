import React from 'react'
import {Line} from 'react-chartjs-2';
import * as BootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Chart({data}) {
    return (
       <BootStrap.Col md className="mt-1">
       
       <Line 
        data={data}
        options={{
          title:{
            display:true,
            text:'Tempreature of the Day',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
        />
       </BootStrap.Col>
        
      
    )
}
