import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SideBarItem = ({ title, Icons }) => {
  return (
    <TouchableOpacity>
        <View className="flex-row justify-between py-2 items-center mb-2 border-b-[1px] border-gray-600">
        <Text className="text-sm font-bold">{title}</Text>
        {Icons}
        </View>
    </TouchableOpacity>
  )
}

export default SideBarItem;