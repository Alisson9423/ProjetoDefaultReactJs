import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// import { Container } from './styles';

export default function PrivateRoute({ component: Component, ...res }) {
	return (
		<Route
			{...res}
			render={
				props =>
					res.token ?
						(<Component {...props} />) :
						(<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
			}
		/>
	)
}
