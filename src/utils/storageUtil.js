import { AsyncStorage } from 'react-native';

export async function keyExists(key) {
    let keys = await AsyncStorage.getAllKeys();

    if (key in keys) {
        return true;
    }
    return false;
}

export async function saveToStorage(key, data) {
    AsyncStorage.setItem(key, JSON.stringify(data));
}

export async function readFromStorage(key) {
    let savedData = await AsyncStorage.getItem(key);
    let data = await JSON.parse(savedData) || null;

    return data;
}
