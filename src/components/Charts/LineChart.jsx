import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts'

import { lineCustomSeries, linePrimaryXAxis, linePrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const LineChart = () => {
  const { currentMode } = useStateContext()

  return (
    <ChartComponent
      id='line-chart'
      height='420px'
      primaryXAxis={linePrimaryXAxis}
      primaryYAxis={linePrimaryYAxis}
      chartArea={{ border: { width: 0 }}}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark'? '#33373E' : '#fff'}
      legendSettings={{ 
        background: currentMode === 'Dark'? '#33373E' : '#fff',
        textStyle: { color: currentMode === 'Dark' ? '#fff' : '#33373E'}
      }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart