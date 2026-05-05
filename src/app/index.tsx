import { UserAvatar } from "@/entities/user";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View className="" style={styles.div}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <UserAvatar
        userAvatar={""}
        userName={"test"}
        isAvatar={true}
        size={"middle"}
        handleOpen={() => {}}
      />
      <Link href={"/about/about"}>О нас</Link>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#ff0000",
    textAlign: "center",
  },
});
