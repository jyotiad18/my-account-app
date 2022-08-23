import { View, Text } from 'react-native'

const RowView = ( { children }) => {
  return (
    <View className="bg-[#308276] p-4 rounded-lg justify-between flex-row items-center mb-4">
        { children }        
    </View>
  )
}

export default RowView;