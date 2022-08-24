import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React,  { useState } from 'react';

const Form = ({ title, children }) => {  
  return (            
      <View className="w-full">
         <View className="mb-3">
            <Text className="text-xl font-medium">{title}</Text>
         </View> 
         {children}
      </View>       
  )
}
export default Form;