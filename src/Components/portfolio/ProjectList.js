import React,{Component} from 'react';
import {portfolioData} from '../../data/portfolioData';
import Project from './Project';

export default class ProjectList extends Component{
    state={projcts:portfolioData,
    radios:[ {id:1, value:"css"},
    {id:1, value:"php"},
    {id:1 ,value:"javascript"},
     {id:1 ,value:"react"}
    ],

    selectedRadio:'javascript'
    };
    handleRadio=(event)=>{
        let radio=event.target.value;
        this.setState({selectedRadio:radio})
        // console.log(event.target.value);
    }
    render()
    {
        let{projcts,radios,selectedRadio}=this.state;
        return (
            <div className='portfolioContent '>
                <ul className='radioDisplay '>
                    {
                        radios.map((radio)=>{return(
                        <li key={radio.id}>
                            <input type='radio' name='radio' checked={radio.value===selectedRadio}value={radio.value}id={radio.value} onChange={this.handleRadio}/>
                            <label htmlFor={radio.value}>{radio.value}</label>
                             </li>)})
                    }
               </ul>
               <div className='projects'>
                   {

                       projcts
                       .filter(item=>item.languages.includes(selectedRadio))
                       .map(item=>{
                           return(
                               <Project
                               
                               key={item.id}
                               item={item}/>
                           )
                       })
                   }

               </div>
             
            </div>
        );}
    }
