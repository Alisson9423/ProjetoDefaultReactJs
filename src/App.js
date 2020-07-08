import React from "react";

// Redux
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import Route from "./routes";
import { store, persistor } from "./store";
import GlobalStyled from "./styles/global";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/themes";

export default () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={Theme}>
					<GlobalStyled />
					<Route />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
};
