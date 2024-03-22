import useInputState from "../hooks/useinputState";


const Hookform = () => {

    const [name, handleNameChange]=useInputState('juwel')


    const handleSubmit= e=>{
        e.preventDefault();
        console.log(name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input  value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                <input type="text" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Hookform;