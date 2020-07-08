import React from "react";
import Content from '../pages'
import { BrowserRouter, Switch } from "react-router-dom"

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Content />	
		</Switch>
	</BrowserRouter>
);

export default Router;
