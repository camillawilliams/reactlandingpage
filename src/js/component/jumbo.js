import React from "react";
import PropTypes from "prop-types";

export function Jumbo(props) {
	//const { title, body, url, buttonText } = props;
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.body}</p>
			<hr className="my-4" />
			<a
				className="btn btn-primary btn-lg"
				href={props.url}
				role="button">
				{props.buttonText}
			</a>
		</div>
	);
}

Jumbo.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	buttonText: PropTypes.string,
	url: PropTypes.string
};
