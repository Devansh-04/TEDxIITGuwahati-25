import styles from './OurAudience.css'
import yt from './pics/youtube_views.svg'
import SS from './pics/social_reach.svg'
import attendees from './pics/attendees.svg'
import impressions from './pics/impressions.svg'

const Audience = () => {
    return(
        <>
            <div className='ouraudience'>
                <div className="Title">
                    <p>Our Audience</p>
                </div>

                <div className='info'>
                    <p>Since 2019, TEDxIITGuwahati has been working to galvanize the local community, bringing together corporations, community organizations, entrepreneurs, and individuals, providing a platform for exceptional ideas, and a catalyst for profound change.</p>
                </div>

                <div className='icons'>

                    <div className='Icon'>
                       <img src={attendees} className='AttIcon' alt='attendees'></img> 
                       <div className='IconTitle'>ATTENDEES</div>
                       <span className='IconSubTitle'></span>
                    </div>

                    <div className='Icon'>
                       <img src={SS} className='SSIcon' alt='socialreach'></img> 
                       <div className='IconTitle'>SOCIAL REACH</div>
                       <span className='IconSubTitle'>2K+ Fans & Followers</span>
                    </div>

                    <div className='Icon'>
                       <img src={yt} className='YtIcon' alt='yticon'></img> 
                       <div className='IconTitle'>YOUTUBE VIEWS</div>
                       <span className='IconSubTitle'>1M+ Views</span>
                    </div>

                    <div className='Icon'>
                       <img src={impressions} className='ImIcon' alt='impressicon'></img> 
                       <div className='IconTitle'>IMPRESSIONS</div>
                       <span className='IconSubTitle'>7K+ Impressions</span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Audience;