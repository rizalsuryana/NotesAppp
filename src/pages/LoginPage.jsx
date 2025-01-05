import { useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import {login} from "../utils/Api"

const LoginPage = ({loginSuccess}) => {
    const {languageSelect} = useContext(LocaleContext);

    const onLogin = async ({email, password}) => {
        const {error, data} = await login({email, password});

        if(!error){
            loginSuccess(data);
        }

    }

    return(
        <section className="login-page">
        <h4>{languageSelect({en: 'Please Login to your account', id: 'Silahkan login menggunakan akun anda' })}</h4>
        <LoginForm login={onLogin}/>

        <Link to='/register'>{languageSelect({en: 'Create New Acount', id: 'Buat Akun baru'})}</Link>
        
        </section>
    )
}

LoginPage.propTypes ={
    loginSuccess: PropTypes.func.isRequired
};

export default LoginPage;