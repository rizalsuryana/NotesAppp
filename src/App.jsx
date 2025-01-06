import React, { useEffect, useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavigationNote from "./components/NavigationNotes";
import AddPage from "./pages/AddPage";
import ArsipPage from "./pages/ArsipPage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from './pages/PageNotFound';
import RegisterPage from './pages/RegisterPage';
import ThemeContext from './contexts/ThemeContext';
import LocaleContext from './contexts/LocaleContext';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken } from './utils/Api';

// import HomePageWrapper from './pages/HomePage';
// import DetailPageWrapper from "./pages/DetailPage";
// import EditPageWrapper from "./pages/EditPage";
// import ArsipPageWrapper from "./pages/ArsipPage";
const App =() => {

  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'en');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const toggleLocale = () => {
    setLocale((prevLocale)=> {
      const newLocale = prevLocale === 'en' ? 'id' : 'en';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  };

  const languageSelect =({en, id}) => {
    if (en === undefined || id === undefined) {
      return 'not language available';
    }

    return locale === 'en' ? en : id;
  };


  const LocaleContextValue = useMemo(()=> {
    return {
      locale,
      toggleLocale,
      languageSelect
    };
  }, [locale]);

  const toggleTheme = () => {
    setTheme((prevTheme)=> {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';

      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

const ThemeContextValue = useMemo(()=> {
  return{
    theme,
    toggleTheme
  };
}, [theme]);

useEffect(()=> {
  getUserLogged().then(({data})=> {
    setAuthedUser(data);
    setInitializing(false);
  });
}, []);

useEffect(()=> {
  document.documentElement.setAttribute('data-theme', theme);
}, [theme]);

const onLoginSuccess = async ({accessToken}) => {
  putAccessToken(accessToken);
  const {data} = await getUserLogged();
  setAuthedUser(data);
};

const onLogout = () => {
  setAuthedUser(null);
  putAccessToken('');
};

if(initializing) {
  return null;
}

if (authedUser === null) {
  return (

    <LocaleContext.Provider value={LocaleContextValue}>
      <ThemeContext.Provider value={ThemeContextValue}>
        <div className="app-container">
          <header>
            <NavigationNote/>
          </header>
          <main>
            <Routes>
              <Route path='/*' element={<LoginPage loginSuccess={onLoginSuccess}/>}/>
              <Route path='/register' element={<RegisterPage/>}/>
            </Routes>
          </main>
        </div>
      </ThemeContext.Provider>
    </LocaleContext.Provider>
  );
}
  return (

    <LocaleContext.Provider value={LocaleContextValue}>
     <ThemeContext.Provider value={ThemeContextValue} >

    <div className="app-container">

      <header>
      <NavigationNote logout={onLogout} name={authedUser.name} toggleTheme={toggleTheme}/>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/archives' element={<ArsipPage/>} />
          <Route path='/notes/new' element={<AddPage/>}/>
          <Route path='/notes/:id' element={<DetailPage />} />
          {/* <Route path='/notes/edit/:id' element={<EditPageWrapper />} /> */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>

    </div>
    </ThemeContext.Provider>
    </LocaleContext.Provider>
  );
}

export default App;
