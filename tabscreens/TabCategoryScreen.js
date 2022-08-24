import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, FlatList, Modal, Portal} from 'react-native'
import React,  { useState } from 'react'
import { PlusCircleIcon, XCircleIcon } from 'react-native-heroicons/outline';
import RowView from '../components/RowView';
import ListItem from '../components/ListItem';
import CustomModal from '../components/CustomModal';
import Category from '../components/Category';
import Form from '../components/Form';

const TabCategoryScreen = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const data = [{
	id: "1",
	name: "Earnest Green",
  },
  {
	id: "2",
	name: "Winston Orn",
  },
  {
	id: "3",
	name: "Carlton Collins",
  },
  {
	id: "4",
	name: "Malcolm Labadie",
  }]
  return (
    <SafeAreaView className="bg-white p-3 flex-1"> 
        <RowView>
            <Text className="text-white font-semibold">Cateogries</Text>
            <TouchableOpacity onPress= {showModal}>
                    <PlusCircleIcon color= "white" size={30}/>
            </TouchableOpacity> 
        </RowView>
        <CustomModal visible={visible} hideModal={hideModal}>
             <Form title="Add category">
                <Category />
             </Form>
        </CustomModal>
        <View className="flex-1">
             <FlatList 
                data = { data }
                renderItem = {( { item }) => <ListItem item={item} /> }
                keyExtractor={(item) => item.id}                
             />
        </View>        
    </SafeAreaView>    
  )
}

export default TabCategoryScreen;