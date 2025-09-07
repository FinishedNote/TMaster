import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Home</Text>
      <TouchableOpacity className="absolute w-16 h-16 bottom-10 right-10 flex items-center justify-center rounded-2xl bg-primaryText shadow-md elevation-5">
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
