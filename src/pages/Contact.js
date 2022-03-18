import React from 'react';
import Navigation from '../Components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const contact = () => {
    return (
        <div className='contact'>
           <Navigation/>
           <div className='contactContent'>
               <div className='header'></div>
               <div className='contactBox'>


                   <h1>Contacez-moi</h1>
                   <ul>
                       <li>
                           <i className='fas fa-map-marker-alt'></i>
                               <span>Bizerte</span>
                           
                       </li>
                       <li>
                           <i className='fas fa-mobile-alt'></i>
                           <CopyToClipboard text='+21628787556'> 
                           <span className='clickInput' onClick={()=>{alert('Téléphone copé!');}}>
                           +21628787556
                               </span>
                            </CopyToClipboard>
                       </li>


                       <li>
                           <i className='fas fa-envelope'></i>
                           <CopyToClipboard text='rimmahmoud0000@gmail.com'> 
                           <span className='clickInput' onClick={()=>{alert('Téléphone copé!');}}>
                           rimmahmoud0000@gmail.com
                               </span>
                            </CopyToClipboard>
                       </li>
                   </ul>
               </div>
              <div className='socialNetwork'>
                  <ul>
                  <a href='http://www.github.com' target='_blank' rel='noopener noreferrer'>
                       <h4>Github</h4>
                       <i className='fab fa-github'></i>
                   </a>
                  <a href='http://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                       <h4>Facebook</h4>
                       <i className='fab fa-facebook'></i>
                   </a>
                   <a href='https://codepen.io/Rymm' target='_blank' rel='noopener noreferrer'>
                       <h4>Codepen</h4>
                       <i className='fab fa-codepen'></i>
                   </a>

                   <a href='http://www.linkedin.com/in/mahmoud-rim-a5b502179' target='_blank' rel='noopener noreferrer'>
                       <h4>LinkedIn</h4>
                       <i className='fab fa-linkedin'></i>
                   </a>
                   
                   
                   



                  </ul>
                  
                  


                  </div> 
           </div>

        </div>
    );
};

export default contact;