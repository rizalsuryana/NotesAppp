import React, { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";

const PageNotFound = () => {
    const {languageSelect} = useContext(LocaleContext);
    return(
        <section>
            <h1>
                404 Error :
            </h1>
            <p>
                {
                    languageSelect({
                        en: 'Page Not Found',
                        id: 'Halaman tidak ditemukan'
                    })
                }
            </p>
        </section>
    );
}


export default PageNotFound;