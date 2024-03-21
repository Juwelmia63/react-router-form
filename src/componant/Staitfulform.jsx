import { useState } from "react";


const Staitfulform = () => {

    const [name, setname]= useState(`juwel`);
    const [email, setemail] =useState(null);
    const[password, setpassword] =useState(null);
    const [error, seterror]=useState('');



    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length <6){
            seterror("You must have 6 Charecter")
        }

        else{
            seterror('');
            console.log(name)
            console.log(email);
            console.log(password);
    
        }
        
       
    }


    const handleEmailChange = e =>{
        setemail(e.target.value)

    }
    const handleNameChange = e =>{
        setname(e.target.value)

    }
    const handlePasswordChange = e =>{
        setpassword(e.target.value)

    }
   

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text"  />
                <br />
                <input  onChange={handleEmailChange} type="email"  />
                
                
                <br />
                <input  onChange={handlePasswordChange} type="password" required  />
                <br />
                <input type="submit" value="Submit" />

                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default Staitfulform;