import React from "react";
import { Card } from "./card";
import { Jumbo } from "./jumbo";
import PropTypes from "prop-types";

export function Home() {
	const jumbo = {
		title: "A Warm Welcome!",
		body:
			"It uses utiliy classes for typography and spacing to space content out within the larger container",
		buttonText: "Call to Action",
		url: "www.google.com"
	};
	const card = [
		{
			image: "https://via.placeholder.com/300",
			title: "My card",
			body:
				"Lorem ipsum dolor sit amet, consectrtur adipicing elit. Nulla rutrum in metus quis pellentesque.",
			buttonText: "View",
			url: "Find out More!"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My card",
			body:
				"Lorem ipsum dolor sit amet, consectrtur adipicing elit. Nulla rutrum in metus quis pellentesque.",
			buttonText: "View",
			url: "Find out More!"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My card",
			body:
				"Lorem ipsum dolor sit amet, consectrtur adipicing elit. Nulla rutrum in metus quis pellentesque.",
			buttonText: "View",
			url: "Find out More!"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My card",
			body:
				"Lorem ipsum dolor sit amet, consectrtur adipicing elit. Nulla rutrum in metus quis pellentesque.",
			buttonText: "View",
			url: "Find out More!"
		}
	];
	return (
		<div className="container">
			<Jumbo
				title={jumbo.title}
				body={jumbo.body}
				buttonText={jumbo.buttonText}
				url={jumbo.url}
			/>
			<div className="card-deck">
				{card.map((card, index) => {
					return (
						<Card
							key={index}
							image={card.image}
							title={card.title}
							body={card.body}
							buttonText={card.buttonText}
							url={card.url}
						/>
					);
				})}
			</div>
		</div>
	);
}
