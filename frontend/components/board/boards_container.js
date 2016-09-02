import { connect } from 'react-redux';
import BoardActions from '../../actions/board_actions';
import Boards from './boards';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.session.user,
  boards: state.boards.boards,
  pins: state.pins
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: (userId) => dispatch(BoardActions.fetchBoards(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Boards);
