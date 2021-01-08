import "./App.css";

import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/rooms/" component={Rooms} />
				<Route exact path="/rooms/:slug/" component={SingleRoom} />
				<Route component={Error} />
			</Switch>
		</>
	);
}

export default App;
