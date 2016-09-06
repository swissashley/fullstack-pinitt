import { connect } from 'react-redux';
import PinActions from '../../actions/pin_actions';
import UserPins from './pins';

const mapStateToProps = state => {
  return ({
  currentUser: state.session.currentUser,
  pins: state.pins.pins,
  pin: state.pins.pin
});
};

const mapDispatchToProps = dispatch => ({
  fetchAllPins: () => dispatch(PinActions.fetchAllPins()),
  updatePin: (pin) => dispatch(PinActions.updatePin(pin)),
  deletePin: (id) => dispatch(PinActions.deletePin(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPins);
