import React from 'react';
import ReactDOM from 'react-dom';
import Container from './UI/Container/Container';
import './index.css';
import store from "./store/store";
import {observer} from "mobx-react";

const Room = ({lightSwitchAction, roomName, roomLightStatus}) => {
    const lightStatus = roomLightStatus ? 'On' : 'Off';
    const roomLight = roomLightStatus ? 'RoomLightOn' : 'RoomLightOff';
    return (
        <div className={`Room ${roomLight}`}>
            <h2 className='RoomTitle'>{roomName}</h2>
            <p className='RoomLightStatus'>Light: {lightStatus}</p>
            <button className='RoomLightSwitcher' onClick={lightSwitchAction}>
                Switch<span className='ButtonDesktopVisiblePart'> the light</span>!
            </button>
        </div>
    )
}

const House = observer(({state}) =>
    (
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
    ))


const HouseWrapper = () => (
    <div className='HouseWrapper'>
        <Container>
            <House state={store}/>
        </Container>
    </div>
)


ReactDOM.render(
    <HouseWrapper/>,
    document.getElementById('root')
);

