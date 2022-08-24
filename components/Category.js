import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React,  { useState } from 'react';

const Category = () => {  
  return (            
      <View className="space-y-3 w-full">
          <View className="space-y-1">
             <Text className="font-medium">Category name</Text>
             <TextInput className="h-9 border-2 border-black rounded-md p-4 font-medium" placeholder="enter category name"/>
          </View>
          <View className="space-y-1">
          </View>
      </View>       
  )
}


export default Category;