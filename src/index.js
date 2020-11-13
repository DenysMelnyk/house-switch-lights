import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Container from './UI/Container/Container';
import './index.css';

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

const House = () =>  {

    const [state, setState] = useState({
        rooms: {
            kitchen: true,
            bathroom: false,
            livingRoom: true,
            bedroom: false
        }
    });

    const roomsStateChangeAction = roomName => {
        setState(prevState => {
            const updatedState = {...prevState};
            updatedState.rooms[roomName] = !prevState.rooms[roomName];
            return updatedState;
        })
    }
    const lightSwitchHandler = room => {
        switch (room) {
            case 'kitchen':
                return roomsStateChangeAction('kitchen');
            case 'bathroom':
                return roomsStateChangeAction('bathroom');
            case 'livingRoom':
                return roomsStateChangeAction('livingRoom');
            case 'bedroom':
                return roomsStateChangeAction('bedroom');
            default:
                return this.state;
        }
    }

        return (
                <div className='House'>
                    <Room
                        roomName='Kitchen'
                        lightSwitchAction={() => lightSwitchHandler('kitchen')}
                        roomLightStatus={state.rooms.kitchen}
                    />
                    <Room
                        roomName='Bathroom'
                        lightSwitchAction={() => lightSwitchHandler('bathroom')}
                        roomLightStatus={state.rooms.bathroom}
                    />
                    <Room
                        roomName='Living Room'
                        lightSwitchAction={() => lightSwitchHandler('livingRoom')}
                        roomLightStatus={state.rooms.livingRoom}
                    />
                    <Room
                        roomName='Bedroom'
                        lightSwitchAction={() => lightSwitchHandler('bedroom')}
                        roomLightStatus={state.rooms.bedroom}
                    />
                </div>
        )

}

const HouseWrapper = () => (
    <div className='HouseWrapper'>
        <Container>
            <House/>
        </Container>
    </div>
)


ReactDOM.render(
    <HouseWrapper/>,
    document.getElementById('root')
);

