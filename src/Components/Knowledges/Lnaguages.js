import React,{Component}  from 'react';
import ProgressBar from './ProgressBar';
 class Lnaguages extends Component
 {
     state ={
     languages :[
         {id:1,value:"Javascript",xp:1.2},
         {id:2,value:"CSS",xp:2}, 
         {id:3,value:"Php",xp:0.5},
         {id:4,value:"Python",xp:0.4}      
    
                 ],
     Frameworks :[
        {id:1,value:"React",xp:0.6},
        {id:2,value:"Bootstrap",xp:0.2}, 
    
            

              ],

            }
     
     render(){let {languages,Frameworks}=this.state;
     
    return(
        <div className="languagesFrameworks">
        <ProgressBar
        languages={languages}
        className="languagesDisplay"
        title="languages"
        
        />
        <ProgressBar 
        languages={Frameworks}  
        title="framworks & bibliothèques"
        className="frameworksDisplay"/>
           </div>
    );
}
   
}
 

export default Lnaguages;