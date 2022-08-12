import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { MenuIcon, CashIcon, DocumentReportIcon } from 'react-native-heroicons/outline';
import Currency from 'react-currency-formatter';
import Chart from '../components/Chart';
import TouchableOpacityText from '../components/TouchableOpacityText';
import Item from '../components/Item';

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-green-900 flex-1 pt-7 space-y-2">
      <View className="bg-white px-2 py-3    justify-between flex-row items-center">
        <TouchableOpacity>
            <MenuIcon color="black" size={30} />
        </TouchableOpacity>
        <View className="flex-1 flex-row justify-center items-center space-x-2">
            <Text className="font-bold">My account</Text>
            <CashIcon color="black" size={20}/>
        </View>        
      </View>
     
      <ScrollView
        vertical
      >
        <View className="p-4">
          <View className="bg-white rounded-md px-4 py-2 flex-row items-center justify-between">
              <Text className="font-bold text-xl">Amount</Text>
              <Text className="font-bold text-2xl">
                <Currency quantity={150} currency="EUR" />
              </Text>
          </View>
        </View>

        <View className="p-4">
          <View className="bg-white rounded-md px-4 py-2 space-y-3">
            <View className="flex-row justify-start items-center space-x-1">
                <DocumentReportIcon color="black" size={20}/>
                <Text className="font-bold text-xl">Expenses</Text>
            </View>            
            <View className="space-y-3">
                <View className="flex-row">
                    <TouchableOpacityText title="Category" />
                    <TouchableOpacityText title="Monthly" />
                </View>
                <View>
                  <Chart />
                </View>
            </View>
          </View>
        </View>

        <View className="p-4">
          <View className="bg-white rounded-md px-4 py-2 space-y-3">
            <View className="flex-row justify-start items-center space-x-1">
                <DocumentReportIcon color="black" size={20}/>
                <Text className="font-bold text-xl">Recent credits</Text>
            </View>            
            <View className="space-y-3">
               <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />              
               <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />
               <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />
            </View>
          </View>
        </View>

        <View className="p-4">
          <View className="bg-white rounded-md px-4 py-2 space-y-3">
            <View className="flex-row justify-start items-center space-x-1">
                <DocumentReportIcon color="black" size={20}/>
                <Text className="font-bold text-xl">Recent expenses</Text>
            </View>            
            <View className="space-y-3">
               <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />              
               <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />
               <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />
               <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />              
               <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />
               <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />
            </View>
          </View>
        </View>
      </ScrollView>      
    </SafeAreaView>
  )
}

export default HomeScreen;