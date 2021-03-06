const PinActions = {
  FETCH_ALL_PINS: "FETCH_ALL_PINS",
  FETCH_BOARD_PINS: "FETCH_BOARD_PINS",
  FETCH_SEARCH_PINS: "FETCH_SEARCH_PINS",
  FETCH_PIN: "FETCH_PIN",
  RECEIVE_ALL_PINS: "RECEIVE_ALL_PINS",
  RECEIVE_BOARD_PINS: "RECEIVE_BOARD_PINS",
  FETCH_USER_PINS: "FETCH_USER_PINS",
  RECEIVE_PIN_WITH_CREATE: "RECEIVE_PIN_WITH_CREATE",
  RECEIVE_PIN_WITH_EDIT: "RECEIVE_PIN_WITH_EDIT",
  RECEIVE_PIN_WITH_DELETE: "RECEIVE_PIN_WITH_DELETE",
  RECEIVE_PIN: "RECEIVE_PIN",
  CREATE_PIN: "CREATE_PIN",
  UPDATE_PIN: "UPDATE_PIN",
  DELETE_PIN: "DELETE_PIN",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",

  fetchAllPins: (page) => ({
    type: PinActions.FETCH_ALL_PINS,
    page
  }),

  fetchBoardPins: boardId => ({
    type: PinActions.FETCH_BOARD_PINS,
    boardId
  }),

  fetchSearchPins: keyword => ({
    type: PinActions.FETCH_SEARCH_PINS,
    keyword
  }),

  fetchUserPins: userId => ({
    type: PinActions.FETCH_USER_PINS,
    userId
  }),

  fetchPin: id => ({
    type: PinActions.FETCH_PIN,
    id
  }),

  receiveAllPins: pins => ({
    type: PinActions.RECEIVE_ALL_PINS,
    pins
  }),

  receiveBoardPins: pins => ({
    type: PinActions.RECEIVE_BOARD_PINS,
    pins
  }),

  receivePin: pin => ({
    type: PinActions.RECEIVE_PIN,
    pin
  }),

  receivePinWithCreate: pin => ({
    type: PinActions.RECEIVE_PIN_WITH_CREATE,
    pin
  }),

  receivePinWithEdit: pin => ({
    type: PinActions.RECEIVE_PIN_WITH_EDIT,
    pin
  }),

  receivePinWithDelete: id => ({
    type: PinActions.RECEIVE_PIN_WITH_DELETE,
    id
  }),

  createPin: pin => ({
    type: PinActions.CREATE_PIN,
    pin
  }),

  updatePin: pin => ({
    type: PinActions.UPDATE_PIN,
    pin
  }),

  deletePin: id => ({
    type: PinActions.DELETE_PIN,
    id
  }),

  receiveError: errors => ({
    type: PinActions.RECEIVE_ERRORS,
    errors
  })
};
export default PinActions;
