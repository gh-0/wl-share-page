import React from 'react';
import deleteImg from '@/assets/内容已经删除@3x.png';

class Delete extends React.Component {
  render() {
    return (
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          height: '100vh',
          padding: '0',
          background: '#fff',
        }}
      >
        <div
          style={{
            width: '5.33rem',
            margin: '0 auto',
            padding: '20vh 0px 0px',
          }}
        >
          <img
            src={deleteImg}
            style={{
              width: '5.33rem',
            }}
          />
          <p
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '0.44rem',
            }}
          >
            内容已经删除
          </p>
        </div>
      </div>
    );
  }
}

export default Delete;
