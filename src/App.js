import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./components/NavBar";
import CarritoContextProvider from "./context/carritoContext";
import { AuthContextProvider } from "./context/authContext";

export default function App() {
	return (
		<Router>
			<AuthContextProvider>
				<CarritoContextProvider>
					<NavBar />
					<Switch>
						<Routes />
					</Switch>
				</CarritoContextProvider>
			</AuthContextProvider>
		</Router>
	);
}
