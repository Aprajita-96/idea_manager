
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

const obj = {
	fetching:false,
	idea: null,
	error:null
}


export function listReducer  (state = obj, action)  {
	switch (action.type) {
		case API_CALL_REQUEST:
		  return { ...state, fetching: true, error: null };
	
		case API_CALL_SUCCESS:
		  return {  fetching: false, idea: action.idea };
	
		case API_CALL_FAILURE:
		  return { ...state, fetching: false, idea: null, error: action.error };
	
		default:
		  return state;
	}
}


