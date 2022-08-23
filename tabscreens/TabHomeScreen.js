import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React,  { useState } from 'react'
import { CogIcon } from 'react-native-heroicons/outline';
import Currency from 'react-currency-formatter';
import RowView from '../components/RowView';
import Item from '../components/Item';

const TabHomeScreen = () => {  
  return (
    <View className="flex-1 p-4 bg-white space-y-3 mt-5">
         <RowView>
            <Text className="text-xl font-bold text-white">Welcome, JYOTI</Text>
            <CogIcon size={30} color="white" />
          </RowView>
          <ScrollView vertical>
              <RowView>
                  <Text className="font-bold text-xl text-white">Balance</Text>
                  <Text className="font-bold text-2xl text-white">
                    <Currency quantity={15} currency="EUR" />
                  </Text>
              </RowView>
              <View className="bg-[#308276] rounded-lg p-4 mb-3"> 
                    <View className="">
                        <Text className="font-bold text-lg text-white">Recent credits</Text>                             
                    </View>
                    <View className="space-y-3 p-2">
                      <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />              
                      <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />
                      <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />
                    </View>
              </View>
              <View className="bg-[#308276] rounded-lg p-4"> 
                    <View className="">
                        <Text className="font-bold text-lg text-white">Recent expenses</Text>                             
                    </View>
                    <View className="space-y-3 p-2">
                        <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />
                        <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />
                        <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />
                        <Item date="2022.01.01" title="Monthly Expance" description="For the month of July" price={100} />                                            
                    </View>
              </View>
          </ScrollView>
    </View>    
  )
}

export default TabHomeScreen;