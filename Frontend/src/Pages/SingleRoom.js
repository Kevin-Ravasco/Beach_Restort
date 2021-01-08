import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Loading from "../components/Loading";
import { RoomContext } from "../context";
import Error from "../Pages/Error";

export default class SingleRoom extends Component {
	static contextType = RoomContext;
	constructor(props) {
		super(props);
		this.state = {
			slug: this.props.match.params.slug,
			loading: true,
			is_error: false,
			room: "",
		};
	}

	getRoom = () => {
		const url = `http://127.0.0.1:8001/api/rooms/${this.state.slug}/`;
		fetch(url)
			.then((response) => {
				if (response.status >= 200 && response.status <= 299) {
					return response.json();
				} else {
					this.setState({ ...this.state, loading: false, is_error: true });
					return;
				}
			})
			.then((data) => {
				this.setState({
					...this.state,
					loading: false,
					room: data,
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({ ...this.state, loading: false, is_error: false });
			});
	};
	componentDidMount() {
		this.getRoom();
	}

	render() {
		if (this.state.is_error) {
			return <Error />;
		}
		const {
			name,
			image1,
			image2,
			image3,
			price,
			size,
			capacity,
			has_breakfast,
			details,
		} = this.state.room;
		return (
			<>
				{this.state.loading ? (
					<Loading />
				) : (
					<>
						<Hero hero="roomsHero">
							<Banner title={`${name} room`}>
								<Link to="/rooms/" className="btn-primary">
									back to rooms
								</Link>
							</Banner>
						</Hero>
						<section className="single-room">
							<div className="single-room-images">
								<img src={image2} alt={name} />
								<img src={image3} alt={name} />
								<img src={image1} alt={name} />
							</div>
							<div className="single-room-info">
								<article className="desc">
									<h3>details</h3>
									<p>{details}</p>
								</article>
								<article className="info">
									<h3>info</h3>
									<h6>Price: Kshs. {price}</h6>
									<h6>size: {size} SQFT</h6>
									<h6>
										Max Capacity: {capacity}{" "}
										{capacity > 1 ? "people" : "person"}
									</h6>
									<h6>{has_breakfast && "Free breakfast included"}</h6>
								</article>
							</div>
						</section>
					</>
				)}
			</>
		);
	}
}
