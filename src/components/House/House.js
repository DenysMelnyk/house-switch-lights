import React, {useEffect} from "react";
import {observer} from "mobx-react";
import Room from "./Room/Room";

const House = observer(({state}) => {
        useEffect(() => state.fetchRoomsAction(), [state]);
        return (
            <div className='House'>
                <Room
                    roomName='Kitchen'
                    lightSwitchAction={() => state.roomsStateChangeAction('kitchen')}
                    roomLightStatus={state.rooms.kitchen}
                />
                <Room
                    roomName='Bathroom'
                    lightSwitchAction={() => state.roomsStateChangeAction('bathroom')}
                    roomLightStatus={state.rooms.bathroom}
                />
                <Room
                    roomName='Living Room'
                    lightSwitchAction={() => state.roomsStateChangeAction('livingRoom')}
                    roomLightStatus={state.rooms.livingRoom}
                />
                <Room
                    roomName='Bedroom'
                    lightSwitchAction={() => state.roomsStateChangeAction('bedroom')}
                    roomLightStatus={state.rooms.bedroom}
                />
            </div>
        )
    }
)

export default House;