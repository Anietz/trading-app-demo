let initialState = {
    isLogin: false,
    modalStatus: false,
    user: {
        email: ''
    }
}

export default function loginReducer(state=initialState, action:any) {
  switch (action.type) {
    case "SET_LOGIN_STATUS": {
      return {...state, isLogin:action.payload.isLogin,modalStatus:action.payload.modalStatus,user:action.payload.user};
    }

    case "SET_MODAL_STATUS": {
      return {...state, modalStatus:action.payload};
    }

    case "SET_LOGOUT": {
      return {...state, isLogin:false};
    }

    default:
      return state;
  }
}