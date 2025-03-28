import { Link } from 'react-router-dom';

function RegistrationPage(){
    return (
        <>
        <label >username</label>
        <input name="username"></input>
        <label >email</label>
        <input name="email"></input>
        <label>password</label>
        <input type="password" name='pasword'></input>
        <button type='submit'></button>
        <Link to={`/login`} ><button>log in</button></Link>
        </>
    )
}
export default RegistrationPage