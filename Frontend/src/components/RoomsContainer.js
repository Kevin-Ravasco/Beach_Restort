import React from "react";
import RoomList from "./RoomList";
import RoomsFilter from "./RoomsFilter";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomsContainer() {
	return (
		<RoomConsumer>
			{(value) => {
				const { loading, sortedRooms, rooms } = value;
				if (loading) {
					return <Loading />;
				}
				return (
					<div>
						<RoomsFilter rooms={rooms} />
						<RoomList rooms={sortedRooms} />
					</div>
				);
			}}
		</RoomConsumer>
	);
}
