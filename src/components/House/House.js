import React, {useEffect} from "react";
import {observer} from "mobx-react";
import Room from "./Room/Room";
import Spinner from "../../UI/Spinner/Spinner";

const House = observer(({state}) => {
        useEffect(() => state.fetchRoomsAction(), [state]);

        const transformedRoomsData = Object.entries(state.rooms);

        const showRooms = transformedRoomsData.map(room => {
            const roomData = room[1];
            return (
                <Room
                    key={roomData.id}
                    roomName={roomData.name}
                    lightSwitchAction={() => state.roomsStateChangeAction(roomData.id)}
                    roomLightStatus={roomData.lightStatus}
                />
            )
        })

        return Object.keys(state.rooms).length !== 0 ? (
            <div className='House'>
                {showRooms}
            </div>
        ) : (
            <>
                    <p className='HouseNotBuilt'>House is not built...</p>
                    <Spinner/>
            </>
        )
    }
)

export default House;