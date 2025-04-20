import styles from "./speakers.module.css";
import SpeakerModal from "./speakerModal";
import {useState} from "react";
import data from './speaker_data';

const Speakers = () => {
    const [modal,setModal] = useState(false)
    const [speaker,setSpeaker] = useState(null)    
    const togglemodal =() =>{
        setModal(!modal);
    }
    const openModal =({name, about, description, image}) =>{
       setSpeaker({name, about, description, image});
    }

    return (
        <div className={styles.speakers}>
            <h1 className={styles.heading1}>Speakers</h1>
<<<<<<< HEAD
            <h2 className={styles.heading2}>Our upcoming event Speakers</h2>
=======
            <h2 className={styles.heading2}></h2>
>>>>>>> 9c14e517fb0fe65674b620d55942f05cf3d91f67
            {modal && <SpeakerModal 
            func={togglemodal}
            name={speaker.name}
            about={speaker.about}
            image={speaker.image}
            description = {speaker.description}
            />}

           <div className={styles.gallery}>

               <div className={styles.gallerypanel}>
                    
<<<<<<< HEAD
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name: "Aleena", about: "educator", image: "./images/Meghana.png", description: data.Aleena})}}><img src="./images/Meghana.png" />
=======
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name: "Rhea Singha", about: "Miss Universe India 2024", image: "./images/speakers/rhea.png", description: data.Rhea})}}><img src="./images/speakers/rhea.png" />
>>>>>>> 9c14e517fb0fe65674b620d55942f05cf3d91f67
                    
                    </button>
                    <div className={styles.galleryname}>Rhea Singha</div>
               </div>
               

               <div className={styles.gallerypanel}>
<<<<<<< HEAD
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Rajat Rathor", about:"Cop",image: "./images/Meghana.png",description:data.Rajat})}}><img src="./images/Meghana.png"></img></button>
                    <div className={styles.galleryname}>Name</div>
               </div>

               <div className={styles.gallerypanel}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Ilina Sinha", about:"Phd",image: "./images/Meghana.png",description:data.illina})}}><img src="./images/Meghana.png"  /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>
               
               <div className={styles.gallerypanel}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Capt Satendra Sangwan", about:"Phd",image: "./images/Meghana.png",description:data.sangwan})}}><img src="images/Meghana.png" /></button>
                    <div className={styles.galleryname}>Name</div>
=======
               <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Lima Das", about:"Actress, Classical Dancer, Vocalist, Former Dental Surgeon",image: "./images/speakers/limaF.png",description:data.Lima})}}><img src="./images/speakers/limaF.png"></img></button>
               <div className={styles.galleryname}>Lima Das</div>
               </div>

               <div className={styles.gallerypanel}>
               <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Riten Debnath", about:"Entrepreneur, CEO of Fueler, Tech Innovator",image: "./images/speakers/ritenF.png",description:data.Riten})}}><img src="./images/speakers/ritenF.png"  /></button>
               <div className={styles.galleryname}>Riten Debnath</div>
               </div>
               
               <div className={styles.gallerypanel}>
               <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Vijaya Aswani", about:"Illustrator, Creative Storyteller, Art Curator",image: "./images/speakers/vijayaF.png",description:data.Vijaya})}}><img src="./images/speakers/vijayaF.png" /></button>
               <div className={styles.galleryname}>Vijaya Aswani</div>
>>>>>>> 9c14e517fb0fe65674b620d55942f05cf3d91f67
               </div>


               <div className={styles.gallerypanel}>
<<<<<<< HEAD
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Rituparna Neog", about:"Phd",image: "./images/Meghana.png",description:data.Rituparna})}}><img src="images/Meghana.png" /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>

               <div className={styles.gallerypanel}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Asutosh Kashyap", about:"Phd",image: "./images/Meghana.png",description:data.Asutosh})}}><img src="images/Meghana.png" /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>

               <div className={styles.gallerypanel}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Sudhana Sankar", about:"Phd",image: "./images/Meghana.png",description:data.Sudhana})}}><img src="images/Meghana.png" /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>

               <div className={styles.gallerypanel}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Mrinal Talukdar", about:"Phd",image: "./images/Meghana.png",description:data.Mrinal})}}><img src="images/Meghana.png" /></button>
                    <div className={styles.galleryname}>Name</div>
=======
               <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Shankuraj Konwar", about:"Singer-Songwriter, Assamese music icon",image: "./images/speakers/shankurajF.png",description:data.Shankuraj})}}><img src="./images/speakers/shankurajF.png" /></button>
               <div className={styles.galleryname}>Shankuraj Konwar</div>
               </div>

               <div className={styles.gallerypanel}>
               <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Rajni Basumatary", about:"Filmmaker, Actor, Director, Cultural Change-Maker",image: "./images/speakers/rajniF.png",description:data.Rajni})}}><img src="./images/speakers/rajniF.png" /></button>
               <div className={styles.galleryname}>Rajni Basumatary</div>
               </div>

               <div className={styles.gallerypanel}>
               <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Bipul Bhuyan", about:"Experimental Physicist, IIT Guwahati, Neutrino Researcher",image: "./images/speakers/bipulF.png",description:data.Bipul})}}><img src="./images/speakers/bipulF.png" /></button>
               <div className={styles.galleryname}>Bipul Bhuyan</div>
               </div>

               <div className={styles.gallerypanel}>
               <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Sneha Roy", about:"Poet, Researcher, Speaker, Gender and Literature Scholar",image: "./images/speakers/snehaF.png",description:data.Sneha})}}><img src="./images/speakers/snehaF.png" /></button>
               <div className={styles.galleryname}>Sneha Roy</div>
>>>>>>> 9c14e517fb0fe65674b620d55942f05cf3d91f67
               </div>
          </div>
          {/* <div>
               <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, consectetur ab quaerat molestias temporibus minus amet voluptate doloremque atque quo voluptates sequi numquam illo sint doloribus praesentium accusamus cumque rerum est, quam adipisci reprehenderit. Est sint facere impedit quo asperiores quae minima reprehenderit quibusdam facilis, officiis molestias velit cumque omnis tempore minus nobis similique eaque molestiae! Repellat, voluptas minima? Quasi vel nihil neque, nemo odit adipisci est dignissimos placeat laboriosam reiciendis accusamus veritatis quos, quis cum officia, soluta veniam unde. Quos tenetur voluptate quas, eligendi eaque non ab aliquid autem amet delectus sapiente quasi repellat alias eius. Voluptate, officiis quos.</h1>
          </div> */}
        </div>
    );
}
 
export default Speakers;