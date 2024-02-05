import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = ({ data }) => {

    const {store, actions} = useContext(Context);
    const [detailUrl, setDetailUrl] = useState("");
    
	useEffect(() => {
		if (data.url.includes("people")) {
            setDetailUrl("people/" + data.uid);
		} else if (data.url.includes("vehicles")) {
            setDetailUrl("vehicles/" + data.uid);
		} else {
            setDetailUrl("planets/" + data.uid);
		} ;
    },[])

    

    return (      
        <div className="card mx-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://pics.craiyon.com/2023-06-04/eb8a6464825c468da3d44af959f63221.webp" alt="..."/>
            <div className="card-body d-flex flex-column justify-content-around">
                <h5 className="card-title">{ data.name }</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <Link className="btn btn-outline-primary" to={"/learn-more/" + detailUrl}> Learn more! </Link>
                    <i className="fa fa-2x fa-heart" onClick={() => actions.addFavouriteHandler(data.name, detailUrl) } style={{color: store.favourites.find((element) => element.favouriteName === data.name) ? "red" : "#ffc107", cursor: "pointer"}}></i>
                </div>
            </div> 
        </div>  
    );
    
}
