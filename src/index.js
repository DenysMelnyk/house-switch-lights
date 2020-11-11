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
            <button className='RoomLightSwitcher' onClick={lightSwitchAction}>Switch the Light!</button>
        </div>
    )
}

class House extends React.Component {
    state = {
        kitchen: true,
        bathroom: false,
        livingRoom: true,
        bedroom: false
    }
    lightSwitchHandler = room => {
        switch (room) {
            case 'kitchen':
                return this.setState(prevState => (
                    {kitchen: !prevState.kitchen}
                ));
            case 'bathroom':
                return this.setState(prevState => (
                    {bathroom: !prevState.bathroom}
                ));
            case 'livingRoom':
                return this.setState(prevState => (
                    {livingRoom: !prevState.livingRoom}
                ));
            case 'bedroom':
                return this.setState(prevState => (
                    {bedroom: !prevState.bedroom}
                ));
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
                        roomLightStatus={this.state.kitchen}
                    />
                    <Room
                        roomName='Bathroom'
                        lightSwitchAction={() => this.lightSwitchHandler('bathroom')}
                        roomLightStatus={this.state.bathroom}
                    />
                    <Room
                        roomName='Living Room'
                        lightSwitchAction={() => this.lightSwitchHandler('livingRoom')}
                        roomLightStatus={this.state.livingRoom}
                    />
                    <Room
                        roomName='Bedroom'
                        lightSwitchAction={() => this.lightSwitchHandler('bedroom')}
                        roomLightStatus={this.state.bedroom}
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

