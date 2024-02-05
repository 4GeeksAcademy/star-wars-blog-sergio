import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Details } from "../component/details"

export const LearnMore = () => {

	const { store, actions } = useContext(Context);
	const { type, uid } = useParams();

	return (
		<div>
			<Details type={type} uid={uid}/>
		</div>
	);
};
