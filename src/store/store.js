import {makeObservable, observable, action} from "mobx";

// Mobx Store
const defaultRooms = {
    kitchen: true,
    bathroom: false,
    livingRoom: true,
    bedroom: false
}

class RoomsStatus {
    rooms = {};

    roomsStateChangeAction(roomName) {
        this.rooms[roomName] = !this.rooms[roomName]
    }

    constructor(rooms) {
        makeObservable(this, {
            rooms: observable,
            roomsStateChangeAction: action
        })
        this.rooms = rooms
    }
}

const store = new RoomsStatus(defaultRooms);

export default store;