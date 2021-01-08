import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

const getUnique = (items, value) => {
	return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter() {
	const context = useContext(RoomContext);
	const {
		rooms,
		handleChange,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		leastSize,
		largestSize,
		breakfast,
	} = context;

	let people = getUnique(rooms, "capacity");
	people = ["all", ...people];
	people = people.map((item, index) => {
		return (
			<option key={index} value={item}>
				{item}
			</option>
		);
	});
	return (
		<section className="filter-container">
			<Title title="search rooms" />
			<form className="filter-form">
				{/* guests  */}
				<div className="form-group">
					<label htmlFor="capacity">Guests</label>
					<select
						name="capacity"
						id="capacity"
						value={capacity}
						onChange={handleChange}
						className="form-control"
					>
						{people}
					</select>
				</div>
				{/* end guests */}
				{/* room price */}
				<div className="form-group">
					<label htmlFor="price">Room Price Kshs.{price}</label>
					<input
						type="range"
						name="price"
						min={minPrice}
						max={maxPrice}
						id="price"
						value={price}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				{/* end room price */}
				{/* size */}
				<div className="form-group">
					<label htmlFor="size">Room size</label>
					<div className="size-inputs">
						<input
							type="number"
							name="minSize"
							id="size"
							value={minSize}
							min={leastSize}
							onChange={handleChange}
							className="size-input"
						/>
						<input
							type="number"
							name="maxSize"
							id="size"
							value={maxSize}
							max={largestSize}
							onChange={handleChange}
							className="size-input"
						/>
					</div>
				</div>
				{/* end of size */}
				{/* extras */}
				<div className="form-group">
					<label htmlFor="breakfast">breakfast</label>
					<input
						type="checkbox"
						name="breakfast"
						id="breakfast"
						checked={breakfast}
						onChange={handleChange}
					/>
				</div>
				{/* end of extras */}
			</form>
		</section>
	);
}
