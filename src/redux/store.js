import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);

export default store;
export const persistor = persistStore(store);
