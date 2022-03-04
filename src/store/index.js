import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, reducers);
let store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(thunk)));
let persistor = persistStore(store);


export { store, persistor };
