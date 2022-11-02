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
              src='/images/IMG-7.jpg'
              text='Explore'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='/images/IMG-2.jpg'
              text='Travel'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/IMG-3.jpg'
              text='Set Sail'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='/images/IMG-4.jpg'
              text='Experience'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='/images/IMG-6.jpg'
              text='Ride'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;