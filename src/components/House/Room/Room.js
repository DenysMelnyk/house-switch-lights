import React from "react";

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

export default Room;