import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className='sidebar'>
             <div className='id'>
                <div className='idContent'>
                    <img src='./media/billGates.jpg' alt=''/>
                    <h3>Rim Mahmoud</h3>

                </div>

             </div>
            <div className='navigation'>
                 <ul>
                     <li>
                  <NavLink  to="/" className="navActive">
                      <i className='fas fa-home'>
                          <span>Accueil</span>
                      </i>
                  </NavLink>
                  </li>
                  <li>
                  <NavLink  to="/Knowledges " className="navActive">
                      <i className='fas fa-mountain'>
                          <span>Compétences</span>
                      </i>
                  </NavLink>
                  </li>
                  <li>
                  <NavLink  to="/Portfolio" className="navActive">
                      <i className='fas fa-images'>
                          <span>Portfolio</span>
                      </i>
                  </NavLink>
                  </li>
                  <li>
                  <NavLink  to="/Contact" className="navActive">
                      <i className='fas fa-address-book'>
                          <span>Contact</span>
                      </i>
                  </NavLink>
                  </li>
                 </ul>
            </div>
            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href='http://www.linkedin.com/in/mahmoud-rim-a5b502179' target="_blank"
                        rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href='https://github.com/Rayouma' target="_blank"
                        rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href='http://www.facebook.com/rim.mahmoud.9' target="_blank"
                        rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    </li>
                    <li>
                    <a href='https://codepen.io/Rymm' target='_blank' rel='noopener noreferrer'>
                                              <i className='fab fa-codepen'></i>
                   </a>
                   </li>
                </ul>
                <div className='signature'>
                    <p>@copywrite-2022</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;