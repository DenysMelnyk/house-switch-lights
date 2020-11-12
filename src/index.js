import React from 'react';
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

class House extends React.Component {
    state = {
        rooms: {
            kitchen: true,
            bathroom: false,
            livingRoom: true,
            bedroom: false
        }
    }
    roomsStateChangeAction = roomName => {
        this.setState(prevState => {
            const updatedState = {...prevState};
            updatedState.rooms[roomName] = !prevState.rooms[roomName];
            return updatedState;
        })
    }
    lightSwitchHandler = room => {
        switch (room) {
            case 'kitchen':
                return this.roomsStateChangeAction('kitchen');
            case 'bathroom':
                return this.roomsStateChangeAction('bathroom');
            case 'livingRoom':
                return this.roomsStateChangeAction('livingRoom');
            case 'bedroom':
                return this.roomsStateChangeAction('bedroom');
            default:
                return this.state;
        }
    }
    render() {
        return (
                <div className='House'>
                    <Room
                        roomName='Kitchen'
                        lightSwitchAction={() => this.lightSwitchHandler('kitchen')}
                        roomLightStatus={this.state.rooms.kitchen}
                    />
                    <Room
                        roomName='Bathroom'
                        lightSwitchAction={() => this.lightSwitchHandler('bathroom')}
                        roomLightStatus={this.state.rooms.bathroom}
                    />
                    <Room
                        roomName='Living Room'
                        lightSwitchAction={() => this.lightSwitchHandler('livingRoom')}
                        roomLightStatus={this.state.rooms.livingRoom}
                    />
                    <Room
                        roomName='Bedroom'
                        lightSwitchAction={() => this.lightSwitchHandler('bedroom')}
                        roomLightStatus={this.state.rooms.bedroom}
                    />
                </div>

        )
    }
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

