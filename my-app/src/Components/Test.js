import react from 'react';
import '../style/Test.css'

const Test = () => {
  return (
    <div className='test-cont'>
      <img 
        className='test-img' src={require('../images/test-emma.png')}
        alt='Emmas photo'
        />
      <div className='test-cont-text'>
        <p className='test-name'>Emma Bostian in Sweden</p>
        <p className='test-charge'>Software Engineer at Spotify</p>
        <p className='test-text'>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
      </div>
    </div>
  );
}

export default Test