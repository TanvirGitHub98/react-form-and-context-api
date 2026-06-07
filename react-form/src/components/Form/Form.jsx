import React from 'react';

const Form = (props) => {
    const formHandle=(e)=>{
        e.preventDefault() 
        const name=e.target.name.value
        const email=e.target.email.value
        console.log(name,email)
    }
    return (
        
        <div>
            <form onSubmit={formHandle}>
                <input type="text" name='name' placeholder='Enter your name' /> <br/>
                <input type="email" name="email" id="" placeholder='Enter your email' /><br/>
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default Form;