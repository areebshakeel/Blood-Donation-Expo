import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const personalDetails = function () {
  const [bloodGroup, setBloodGroup] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [contact, setContact] = useState();
  const [address, setAddress] = useState();
  console.log(bloodGroup);
  console.log(gender);
  console.log(age);
  console.log(contact);
  console.log(address);
  return (
    <ScrollView>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "#C72323" }}>
        Personal Details
      </Text>
      <Picker
        selectedValue={bloodGroup}
        onValueChange={(ItemValue, ItemIndex) => setBloodGroup(ItemValue)}
        style={styles.select}
      >
        <Picker.Item label="Blood Group" value="" />
        <Picker.Item label="A+" value="A+" />
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="B+" value="B+" />
        <Picker.Item label="B-" value="B-" />
        <Picker.Item label="O+" value="O+" />
        <Picker.Item label="O-" value="O-" />
      </Picker>
      <Picker
        selectedValue={gender}
        onValueChange={(ItemValue, ItemIndex) => setGender(ItemValue)}
        style={styles.select}
      >
        <Picker.Item label="Gender" value="" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          keyboardType="phone-pad"
          onChangeText={(value) => setAge(value)}
          style={styles.textInput}
          placeholder="Age"
        />
        <TextInput
          keyboardType="phone-pad"
          onChangeText={(value) => setContact(value)}
          style={styles.textInput}
          placeholder="Contact Number"
        />
        <TextInput
          keyboardType="default"
          onChangeText={(value) => setAddress(value)}
          style={styles.textInput}
          placeholder="Address"
        />
      </View>

      <View>
        <TouchableOpacity>
          <Text>Save </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  select: {
    color: "grey",
    height: 50,
    width: 350,
    borderBottomWidth: 20,
    borderTopWidth: 20,
    borderLeftWidth: 20,
    borderRightWidth: 100,
    borderColor: "green",
  },
  textInput: {
    width: 350,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 15,
    borderColor: "lightgrey",
    padding: 10,
    margin: 10,
  },
});

export default personalDetails;
