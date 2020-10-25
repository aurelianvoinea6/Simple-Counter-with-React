import React from "react";
import PropType from "prop-types";
//include images into your bundle

//create your first comp0nt
export const SecondsCounter = props => {
	return (
		<div className="container bg-dark text-white rounded-pill">
			<div className="row d-flex justify-content-center">
				<span className="col border border-light">
					<i className="far fa-clock" />
				</span>
				<span className="col border border-light">
					{props.secondsSix % 10}
				</span>
				<span className="col border border-light">
					{props.secondsFive % 10}
				</span>
				<span className="col border border-light">
					{props.secondsFour % 10}
				</span>
				<span className="col border border-light">
					{props.secondsThree % 10}
				</span>
				<span className="col border border-light">
					{props.secondsTwo % 10}
				</span>
				<span className="col border border-light">
					{props.secondsOne % 10}
				</span>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	secondsOne: PropType.number,
	secondsTwo: PropType.number,
	secondsThree: PropType.number,
	secondsFour: PropType.number,
	secondsFive: PropType.number,
	secondsSix: PropType.number
};
