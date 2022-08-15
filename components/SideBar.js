import { View, Text } from 'react-native'
import React from 'react'
import SideBarItem from './SideBarItem';
import { CashIcon, AdjustmentsIcon, CreditCardIcon } from 'react-native-heroicons/outline';

const SideBar = ( { isDisplayMenu }) => {
  return (
    <View className={`w-[80%] h-[90%] left-0 p-3                
             bg-white z-10 ${isDisplayMenu ? " translate-x-0 " : " translate-x-full "} ease-in-out duration-300`}>
        <SideBarItem title="Cateogry" Icons={<AdjustmentsIcon color="black" size={20}/>} />
        <SideBarItem title="Credit" Icons={<CreditCardIcon color="black" size={20}/>} />
        <SideBarItem title="Expense" Icons={<CashIcon color="black" size={20}/>} />
    </View>
  )
}

export default SideBar;