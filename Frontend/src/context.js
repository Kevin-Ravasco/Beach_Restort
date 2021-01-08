import React, { Component } from "react";

const RoomContext = React.createContext();

class RoomProvider extends Component {
	url = "http://127.0.0.1:8001/api/rooms/";
	state = {
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true,
		error: false,
		capacity: "all",
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		minSize: 0,
		maxSize: 0,
		leastSize: 0,
		largestSize: 0,
		breakfast: false,
	};

	getData = () => {
		fetch(this.url)
			.then((response) => {
				if (response.status >= 200 && response.status <= 299) {
					return response.json();
				} else {
					this.setState({ ...this.state, error: false });
				}
			})
			.then((rooms) => {
				const featuredRooms = rooms.filter((room) => room.is_featured === true);
				let maxPrice = Math.max(...rooms.map((item) => item.price));
				let maxSize = Math.max(...rooms.map((item) => item.size));
				let minPrice = Math.min(...rooms.map((item) => item.price));
				let minSize = Math.min(...rooms.map((item) => item.size));
				this.setState({
					rooms,
					featuredRooms,
					sortedRooms: rooms,
					loading: false,
					price: maxPrice,
					maxPrice,
					minPrice,
					minSize,
					maxSize,
					leastSize: minSize,
					largestSize: maxSize,
				});
			})
			.catch((error) => console.log(error));
	};

	componentDidMount() {
		this.getData();
	}

	handleChange = (e) => {
		const target = e.target;
		const name = e.target.name;
		const value = target.type === "checkbox" ? target.checked : target.value;
		this.setState({ [name]: value }, this.filterRooms);
	};

	filterRooms = () => {
		const { rooms, capacity, price, minSize, maxSize, breakfast } = this.state;
		// filter by capacipty
		let tempRooms = [...rooms];
		if (capacity === "all") {
			tempRooms = rooms;
		} else {
			let cap = parseInt(capacity);
			tempRooms = tempRooms.filter((room) => room.capacity === cap);
		}
		// filter by price
		let pric = Math.floor(price);
		tempRooms = tempRooms.filter((room) => room.price <= pric);
		// filter by size
		tempRooms = tempRooms.filter(
			(room) => room.size >= minSize && room.size <= maxSize
		);
		// filter by breakfast
		if (breakfast) {
			tempRooms = tempRooms.filter((room) => room.has_breakfast === breakfast);
		}

		this.setState({
			sortedRooms: tempRooms,
		});
	};

	render() {
		return (
			<RoomContext.Provider
				value={{ ...this.state, handleChange: this.handleChange }}
			>
				{this.props.children}
			</RoomContext.Provider>
		);
	}
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
