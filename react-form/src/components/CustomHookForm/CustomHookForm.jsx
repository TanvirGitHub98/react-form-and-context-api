import React from 'react';
import useInputField from '../../customHooks/useInputField';

const CustomHookForm = (props) => {
    const [email,setEmail]=useInputField('')
    const handlEForm=(e)=>{
        e.preventDefault()
        console.log(email)
    }
    return (
        
        <div>
            <form onSubmit={handlEForm}>
                <input type="email" name="emal" id="email" placeholder='Email' onChange={setEmail} defaultValue={email} /><br/>
                <input type="password" name="password" id="password" placeholder='Password' /><br/>
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default CustomHookForm;