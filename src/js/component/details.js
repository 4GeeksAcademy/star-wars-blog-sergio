import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = ({ type, uid }) => {

	const { store, actions } = useContext(Context);

	useEffect(()=> {
		actions.getDetails(type, uid);
	},[])

	console.log(store.details);

	if(type == "people") {
		return (
			<div className="d-flex flex-column align-items-center p-5">
				<div className="d-flex flex-row justify-content-center align-items-center row">
					<div className="col-xl d-flex flex-row justify-content-center align-items-center p-5">
						<img src="https://www.galerifoton.com/wp-content/uploads/2020/06/purple-x-wing-art-600x450.jpg"/>
					</div>
		
					<div className="col-xl d-flex flex-column align-items-center p-5">
						<h2>{store.details.name}</h2>
						<div className="text-center my-2">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu felis condimentum, auctor ante pellentesque, aliquet ex. Fusce interdum blandit interdum. Nullam quis varius neque, ac tempor elit. Ut fermentum ac velit sit amet venenatis. Integer non leo nec felis tempor placerat ut eu erat. In id est tellus. Duis condimentum commodo lorem, porta semper dui consectetur eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
							</p>
							<br/>
							<p>Phasellus interdum magna at varius ultricies. Donec ac elit quis quam varius bibendum at nec urna. Suspendisse sollicitudin lobortis nisl sit amet iaculis. Nullam est diam, rhoncus a egestas in, lobortis sit amet leo. Sed ut nisl tincidunt arcu pellentesque pharetra sit amet in ipsum. Maecenas rutrum eleifend lorem, ut semper justo. Suspendisse potenti.
							</p>
						</div>
					</div>
				</div>
				
				<div className="d-flex flex-row m-5">
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Name</h4>
						<p>{store.details.name}</p>
					</div>
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Height</h4>
						<p>{store.details.height}</p>
					</div>
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Weight</h4>
						<p>{store.details.mass}</p>
					</div>
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Hair Color</h4>
						<p>{store.details.hair_color}</p>
					</div>
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Eye Color</h4>
						<p>{store.details.eye_color}</p>
					</div>
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Birth Year</h4>
						<p>{store.details.birth_year}</p>
					</div>
				</div>
			</div>
		);
	} else if(type == "vehicles") {
		return (
			<div className="d-flex flex-column align-items-center p-5">
				<div className="d-flex flex-row justify-content-center align-items-center row">
					<div className="col-xl d-flex flex-row justify-content-center align-items-center p-5">
						<img src="https://www.galerifoton.com/wp-content/uploads/2020/06/purple-x-wing-art-600x450.jpg"/>
					</div>
		
					<div className="col-xl d-flex flex-column align-items-center p-5">
						<h2>{store.details.name}</h2>
						<div className="text-center my-2">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu felis condimentum, auctor ante pellentesque, aliquet ex. Fusce interdum blandit interdum. Nullam quis varius neque, ac tempor elit. Ut fermentum ac velit sit amet venenatis. Integer non leo nec felis tempor placerat ut eu erat. In id est tellus. Duis condimentum commodo lorem, porta semper dui consectetur eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
							</p>
							<br/>
							<p>Phasellus interdum magna at varius ultricies. Donec ac elit quis quam varius bibendum at nec urna. Suspendisse sollicitudin lobortis nisl sit amet iaculis. Nullam est diam, rhoncus a egestas in, lobortis sit amet leo. Sed ut nisl tincidunt arcu pellentesque pharetra sit amet in ipsum. Maecenas rutrum eleifend lorem, ut semper justo. Suspendisse potenti.
							</p>
						</div>
					</div>
				</div>

				<div className="d-flex flex-row m-5">
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Model</h4>
						<p>{store.details.model}</p>
					</div>
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Class</h4>
						<p>{store.details.vehicle_class}</p>
					</div>
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Manufacturer</h4>
						<p>{store.details.manufacturer}</p>
					</div>
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Length</h4>
						<p>{store.details.length}</p>
					</div>
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Max Speed</h4>
						<p>{store.details.max_atmosphering_speed}</p>
					</div>
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Cost (in credits)</h4>
						<p>{store.details.cost_in_credits}</p>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="d-flex flex-column align-items-center p-5">
				<div className="d-flex flex-row justify-content-center align-items-center row">
					<div className="col-xl d-flex flex-row justify-content-center align-items-center p-5">
						<img src="https://www.galerifoton.com/wp-content/uploads/2020/06/purple-x-wing-art-600x450.jpg"/>
					</div>
		
					<div className="col-xl d-flex flex-column align-items-center p-5">
						<h2>{store.details.name}</h2>
						<div className="text-center my-2">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu felis condimentum, auctor ante pellentesque, aliquet ex. Fusce interdum blandit interdum. Nullam quis varius neque, ac tempor elit. Ut fermentum ac velit sit amet venenatis. Integer non leo nec felis tempor placerat ut eu erat. In id est tellus. Duis condimentum commodo lorem, porta semper dui consectetur eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
							</p>
							<br/>
							<p>Phasellus interdum magna at varius ultricies. Donec ac elit quis quam varius bibendum at nec urna. Suspendisse sollicitudin lobortis nisl sit amet iaculis. Nullam est diam, rhoncus a egestas in, lobortis sit amet leo. Sed ut nisl tincidunt arcu pellentesque pharetra sit amet in ipsum. Maecenas rutrum eleifend lorem, ut semper justo. Suspendisse potenti.
							</p>
						</div>
					</div>
				</div>

				<div className="d-flex flex-row m-5">
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Name</h4>
						<p>{store.details.name}</p>
					</div>
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Climate and terrain</h4>
						<p>{store.details.climate}, {store.details.terrain}</p>
					</div>
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Diameter</h4>
						<p>{store.details.diameter}</p>
					</div>
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Gravity</h4>
						<p>{store.details.gravity}</p>
					</div>
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Orbital Period</h4>
						<p>{store.details.orbital_period}</p>
					</div>
					<div className="d-flex flex-column align-items-center mx-2">
						<h4>Population</h4>
						<p>{store.details.population}</p>
					</div>
				</div>
			</div>
		);
	}

};
