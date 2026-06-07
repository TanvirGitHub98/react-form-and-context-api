import React, { useState } from 'react';

const ControlledFieldFormAction = (props) => {
    const handleForm=(e)=>{
        e.preventDefault()

    }
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const handlePassword=(e)=>{
        console.log(e.target.value) 
        const value=e.target.value;
        setPassword(value)
        console.log(value.length)
        if(value.length<6)
        {
            setError("Password length must be 6 or longer!!!")
        }
        else{
            setError('')
        }
    }
    return (
        
        <div>
            <form onSubmit={handleForm}>
                <input type="email" name="email" id="" placeholder='Email' required/><br/>
                <input onChange={handlePassword} type="password" name="password" id="" placeholder='Password' value={password} required/><br/>
                <input type="submit" value="Submit" />

            </form>
            <p>
                <small style={{color:"red"}}>{error}</small>
            </p>

        </div>
    );
};

export default ControlledFieldFormAction;