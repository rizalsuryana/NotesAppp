import { useContext } from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import LocaleContext from "../contexts/LocaleContext";

const LoginForm = ({login}) => {
    const {languageSelect} = useContext(LocaleContext);
    const [email, onEmaiChange] = useInput('');
    const [password, onPasswordChange] = useInput('');


    const onSubmitHandler = (e) => {
        e.preventDefault();
        login({
            email,
            password
        });

    };

    return (
        <div className="input-login">
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="email">{languageSelect({en: 'Email', id: 'Surel'})}</label>
                <input type="email" value={email} onChange={onEmaiChange}/>

                <label htmlFor="password">{languageSelect({en: 'Password', id: 'Kata Sandi'})}</label>
                <input type="password" value={password} onChange={onPasswordChange} />

                <button type="submit">{languageSelect({en: 'Login', id: 'Masuk'})}</button>

            </form>
        </div>
    );
}

LoginForm.propTypes ={
    login: PropTypes.func.isRequired
};

export default LoginForm;