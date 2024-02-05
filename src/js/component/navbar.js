import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const {store, actions} = useContext(Context);
	
	return (
		<nav className="navbar navbar-light bg-light px-5 w-100">
			<Link to="/">
				<img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG34.png" style={{ width: "120px" }}/>
			</Link>
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					<span className="m-2">Favourites</span>
					<span className="bg-secondary rounded pb-1 px-2">{ store.totalFavourites }</span>
				</button>
					<ul className="dropdown-menu">
						{ store.favourites.length == 0 ? <div className="text-center"> <span> No favourites yet </span> </div> : store.favourites.map((item, index) => 
							<div className="d-flex justify-content-between align-items-center p-1">
								<span key={ index }> <Link to={"/learn-more/" + item.favouriteUrl}> { item.favouriteName } </Link> </span>
								<i className="fa fa-trash" onClick={() => { actions.deleteFavouriteHandler( item.favouriteName ); }} style={{cursor: "pointer"}}></i>
							</div>
						)}
					</ul>
			</div>
		</nav>
	);
};
