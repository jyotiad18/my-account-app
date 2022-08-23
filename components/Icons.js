import { View, Text } from 'react-native'
import React from 'react'

const Icons = ( { title, Icon }) => {
  return (
    <View className="">
        <Icon size={30} />
        <Text className="text-xs font-medium">{title}</Text>
    </View>
  )
}

export default Icons;