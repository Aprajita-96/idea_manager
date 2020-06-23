import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchlist);
    const idea = response.data;
    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", idea });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

// function that returns api response
function fetchlist() {
  return axios({
    method: "get",
    url: "http://localhost:8080/listIdea",
    headers:{
        'Content-Type': 'application/json;charset=utf-8',
        "Access-Control-Allow-Origin": "*",

    }      
  });
}

function listIdeas() {
	fetch("http://localhost:8080/listIdea", {
		method: 'GET',
		headers: {
		  'Content-Type': 'application/json;charset=utf-8'
		},
	})
	.then(response => {
		response.status == 200 ? 
		console.log(response.data) : 
		this.setState({errorMessage: 'UserName or Password Incorrect!'})
	})
	.catch(this.setState({ errorMessage: 'Error Occured' }));
 }
