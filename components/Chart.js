import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg'

function Chart() {

  const data = [{
    key: 1,
    amount: 50,
    svg: { fill: '#600080' },
},
{
    key: 2,
    amount: 50,
    svg: { fill: '#9900cc' }
},
{
    key: 3,
    amount: 40,
    svg: { fill: '#c61aff' }
},
{
    key: 4,
    amount: 95,
    svg: { fill: '#d966ff' }
},
{
    key: 5,
    amount: 35,
    svg: { fill: '#ecb3ff' }
}];

const Labels = ({ slices, height, width }) => {
  return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
          <Text
              key={index}
              x={pieCentroid[ 0 ]}
              y={pieCentroid[ 1 ]}
              fill={'black'}
              textAnchor={'middle'}
              alignmentBaseline={'middle'}
              fontSize={12}  
              fontWeight={800}            
              stroke={'black'}
              strokeWidth={0.2}
          >
              {data.amount}
          </Text>
      )
  })
}
  const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7);
  const pieData = data
            .filter((value) => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    //onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))
  

  return (
    <PieChart style={{ height: 200 }} 
        valueAccessor={({ item }) => item.amount } 
        spacing={0}
        data={data}
        className="w-full" >
        <Labels />
    </PieChart>
  )
}

export default Chart;