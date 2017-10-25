import { Route } from 'react-router-dom';


export default class Routes extends Component {

  render() {
    return (
      <div className="routes">
        <Route path="/" component={ HeaderContainer }/>
        <Route exact path="/" component={ Classroom }/>
        <Route path="/character" component={ Character }/>
      </div>
    );
  }
}
