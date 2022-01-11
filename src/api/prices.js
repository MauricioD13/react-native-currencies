import { API_HOST } from "../utils/contants";

export async function getPrices(currency) {
  try {
    const url = `${API_HOST}/latest?to=${currency}`;
  } catch (error) {
    throw error;
  }
}
