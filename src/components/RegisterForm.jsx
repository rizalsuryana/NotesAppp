import React, {useContext} from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import LocaleContext from "../contexts/LocaleContext";

const RegisterForm = ({register}) => {
    const {languageSelect}                              = useContext(LocaleContext);
    const [name, onNameChange]                          = useInput('');
    const [email, onEmaiChange]                         = useInput('');
    const [password, onPasswordChange]                  = useInput('');
    const [confirmPassword, onConfirmPasswordChange]    = useInput('');


    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            return alert(
                'Password Doesnt match'
            );
        }

        register({
            name,
            email,
            password
        });
    };

    return (
        <div className="input-register">
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="name">{languageSelect({en: 'Name', id: 'Nama'})}</label>
                <input type="text" id="name" value={name} onChange={onNameChange} />

                <label htmlFor="email">{languageSelect({en: 'Email', id: 'Surel'})}</label>
                <input type="email" id="email" value={email} onChange={onEmaiChange} />

                <label htmlFor="password">{languageSelect({en: 'Password', id: 'Kata Sandi'})}</label>
                <input type="password" id="password" value={password} onChange={onPasswordChange} />
                
                <label htmlFor="confirmPassword">{languageSelect({en: 'Confirm Password', id: 'Konfirmasi Kata Sandi'})}</label>
                <input type="password" id="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChange} />


                <button type="submit">{languageSelect({en: 'Register', id: 'Daftar'})}</button>


            </form>
        </div>
    );
    
}

RegisterForm.propTypes ={
    register: PropTypes.func.isRequired
};

export default RegisterForm;