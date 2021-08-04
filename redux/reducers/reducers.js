import { combineReducers } from "redux";
import {allRoomReducer} from "./RoomReducer"

const reducer = combineReducers({
	allRooms: allRoomReducer
})

export default reducer