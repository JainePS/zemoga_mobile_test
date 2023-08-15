import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, value: Object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(e);
  }
};

const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e);
  }
};

const mergeData = async (key: string, value: object) => {
  try {
    return await AsyncStorage.mergeItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
};

const getAllKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    console.error(e);
  }
};

const removeValue = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    console.error(e);
  }
};

const clearAll = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (e) {
    console.error(e);
  }

  console.log('Done.');
};

export {getData, storeData, mergeData, getAllKeys, removeValue, clearAll};
