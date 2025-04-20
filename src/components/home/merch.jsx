import './merch.css'; 
import img1 from './merchpics/merch.jpg'
import img2 from './merchpics/merch2.jpg'


const MerchandiseComponent = () => {
  return (
    <>
      <div className='title'><p className="title-info">Be the Talk, Wear the Merch!</p></div>
      <div className="merch-container">
          <div className="merch-item" >
            <a href='https://bit.ly/3WqJ3lc' target='_blank'>
             <img src={img1} alt="Merchandise" className="merch-image"/>
            </a>
          </div>
          <div className="merch-item">
            <a href='https://bit.ly/3WqJ3lc' target='_blank'>
             <img src={img2} alt="Merchandise" className="merch-image"/>
            </a>
          </div>
      </div>
      <div className="button-merch">
        <a href='https://bit.ly/3WqJ3lc' target='_blank' >
           Grab Your Merch!
        </a>
      </div>
    </>
  );
};

export default MerchandiseComponent;
