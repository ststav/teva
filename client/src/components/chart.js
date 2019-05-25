import React, {PureComponent} from "react";
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, Cell} from 'recharts';

class ThreeDimScatterChart extends PureComponent {
    render() {
        return (<ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <XAxis type="number" dataKey={'x_position'} name='x_position' unit=''/>
            <YAxis type="number" dataKey={'y_position'} name='y_position' unit=''/>
            <ZAxis dataKey={'Size'} range={[0, 500]} name='Size' unit='cm'/>
            <CartesianGrid/>
            <Tooltip cursor={{strokeDasharray: '3 3'}}/>
            <Legend/>

            <Scatter name="A school" data={this.props.data} fill="#8884d8">{
                this.props.data.map((entry) => <Cell key={`cell-${entry._id}`} fill={entry.Color}/>)
            }
            </Scatter>

        </ScatterChart>)
    };
}

export default ThreeDimScatterChart;
