import React,{Component} from 'react';
import {Chart} from 'react-google-charts';
import axios from 'axios';

class Ch extends Component{
render(){
  const {time}=this.props;
  const chartData=[[{ type: 'string', label: 'Day' },{ type: 'number', label: 'Cases' }]]
  const date=time.map(val=>val.date);
  const cases=time.map(val=>val.totalconfirmed);
  for(let i=0;i<time.length;i++){
    chartData.push([date[i],cases[i]])
  }
  return(
    <div>
    <Chart
  width={'500px'}
  height={'100%'}
  chartType="Line"
  loader={<div>Loading Chart</div>}
  data={chartData}
  options={{
    chart: {
      title:
        '',
    },
    width: 470,
    height: 400,
    series: {
      // Gives each series an axis name that matches the Y-axis below.
      0: { axis: 'Temps' },
    },
    axes: {
      // Adds labels to each axis; they don't have to match the axis names.
      y: {
        Temps: { label: 'CoronaVirus Cases' },
      },
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
    </div>
  );
}
}

export default Ch;
