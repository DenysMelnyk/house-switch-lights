import React, {useEffect} from "react";
import {observer} from "mobx-react";
import Room from "./Room/Room";

const House = observer(({state}) => {
        useEffect(() => state.fetchRoomsAction(), [state]);


        return (
            <div className='House'>
                <Room
                    roomName='Living Room'
                    lightSwitchAction={() => state.roomsStateChangeAction('livingRoom')}
                    roomLightStatus={state.rooms.livingRoom.lightStatus}
                />
                <Room
                    roomName='Bedroom'
                    lightSwitchAction={() => state.roomsStateChangeAction('bedroom')}
                    roomLightStatus={state.rooms.bedroom.lightStatus}
                />
                <Room
                    roomName='Kitchen'
                    lightSwitchAction={() => state.roomsStateChangeAction('kitchen')}
                    roomLightStatus={state.rooms.kitchen.lightStatus}
                />
                <Room
                    roomName='Bathroom'
                    lightSwitchAction={() => state.roomsStateChangeAction('bathroom')}
                    roomLightStatus={state.rooms.bathroom.lightStatus}
                />
            </div>
        )
    }
)

export default House;