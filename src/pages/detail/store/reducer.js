// import * as constants from './constants';
import {fromJS, set} from 'immutable';
import * as constants from './constants';

const defaultState= fromJS({
  title: 'How the Supreme Court went from cementing abortion rights in Roe v. Wade to drafting their demise',
  content:'<img src="https://image.cnbcfm.com/api/v1/image/107055105-1651582429832-Screen_Shot_2022-05-03_at_85314_AM.png?v=1651582478&ffmt=webp"></img><p>Chief Justice John Roberts noted that the first draft, penned by conservative Justice Samuel Alito and reportedly circulated in February, does not represent a final decision in the case. But the early leak of an opinion that would upend nearly 50 years of precedent nevertheless represents the culmination of decades-long efforts by activists and lawmakers to challenge abortion at all levels, from the individual to the constitutional.</p><p>In his 98-page draft opinion, Alito looked to the history of abortion policies in the U.S. to bolster his conclusion that Roe and Casey “must be overruled.”</p><p>Abortion is not a constitutionally protected right, Alito wrote, pointing out that the Constitution itself makes no reference to abortion. While he acknowledged that the court has interpreted the 14th Amendment to guarantee some rights that are not explicitly spelled out, Alito cited precedent stating that those rights must be deeply rooted in U.S. traditions and “implicit in the concept of ordered liberty.”</p>'
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
      
    default:
          return state;
  }
} 