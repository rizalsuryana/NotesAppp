import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePageWrapper from './pages/HomePage';
import NavigationNote from "./components/NavigationNotes";
import AddPage from "./pages/AddPage";
import ArsipPageWrapper from "./pages/ArsipPage";
import DetailPageWrapper from "./pages/DetailPage";
import EditPageWrapper from "./pages/EditPage";
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="app-container">

      <header>
      <NavigationNote/>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<HomePageWrapper/>}/>
          <Route path='/archives' element={<ArsipPageWrapper/>} />
          <Route path='/notes/new' element={<AddPage/>}/>
          <Route path='/notes/:id' element={<DetailPageWrapper />} />
          <Route path='/notes/edit/:id' element={<EditPageWrapper />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
