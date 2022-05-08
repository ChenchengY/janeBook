import React, {Component, useEffect} from 'react';
import {DetailWrapper, Header, Content} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import { useParams } from 'react-router-dom';
import { getDetail } from './store/actionCreators';

// class Detail extends Component {

//   render() {
    
//     return (
//       <DetailWrapper>
//       <Header>{this.props.title}</Header>
//       <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
//       </Content>

//       </DetailWrapper>
//     )
//   }
//   componentDidMount() {
//     this.props.getDetail(this.props.match.params.id);
//     }
// }

function Detail(props) {
  const{title, content, getDetail} = props;
  const {id} = useParams();
  useEffect(()=> {
    getDetail(id);
  })
    return (
      <DetailWrapper>
      <Header>{title}</Header>
      <Content dangerouslySetInnerHTML={{__html: content}}>
      </Content>

      </DetailWrapper>
    )
  }
  // componentDidMount() {
  //   this.props.getDetail(this.props.match.params.id);
  //   }


const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail());
  }
})


export default connect(mapState, mapDispatch)(Detail);