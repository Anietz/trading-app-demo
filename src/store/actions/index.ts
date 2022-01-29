export function setLoginStatus(data:boolean){
  return {
    type: "SET_LOGIN_STATUS",
    payload: data,
  };
}

export function setModalStatus(data:boolean){
  return {
    type: "SET_MODAL_STATUS",
    payload: data,
  };
}