import p1 from './pics/blog1_1.jpg';
import p2 from './pics/blog2.jpg';
import p3 from './pics/blog3.jpg';
import p4 from './pics/blog4_1.jpg';
import p5 from './pics/blog5_1.jpg';
import p6 from './pics/blog6_1.jpg';
import styles from "./Blogs.css";

const Blogs = () => {
     return(
          <>
              <div className="maintitle">
                 <p>Our Recent Blogs</p>
              </div>
              <div className='blogs'>
                    
                    <a className='blog' href='https://tedxiitguwahati.medium.com/pursuing-the-elusive-calm-in-the-mysterious-labyrinth-of-life-23b85f328d16' target='_blank'>
                         <img src={p1} className='p1'></img>
                         <p className='title'>Pursuing the Elusive Calm in the Mysterious Labyrinth of Life</p>
                         <p className='blogInfo'>Prioritize mental well-being to foster peace and embrace life's journey.</p>
                         
                    </a>
                    
                    <a className='blog' href='https://tedxiitguwahati.medium.com/the-curious-case-of-japans-vanishing-act-5b14977324c8' target='_blank'> 
                         <img src={p2} className='p1'></img>
                         <p className='title'>The Curious Case of Japan's Vanishing Act:</p>
                         <p className='blogInfo'>Japan's deliberate disappearances, balancing reinvention and emotional fallout.</p>
                    </a>
                    
                    <a className='blog' href='https://tedxiitguwahati.medium.com/has-the-beautiful-game-lost-its-flair-ebc9a2b6bec1' target='_blank'>

                         <img src={p3} className='p1'></img>
                         <p className='title'>Has the 'Beautiful Game' Lost its flair?</p>
                         <p className='blogInfo'>Football's shift: from artistry to athleticism, driven by profit and packed schedules.</p>

                    </a>
                    
                    
                    <a className='blog' href='https://tedxiitguwahati.medium.com/gen-z-and-the-rise-of-influencer-culture-5d9d45f534a4' target='_blank'>

                         <img src={p4} className='p1'></img>
                         <p className='title'>Gen Z And The Rise Of Influencer Culture</p>
                         <p className='blogInfo'>Connecting Gen Z while fueling cyberbullying and mental health challenges.</p>
                    </a>
                    
                    <a className='blog' href='https://tedxiitguwahati.medium.com/game-on-or-game-over-fa81214a4f47' target='_blank'> 

                         <img src={p5} className='p1'></img>
                         <p className='title'>Game On Or Game Over?</p>
                         <p className='blogInfo'>Esports offers rewards but intense pressure; moderate gaming can boost well-being.</p>

                    </a>
                    
                    <a className='blog' href='https://tedxiitguwahati.medium.com/do-aliens-exist-cd682f0dc7be' target='_blank'>

                         <img src={p6} className='p1'></img>
                         <p className='title'>Do Aliens Exist?</p>
                         <p className='blogInfo'>This is a question everyone has posed at least once in their lives.</p>

                    </a>
                    
              </div>
          </>
     );
};
     
export default Blogs;