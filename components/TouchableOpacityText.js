import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TouchableOpacityText = ({ title }) => {
  return (
    <TouchableOpacity className=" border-2 border-green-900 p-2 rounded-md bg-green-900 mr-2">
      <Text className="text-white text-xs font-bold  ">{title}</Text>
    </TouchableOpacity>
  )
}

export default TouchableOpacityText;