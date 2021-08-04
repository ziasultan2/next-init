import axios from "axios";
import { ALL_ROOM_SUCCESS, ALL_ROOM_FAILS, CLEAR_ERROR } from "../constants/room";

export const getRooms = (req) => async(dispatch) => {
	try {
		const {data} = await axios.get(`https://bookit.vercel.app/api/rooms`)
		console.log(data);
		dispatch({
			type: ALL_ROOM_SUCCESS,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: ALL_ROOM_FAILS,
			payload: error.response.data.message
		})
	}
}

export const clearErrors = () => async(dispatch) =>{
	dispatch({
		type: CLEAR_ERROR
	})
}