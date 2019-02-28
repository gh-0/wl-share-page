import React from 'react';
import VoteItem from './VoteItem';
import openApp from '@/utils/open-app';

class Vote extends React.Component {
  render() {
    const { voteVo } = this.props;
    const { option, vote, total } = voteVo;
    return (
      <div onClick={openApp}>
        {option.map((o, ind) => (
          <VoteItem
            color={ind === 0 ? '#FF4050' : '#000'}
            borderColor={ind === 0 ? '#FF4050' : '#DDD'}
            progressColor={ind === 0 ? '#FFE6E8' : ind === 1 ? '#DDD' : '#F5F5F7'}
            ind={ind}
            key={o.optionId}
            {...o}
            vote={vote}
            total={total}
          />
        ))}
      </div>
    );
  }
}

export default Vote;
