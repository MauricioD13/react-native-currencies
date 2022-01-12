import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { getConvertion, getCurrencies } from "../api/prices";

export default function Main() {
  let arrayPicker = [];
  useEffect(() => {
    (async () => {
      const results = await getCurrencies();
      arrayPicker = PickerOptions(results);
    })();
  }, []);

  const [selectedValue, setSelectedValue] = useState("");

  function PickerOptions(results) {
    const arrayKeys = Object.keys(results);

    arrayKeys.forEach((item) => {
      arrayPicker.push(<Picker.Item label={item} value={item} />);
    });
    return arrayPicker;
  }
  console.log(arrayPicker);
  return (
    <SafeAreaView>
      <Text>Main</Text>
      <Picker
        selectedvalue={selectedValue}
        style={{ height: 50, width: 50 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {arrayPicker}
      </Picker>
      {}
    </SafeAreaView>
  );
}
