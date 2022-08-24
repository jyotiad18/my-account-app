import { View, Text } from 'react-native'
import React from 'react'
import Chart from './Chart';

const MonthlyChart = () => {
  return (
    <View className="flex-row space-x-2 items-center py-5">
        <Chart />
    </View>
  )
}

export default MonthlyChart;