import { View, Text } from 'react-native'
import React from 'react'
import Currency from 'react-currency-formatter';

const Item = ({ date, title, description, price  }) => {
  return (
    <View className="flex-row justify-between space-x-2 items-center border-b border-gray-500 py-1">
      <Text className="text-[10px] font-bold">{date}</Text>
      <View className="flex-1">
         <Text className="text-[10px] font-bold">{title}</Text>
         <Text className="text-[11px] text-gray-500 font-extralight">{description}</Text>
      </View>
      <Text className="text-[10px] font-bold">
         <Currency quantity={price} currency="EUR" />
      </Text>
    </View>
  )
}

export default Item;