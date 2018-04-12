import axios from 'axios'

export const FETCH_USERS = 'fetch_users'
export const fetchUsers = () => async dispatch => {

    const URL_USERS = 'https://react-ssr-api.herokuapp.com/users'
    const response = await axios(URL_USERS)

    dispatch({
        type: FETCH_USERS,
        payload: response
    })
}