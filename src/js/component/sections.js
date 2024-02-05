import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card";

export const Sections = () => {

    const {store, actions} = useContext(Context);

	useEffect(() => {
		actions.getPeople();
        actions.getVehicles();
        actions.getPlanets();
	},[]);
    
    return (

        <div className="row gy-5">
            <h1>Characters</h1>
            <div className="list-group d-flex flex-row overflow-auto py-4">
                <div className="d-flex"> { store.peopleElements.map((item, index) => <Card key={index} data={item}/>) };
                </div>
            </div>

            <h1>Vehicles</h1>
            <div className="list-group d-flex flex-row overflow-auto py-4">
                <div className="d-flex"> { store.vehiclesElements.map((item, index) => <Card key={index} data={item}/>) };
                </div>
            </div>

            <h1>Planets</h1>
            <div className="list-group d-flex flex-row overflow-auto py-4">
                <div className="d-flex"> { store.planetsElements.map((item, index) => <Card key={index} data={item} elementId={item.uid}/>) };
                </div>
            </div>
        </div>

    );
    
}