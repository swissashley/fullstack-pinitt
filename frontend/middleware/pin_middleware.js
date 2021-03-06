import PinActions from '../actions/pin_actions';
import BoardActions from '../actions/board_actions';
import { hashHistory } from 'react-router';

import { fetchAllPins,
  fetchBoardPins,
  fetchSearchPins,
  fetchUserPins,
  fetchPin,
  createPin,
  updatePin,
  deletePin } from '../util/pin_api_util';

export default ({getState, dispatch}) => next => action => {
  const receiveAllPinsOnSuccess = pins => dispatch(PinActions.receiveAllPins(pins));
  const receiveBoardPinsOnSuccess = pins => dispatch(PinActions.receiveBoardPins(pins));
  const receivePinWithCreateOnSuccess = pin => {
    dispatch(PinActions.receivePinWithCreate(pin));
    dispatch(BoardActions.fetchBoard(pin.board.id));
    dispatch(BoardActions.fetchBoards(pin.user.id));
    hashHistory.push(`boards/${pin.board.id}`);
  };
  const receivePinWithEditOnSuccess = pin => dispatch(PinActions.receivePinWithEdit(pin));
  const receivePinWithDeleteOnSuccess = id => dispatch(PinActions.receivePinWithDelete(id));

  const receivePinOnSuccess = pin => dispatch(PinActions.receivePin(pin));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(PinActions.receiveErrors(errors));
  };
  switch(action.type){
    case PinActions.FETCH_ALL_PINS:
      fetchAllPins(action.page, receiveAllPinsOnSuccess, errorCallback);
      return next(action);

    case PinActions.FETCH_BOARD_PINS:
      fetchBoardPins(action.boardId, receiveBoardPinsOnSuccess, errorCallback);
      return next(action);

    case PinActions.FETCH_SEARCH_PINS:
      fetchSearchPins(action.keyword, receiveBoardPinsOnSuccess, errorCallback);
      return next(action);

    case PinActions.FETCH_USER_PINS:
      fetchUserPins(action.userId, receiveBoardPinsOnSuccess, errorCallback);
      return next(action);

    case PinActions.FETCH_PIN:
      fetchPin(action.id, receivePinOnSuccess, errorCallback);
      return next(action);

    case PinActions.CREATE_PIN:
      createPin(action.pin, receivePinWithCreateOnSuccess, errorCallback);
      break;

    case PinActions.UPDATE_PIN:
      updatePin(action.pin, receivePinWithEditOnSuccess, errorCallback);
      break;

    case PinActions.DELETE_PIN:
      deletePin(action.id, receivePinWithDeleteOnSuccess, errorCallback);
      break;

    default:
      return next(action);

  }
};
