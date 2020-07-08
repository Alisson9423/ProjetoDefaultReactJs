import React from "react";
import { Route } from "react-router-dom";

import Home from "../pages/home";

import ScrollToTop from "../util/ScrollToTop";


export default function pages(props) {
	return (
		<>
			<ScrollToTop />

			<Route exact path="/" component={Home} />
		</>
	);
}
