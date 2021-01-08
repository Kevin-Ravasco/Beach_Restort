import React from "react";
import Room from "./Room";
export default function RoomList({ rooms }) {
	console.log(rooms);
	if (rooms.length === 0) {
		return (
			<div className="empty-search">
				<h3>Unfortunately no rooms matched your search parameters</h3>
			</div>
		);
	}
	return (
		<section className="roomslist">
			<div className="roomslist-center">
				{rooms.map((room) => {
					return <Room key={room.id} room={room} />;
				})}
			</div>
		</section>
	);
}
