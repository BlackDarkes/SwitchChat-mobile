import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className=""
      style={styles.div}
    >
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/about/about"}>О нас</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    color: "#ff0000",
    textAlign: "center"
  }
})