import {action, makeAutoObservable, runInAction} from "mobx";
import axios from 'axios';

class RoomsStatus {
    rooms = {};

    fetchRoomsAction = action('Fetch Rooms Action', () => {
        axios.get('https://house-switch-lights-default-rtdb.firebaseio.com/rooms.json')
            .then(res => runInAction(() => {
                this.rooms = res.data
            })).catch(err => console.log(err.message))
    })

    roomsStateChangeAction = action('Rooms State Change Action', roomName => {
        this.rooms[roomName] = !this.rooms[roomName]
    })

    constructor() {
        makeAutoObservable(this)
    }
}

export default new RoomsStatus();