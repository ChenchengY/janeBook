import React, {PureComponent} from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import {connect} from 'react-redux';
import { actionCreators } from './store';
import {Navigate} from 'react-router-dom';


class Login extends PureComponent {

  render() {
    
  const {loginStatus} = this.props;
  if (!loginStatus) {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="Account" ref = {(input)=>{this.account = input}}></Input>
          <Input placeholder='Password' type='password' ref={(input)=>{
            this.password=input}}></Input>
          <Button onClick={()=>this.props.login(this.account, this.password)}>Login</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
  else {
    return <Navigate to='/' />

  }
    

  }
}


const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})


const mapDispatch = (dispatch) => ({
  login(accountEle, passwordEle) {
    // console.log(accountEle.value, passwordEle.value)
    dispatch(actionCreators.login(accountEle.value, passwordEle.value));
  }
})


export default connect(mapState, mapDispatch)(Login);