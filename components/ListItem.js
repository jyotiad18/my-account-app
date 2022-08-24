import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { TrashIcon, PencilAltIcon  } from 'react-native-heroicons/outline';

const ListItem = ({ item  }) => {
  return (    
        <View className="flex-row justify-between space-x-2 items-center border-b border-gray-300 py-2">
            <Text className="text-md font-medium">{item.name}</Text>
            <View className="flex-row items-center space-x-2">
               <PencilAltIcon color="black" size={25} />
               <TrashIcon color="red" size={25} />              
            </View>
        </View>    
  )
}

export default ListItem;