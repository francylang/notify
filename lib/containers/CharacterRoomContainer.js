import { connect } from 'react-redux';
import CharacterRoom from '../components/CharacterRoom/CharacterRoom.js';


const mapStateToProps = store => ({
  // teacher: store.teacher,
});

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterRoom);
