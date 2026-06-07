import React from 'react';

const FormAction = (props) => {
    const handleActionForm=(formData)=>{
        console.log(formData.get('name'))
        console.log(formData.get('email'))

    }

    return (
        
        <div>
            <form action={handleActionForm}>
                <input type="text" name="name" id="" placeholder='Name' /><br/>
                <input type="email" name="email" id="" placeholder='Email' /><br/>
                <input type="submit" value="Submit" />
            </form>

            
        </div>
    );
};

export default FormAction;