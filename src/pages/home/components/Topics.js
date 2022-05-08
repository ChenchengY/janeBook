import React, {PureComponent} from 'react';
import {TopicWrapper, TopicItem} from '../style';
import {connect} from 'react-redux';


class Topic extends PureComponent {
  render() {
    const {list} = this.props;
    return (
      <TopicWrapper>
      {
        list.map((item) => {
          return (
            <TopicItem key={item.get('id')}>
            <img
                className='topic-pic'
                src={item.get('imgUrl')} />
            {item.get('title')}
            </TopicItem>
          )
        })
      }
      {/* <TopicItem>
            <img
                className='topic-pic'
                src= 'https://www.currentschoolnews.com/wp-content/uploads/2020/07/Topics-Social-Issue-Essay-1024x400-1.png'/>
              social
        </TopicItem> */}
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.get('home').get('topicList')
});

export default connect(mapState, null)(Topic);