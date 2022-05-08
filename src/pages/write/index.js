import React, {PureComponent} from 'react';
// import { LoginWrapper, LoginBox, Input, Button } from './style';
import {connect} from 'react-redux';

import {Navigate} from 'react-router-dom';


class Write extends PureComponent {

  render() {
    
  const {loginStatus} = this.props;
  if (loginStatus) {
    return (
      <div>Post an article</div>
    )
  }
  else {
    return <Navigate to='/login'></Navigate>

  }
}
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})





export default connect(mapState, null)(Write);