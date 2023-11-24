// Service.js
import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <div className="service-container">
      {/* <h2>Dịch vụ của chúng tôi</h2> */}
      <div className="service-buttons">
        <button onClick={() => console.log('Đặt phòng được chọn')}>Đặt phòng</button>
        <button onClick={() => console.log('Đặt vé máy bay được chọn')}>Đặt vé máy bay</button>
        <button onClick={() => console.log('Đặt thuyền được chọn')}>Đặt thuyền</button>
        <button onClick={() => console.log('Đặt lịch được chọn')}>Đặt lịch</button>
        <button onClick={() => console.log('Custom order')}>Anything else?</button>
      </div>
      <h1 className='services'>SERVICES</h1>
    </div>
  );
};

export default Service;
