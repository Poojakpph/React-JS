import React from 'react'

function Alert(props) {  

    const capitalize=(word)=>{  // this function makes 's' in "success" capital
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);   
    }

  return (
    // the below syntax tells that if(props.alert!=NULL) then only other element (i.e. after && ) will be evaluated  OR first props.alert 
    //is evaluated and if it returns True then only expression after && will be evaluated
    <div style={{height: '50px'}}>
       { props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{ capitalize(props.alert.type) }</strong> : {props.alert.msg}
          </div>
        }
   </div>    
  )
}

export default Alert
