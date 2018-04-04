import { AsyncStorage } from 'react-native';

export default function storageOp(key, data, saveOrLoad) {
    if (saveOrLoad) {
        saveToStorage(key, data);
    } else {
        readFromStorage(key);
    }
}

function saveToStorage(key, data) {
    AsyncStorage.setItem(key, JSON.stringify(data));
}

function readFromStorage(key) {
    AsyncStorage.getItem(key).then((data) => {
        const storageData = JSON.parse(data);
    });
}
