import {action, makeAutoObservable, runInAction, toJS} from "mobx";
import axios from 'axios';

class RoomsStatus {
    rooms = {};

    fetchRoomsAction = action('Fetch Rooms Action', () => {
        axios.get('https://house-switch-lights-default-rtdb.firebaseio.com/rooms.json')
            .then(res => runInAction(() => {
                this.rooms = toJS(res.data)
            })).catch(err => runInAction(() => {
            console.log(err.message)
        }))
    })

    roomsStateChangeAction = action('Rooms State Change Action', roomName => {
        this.rooms[roomName].lightStatus = !this.rooms[roomName].lightStatus
    })

    constructor() {
        makeAutoObservable(this)
    }
}

export default new RoomsStatus();