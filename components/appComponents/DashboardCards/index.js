import React from "react";
import { View, Text, StyleSheet ,Image} from "react-native";
function DashboardCard(props) {
  return (
    <View
      style={{
        borderColor: "black",
        borderStyle: "solid",
        height: "25%",
        width: "40%",
        borderRadius: 8,
        backgroundColor: props.data.color,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
        <Image source={{uri:props.data.url}} height={120} width={100}/>
    </View>
  );
}
const styles = StyleSheet.create({
  mainCard: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    height: "30%",
    width: "40%",
    borderRadius: 8,
  },
});
export default DashboardCard;
