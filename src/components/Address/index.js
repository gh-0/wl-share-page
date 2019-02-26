import React from 'react';
import localIcon from '@/assets/ic_tweet_detail_location_n@svg.svg';
import styles from './styles.css';

class Address extends React.Component {
  render() {
    const { address, distance } = this.props;
    return (
      <div className="clearfix">
        <div className={styles.address}>
          <img src={localIcon} />
          <span>{distance ? `${distance} ${address}` : address}</span>
        </div>
      </div>
    );
  }
}

export default Address;
