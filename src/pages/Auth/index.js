import React from "react";

import Login from "./login";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { setToken } from "../../services/api";
import PrivateRoute from "../../routes/privateRoute";
import Home from "./home";
import MeusDados from "./meusDados";
import MinhaLista from "./minhaLista";

function Auth({ token = false }) {
	token && setToken(token);

	return (
		<>
			<Route path="/login" component={Login} />
			<PrivateRoute exact path="/user" component={Home} token={token} />
			<PrivateRoute
				path="/meus-dados"
				component={MeusDados}
				token={token}
			/>
			<PrivateRoute
				path="/minha-lista"
				component={MinhaLista}
				token={token}
			/>
		</>
	);
}

const mapStateToProps = (state) => ({
	token: state.login.token,
});

export default connect(mapStateToProps)(Auth);
