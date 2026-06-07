import React, { useRef } from 'react';

const UnControlledFormDataUseRef = (props) => {
   
    const email=useRef('')
    const password=useRef('')
    const handleUncontrolledForm=(e)=>{
        e.preventDefault()
        console.log(password.current.value)
        console.log(email.current.value)

    }
    return (
        
        <div>
            <form onSubmit={handleUncontrolledForm}>
                <input type="email" ref={email} /> <br/>
                <input type="password" ref={password}/> <br/>
                <input type="submit" value="Submit" />
               

            </form>

        </div>
    );
};

export default UnControlledFormDataUseRef;