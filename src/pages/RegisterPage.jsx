import React, {useContext} from "react";
import RegisterForm from "../components/RegisterForm";
import LocaleContext from "../contexts/LocaleContext";
import {register} from '../utils/Api'
import { Link, useNavigate } from "react-router-dom";


const RegisterPage = () => {
    const {languageSelect} = useContext(LocaleContext);
    const navigate = useNavigate();

    const onRegisterHandler = async (user) => {
        const {error, message} = await register(user);
        if(!error) {
            alert('Registration Success');
            navigate('/');
        }
    }

    return(

        <section className="register-page">
            <h2>{languageSelect({en: 'Please fill the form', id: 'Silahkan isi formulir pendaftaran'})}</h2>
            <RegisterForm register={onRegisterHandler}/>
            <p>
                {languageSelect({en: 'Already have account?', id: 'Sudah memiliki akun?'})} {' '}
                <Link to='/'>{languageSelect({en: 'Login', id: 'Masuk'})}</Link>
            </p>

        </section>
    );
}

export default RegisterPage;