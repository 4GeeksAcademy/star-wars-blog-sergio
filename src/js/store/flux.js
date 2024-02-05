const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleElements: [],
			vehiclesElements: [],
			planetsElements: [],
			details: {},
			favourites: [],
			totalFavourites: 0
		},
		actions: {
			getPeople: () => {
				fetch(`https://www.swapi.tech/api/people`)
				.then(res => res.json())
				.then(data => {
					setStore({peopleElements: data.results});
				})
				.catch(err => console.error(err))
			},

			getVehicles: () => {
				fetch(`https://www.swapi.tech/api/vehicles`)
				.then(res => res.json())
				.then(data => {
					setStore({vehiclesElements: data.results});
				})
				.catch(err => console.error(err))
			},

			getPlanets: () => {
				fetch(`https://www.swapi.tech/api/planets`)
				.then(res => res.json())
				.then(data => {
					setStore({planetsElements: data.results});
				})
				.catch(err => console.error(err))
			},

			// getAllElements: () => { Promise.all([
			// 	fetch(`https://www.swapi.tech/api/people/`),
			// 	fetch(`https://www.swapi.tech/api/vehicles/`),
			// 	fetch(`https://www.swapi.tech/api/planets/`)
			// ])	
			// 	.then(responses => Promise.all(responses.map(res => res.json())))
			// 	.then(data => {
			// 		data.forEach(item => console.log(item.results))
			// 	})
			// 	.catch((err) => {
			// 		console.log(err);
			// })},

			getDetails: (type, id) => {
				console.log(type, id);
				fetch(`https://www.swapi.tech/api/${type}/${id}`)
				.then(res => res.json())
				.then(data => {
					setStore({details: data.result.properties});
				})
				.catch(err => console.error(err))
			},

			addFavouriteHandler: ( name, url ) => {
				if (getStore().favourites.find((element) => element.favouriteName == name)) {

				} else {
					console.log(getStore().favourites.length);
					const favouriteSelected = {
						favouriteName: name,
						favouriteUrl: url
					};
					const favouritesArray = [...getStore().favourites, favouriteSelected];
					setStore({favourites: favouritesArray});
					setStore({totalFavourites: favouritesArray.length});
				}
			},

			deleteFavouriteHandler: ( name ) => {
				const favouritesArray = getStore().favourites.filter((element) => element.favouriteName != name);
				setStore({favourites: favouritesArray});
				setStore({totalFavourites: favouritesArray.length});
			}

		}
	};
};

export default getState;
