import { API_HOST } from "../utils/contants";
import { Dinero } from "dinero.js";

export async function getCurrencies() {
  return fetch(`https://${API_HOST}/currencies`)
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(error));
}

export async function getConvertion(amount, from, to) {
  console.log(amount);
  return fetch(
    `https://${API_HOST}/latest?$amount=${amount}&from=${from}&to=${to}`
  )
    .then((resp) => resp.json())

    .then((data) => {
      PickerOptions();
      return data;
    })
    .catch((err) => console.error(error));
}

function PickerOptions(results) {
  const arrayKeys = Object.keys(results);

  arrayKeys.forEach((item) => {
    arrayPicker.push(<Picker.Item label={item} value={item} />);
  });
  return arrayPicker;
}
