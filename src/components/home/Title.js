import styles from './title.module.css';
import React, { useEffect, useState } from 'react';

const Title = () => {

    const [offset, setOffset] = useState(0);
    const [num,setNum]= useState(null);
    
   
    // Update offset value on scroll
        useEffect(() => {
            const handleScroll = () => {
                setOffset(window.scrollY);
            };
            
            const handleResize = () => {
                setNum(window.innerWidth > 600 ? '1' :'');
              };
              setNum(window.innerWidth > 600 ? '1' :'');
            
    
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleResize);
            return () => {window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleResize);
            }
        }, []);

        const calculateOpacityAndScale = (a,b) => {
            const start = a; // Start showing image
            const end = b; // Fully visible by this point
            const progress = Math.min(Math.max((offset - start) / (end - start), 0), 1); // Clamped between 0 and 1
    
            return {
                opacity: progress,
                // transform: `scale(${0.5 + progress * 0.5})`, // Scale from 0.5 to 1
            };
        };
    return (

        <>
        <div className={styles.title}>
            <div className={styles.parallax_container}>
            <span
              className={styles.seaside}
              style={{ transform: `translateX(${-(offset) / window.innerWidth * 250}%)` }}
            >
                <img src="./images/home/Seaside.png" alt="Seaside" />
            </span>

            <span
              className={styles.citadel}
              style={{ transform: `translateX(${(offset) / window.innerWidth * 250}%)` }}
            >
            <img src={`./images/home/Citadel${num}.png`} alt="Citadel" />



            </span>
            </div>
   
            {/* <div className={styles.heading} style={calculateOpacityAndScale(100,400)}><img src="./images/WhiteTextLogo.png"></img></div> */}


            {/* <div className={styles.heading} style={calculateOpacityAndScale()}><h1>Welcome to TEDxIITGuwahati</h1></div> */}
            <div className={styles.container} style={calculateOpacityAndScale(100,400)}>
                <div className={styles.gif}>
                    <img src="./images/Tedx-logo-animation.gif"></img>

                </div>
                
                <div className={styles.content}>
                    <h2>Theme 2025</h2>
                    <p>The theme of TEDxIITGuwahati 2025 is Seaside Citadel, which explores the beauty of creation in the face of impermanence. </p><br></br>
                    <p>                    Imagine a majestic citadel rising from the shore, sculpted from grains of sand—its walls are sturdy, its towers high. For a moment, it stands proudly against the horizon, embodying strength and intention. Yet, just as the tides are inevitable, so too is the fate of this sand-built citadel. The waves come, reshaping it into something new, reminding us of the transient nature of all things we build.
                    </p><br></br>
                     <p>                    However, the temporary nature of our creations, does not lessen the importance of our efforts. Is the purpose only to achieve a lasting result, or is there deeper meaning in the act of building itself ? Should we continue to pursue something, knowing that it may or may not last forever--just for the joy we find in it? It speaks to those who build, innovate, or dream with the understanding that the result may not be permanent.  
                     </p><br></br>
                    <p>The Seaside Citadel is a reminder that the beauty of what we build lies not in its endurance, but in the moments of creation and in the lessons learned in the process. It encourages us to revel in the act of building, knowing that the tides will come, and that’s okay. For even as the citadel falls to the sea, the lessons, memories, and experiences we gain from the journey remain within us.
                    </p>
                    <div className={styles.button}><a href="https://tedxiitguwahati.medium.com/when-the-waves-come-the-story-of-the-seaside-citadel-d3c696970227">Theme Blog</a></div>

                </div>
            </div>
        </div>


        </>
    );
}
 
export default Title;