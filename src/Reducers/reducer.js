import {
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  GET_ANY_USER,
  GET_ANY_USER_SUCCESS,
  GET_ANY_USER_FAILURE,
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILURE,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_MESSAGE_BY_ID_SUCCESS,

  UPLOAD_USER_IMAGE,
  UPLOAD_USER_IMAGE_SUCCESS,
  UPLOAD_USER_IMAGE_FAIL,
  DOWNLOAD_USER_IMAGE,
  DOWNLOAD_USER_IMAGE_SUCCESS,
  DOWNLOAD_USER_IMAGE_FAIL

} from "../Actions/actions";

const initialState = {
  authentication: {
    loginAuthSuccess: false,
    token: null,
    id: ""
  },
  loggedInUser: {
    id: 0,
    username: "",
    displayName: "",
    about: "",
    createdAt: "",
    updatedAt: "",
    messages: []
  },
 
  login: {},
  loginResult: "",
  messages: [],
  register: {},
  registerResult: "", 
  userId: null,
  users: {}
};

const kwitterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return state;
    case DELETE_USER_FAILURE:
      return state;
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        initialState
      };
    case GET_ANY_USER:
      return state;
    case GET_ANY_USER_SUCCESS:
      return {
        ...state,
        users: { ...state.users, [action.data.id]: action.data }
      };
    case GET_ANY_USER_FAILURE:
      return state;
    case GET_MESSAGES:
      return state;
    case GET_MESSAGES_FAILURE:
      return state;
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload.messages
      };
    case GET_USER:
      return state;
    case GET_USER_SUCCESS:
      return {
        ...state,
        loggedInUser: action.data
      };
    case GET_USER_FAILURE:
      return state;
    case LOGIN:
      return state;
    case LOGIN_FAILURE:
      return {
        ...state,
        authentication: {
          loginAuthSuccess: false
        },
        loginResult: action.result
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authentication: {
          loginAuthSuccess: true,
          token: action.payload.token,
          id: action.payload.id
        },
        login: action.login,
        loginResult: action.result
      };
    case LOGOUT:
      return state;
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedInUser: initialState.loggedInUser,
        authentication: initialState.authentication
      };
    case LOGOUT_FAILURE:
      return state;
    case REGISTER:
      return state;  
    case REGISTER_FAILURE:
      return {
        ...state,
        registerResult: action.result
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        register: action.register,
        registerResult: action.result
      };
    case UPDATE_MESSAGE_BY_ID_SUCCESS:
      const newMessages = state.messages.slice();
      newMessages.splice(action.index, 1, action.message);
      return {
        ...state,
        messages: newMessages
      };
    case UPDATE_USER:
      return state;
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loggedInUser: { ...state.loggedInUser, ...action.data }
      };
    case UPDATE_USER_FAILURE:
      return state;

      case UPLOAD_USER_IMAGE:
      return { ...state };

    case UPLOAD_USER_IMAGE_SUCCESS:
      return { ...state, userImageTimestamp: action.userImageTimestamp };

    case UPLOAD_USER_IMAGE_FAIL:
      return { ...state };

    case DOWNLOAD_USER_IMAGE:
      return { ...state };

    case DOWNLOAD_USER_IMAGE_SUCCESS:
      return {
        ...state,
        loggedInUser: { 
          ...state.loggedInUser,
          userImage: action.userImage
        }
      }

    case DOWNLOAD_USER_IMAGE_FAIL:
      return { ...state };


    default:
      return state;
  }
};

export default kwitterReducer;
