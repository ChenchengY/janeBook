import React, {Component} from "react";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, 
  Addition, Button, SearchInfoSwitch,SearchInfoTitle,
  SearchWrapper, SearchInfo, SearchInfoItem, SearchInfoList} from "./style";
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators}  from './store';
import { render } from "@testing-library/react";
import {Link} from 'react-router-dom';




class Header extends Component {

  getListArea() {
    const {focused, list, page, totalPage, mouseIn, handleChangePage, handleMouseEnter, handleMouseLeave} = this.props;
    const jsList = list.toJS();
    const pageList = [];
    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (jsList[i])
          pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>)
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo 
        onMouseEnter = {handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
              <SearchInfoTitle>
              Trending
              <SearchInfoSwitch
              onClick={()=>handleChangePage(page,totalPage)}>Other Trending</SearchInfoSwitch>
              </SearchInfoTitle>
              <SearchInfoList>
              {
                pageList
              }
                
  
                </SearchInfoList>
              
            </SearchInfo>
  
      )
    }
    else return null;
  }


  render() {
    const{focused, handleInputBlur, handleInputFocus, list} = this.props;
    return (
      <HeaderWrapper>
      <Link to='/'>
      <Logo />
      </Link>
    <Nav> 
      <NavItem className='left active'>Home Page</NavItem>
      <NavItem className='left'>Download App</NavItem>
      <NavItem className='right'>Sign in</NavItem>
      <NavItem className='right'>
      <i className="iconfont">&#xe636;</i>
      </NavItem>
      <SearchWrapper>
      <CSSTransition
      in={focused}
      timeout={200}
      classNames="slide"
      >
      <NavSearch 
      className={focused ? 'focused': ''}
      onFocus={()=>handleInputFocus(list)}
      onBlur={handleInputBlur}
      ></NavSearch>
      </CSSTransition>
      <i className={focused ? 'focused iconfont': 'iconfont'}>&#xe653;</i>
      {this.getListArea()}
      </SearchWrapper>
    </Nav>
    <Addition>
      <Button className='reg'>Sign Up</Button>
      <Button className='writting'>
      <i className='iconfont'>&#xe602;</i>
      Write Something
      </Button>
      
     


    </Addition>
  </HeaderWrapper>
    )
  }
    
}




const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage'])

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) dispatch(actionCreators.pageChange(page+ 1))
      else dispatch(actionCreators.pageChange(1));
      
    }


  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);