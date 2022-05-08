import React, {PureComponent} from 'react';
import {HomeLeft, HomeWrapper, HomeRight} from './style';
import Topic from './components/Topics';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {BackTop} from './style';

class Home extends PureComponent {

  handleScrllTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src='https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'></img>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
        <Recommend />
        <Writer />
        </HomeRight>
        
          {this.props.showScroll ? <BackTop onClick={this.handleScrllTop}>Back to Top</BackTop> : null}
        
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvent();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollShow);
  }

  bindEvent() {
    window.addEventListener('scroll', this.props.changeScrollShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfor();
    dispatch(action);
  },
  changeScrollShow() {
    if(document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    }else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
});

export default connect(mapState, mapDispatch)(Home);