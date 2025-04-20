import img1 from './pics/img1.jpg'
import styles from './AboutUss.css'
import AboutTed from '../../components/aboutus/AboutTed';
const AboutUs = () => {
    return (
      <>
          <AboutTed/>
           <div className='title'>
                <h1>The world of TED</h1>
                <p>About TED,TEDx and TEDxIITGuwahati</p>
           </div>

           <div className='ted'>

                <div className='tedinfo'>
                        <div className='subtitle'><h2>About TED</h2></div>
                        <p>TED, founded in 1984, is a global community dedicated to sharing "ideas worth spreading." Owned by a nonprofit foundation, TED aims to make great ideas accessible and spark meaningful conversations. Through its TEDx program, local communities and organizations can host TED-like events to foster connection and dialogue.</p>
                </div>
                <div ><img className='tedpic'  src={img1}></img></div>
                
           </div>

           <div className='tedx'>
                
                <div ><img className='tedxpic'  src={img1}></img></div>
                <div className='tedxinfo'>
                        <div className='subtitle'><h2>About TEDx</h2></div>
                        <p>Since 1984, TED has been a global platform for "ideas worth spreading," uniting people from all disciplines and cultures to foster understanding. Owned by a nonprofit foundation, TED believes in the power of ideas to transform lives and the world. Its TEDx program empowers communities to host local TED-like events, sparking conversation and connection.</p>
                </div>
                
                
           </div>

           <div className='tedxiitg'>

                <div className='tedxiitginfo'>
                        <div className='subtitle'><h2>About TEDxIITGuwahati</h2></div>
                        <p>TEDxIITGuwahati, launched in 2016, is an annual event organized by IIT Guwahati students. Run by passionate volunteers, it offers a TED-like experience, fostering dialogue and collaboration through engaging talks and interactive sessions for the IIT Guwahati and wider Indian communities.</p>
                </div>
                <div><img className='tedxiitgpic'  src={img1}></img></div>
                
           </div>
               <div className='button'> <a href='https://youtu.be/d0NHOpeczUU?si=9Weqhola-QH18VzO' target='_blank'><button class="btn">Know more</button></a></div>
               
            
          </>
    );
  }
  
  export default AboutUs;