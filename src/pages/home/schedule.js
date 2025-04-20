import styles from './schedule.css'
import red from './pics/red.jpg'
const Schedule = () => {
  return (
  
      <div className="timeline">
        <div className="container left-container">
          <img src={red}></img>
          <div className="text-box">
            <h2>Alphabet 1</h2>
            <small>2011</small>
            <p>lorem</p>
            <span className='left-container-arrow'></span>
          </div>
        </div>
      

      
        <div className="container right-container">
          <img src={red}></img>
          <div className="text-box">
            <h2>Alphabet 2</h2>
            <small>2012</small>
            <p>lorem</p>
            <span className='right-container-arrow'></span>
          </div>
        </div>
      

      
        <div className="container left-container">
          <img src={red}></img>
          <div className="text-box">
            <h2>Alphabet 3</h2>
            <small>2013</small>
            <p>lorem</p>
            <span className='left-container-arrow'></span>
          </div>
        </div>
      
      
        <div className="container right-container">
          <img src={red}></img>
          <div className="text-box">
            <h2>Alphabet 4</h2>
            <small>2014</small>
            <p>lorem</p>
            <span className='right-container-arrow'></span>
          </div>
        </div>
      
        <div className="container left-container">
          <img src={red}></img>
          <div className="text-box">
            <h2>Alphabet 5</h2>
            <small>2015</small>
            <p>lorem</p>
            <span className='left-container-arrow'></span>
          </div>
        </div>
      </div>
  
  );
}
export default Schedule