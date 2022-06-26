import react from 'react';
import '../style/Test.css'

const Test = (props) => {
  return (
    <div className='test-cont'>
      <img 
        className='test-img' src={require(`../images/test-${props.image}.png`)}
        alt='Emmas photo'
        />
      <div className='test-cont-text'>
        <p className='test-name'>{props.name} in {props.country}</p>
        <p className='test-charge'>{props.charge} at {props.company}</p>
        <p className='test-text'>{props.test}</p>
      </div>
    </div>
  );
}

export default Test