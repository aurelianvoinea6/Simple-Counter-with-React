//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import counterFunction from "./component/counter";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SecondsCounter } from "./component/counter.js";

let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<SecondsCounter
			secondsOne={one}
			secondsTwo={two}
			secondsThree={three}
			secondsFour={four}
			secondsFive={five}
			secondsSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
