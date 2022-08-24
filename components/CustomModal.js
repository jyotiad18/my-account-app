import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, FlatList, Modal, Portal} from 'react-native'
import React,  { useState } from 'react'
import { XCircleIcon } from 'react-native-heroicons/outline';

const CustomModal = ({ visible, hideModal, children }) => {  
  return (            
        <Modal visible={visible} onDismiss={hideModal} transparent={true}>
            <View className="flex-1 justify-center items-center bg-gray-400 opacity-90 px-5 ">
               <View className="bg-white rounded-md items-center p-3 w-full" >
                   <View className="flex-row w-full justify-end">
                        <TouchableOpacity onPress= {hideModal}>
                            <XCircleIcon color="Black" size={30} />
                        </TouchableOpacity>
                   </View>
                   {children}                  
               </View>
            </View>
        </Modal>       
  )
}

export default CustomModal;