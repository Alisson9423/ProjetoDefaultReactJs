import { createStore, combineReducers, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from "./ducks";
import rootSaga from "./saga";

const persistConfig = {
	key: 'root',
	storage,
	whitelist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	persistedReducer,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { store, persistor }

