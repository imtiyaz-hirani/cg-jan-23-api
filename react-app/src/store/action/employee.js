export const listEmployee= () => (dispatch) =>{
    fetch('http://localhost:8585/api/employee/all')
    .then(response=> response.json())
    .then(data=> dispatch({type: 'GET_LIST_EMPLOYEE',payload: data}) )
}