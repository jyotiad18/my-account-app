import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { CashIcon } from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress';
import { useNavigation } from "@react-navigation/native";

const LoadingScreen = () => { 
  const navigation = useNavigation();

  useEffect(() => {
      setTimeout(() => {
         navigation.navigate('Home')
        }, 5000)
  }, []) 
  return (
    <SafeAreaView className="bg-green-900 flex-1 justify-center items-center">             
            <View className="space-y-2">
                <View className="flex-row justify-center">
                    <View className="flex-row justify-center items-center rounded-full bg-white h-[100px] w-[100px] shadow-inner">
                        <Text className="font-bold">Myaccount</Text>
                        <CashIcon color="black" />
                    </View>
                </View>            
                <View className="flex-row justify-center">
                    <Progress.Bar size={300} indeterminate={true} color="white"  /> 
                </View>
            </View>
    </SafeAreaView>    
  )
}

export default LoadingScreen;