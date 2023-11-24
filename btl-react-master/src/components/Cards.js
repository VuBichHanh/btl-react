import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the Thac-Ban-Gioc waterfall deep inside the Cao Bang - VietNam'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Island of Phu Quoc - Viet Nam'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the East Sea Viet Nam visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Experience on Top of the Ta-Xua Mountains in VietNam'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-home.jpg'
              text='Admire the majestic beauty of HaLong Bay in VietNam'
              label='Wonders'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
