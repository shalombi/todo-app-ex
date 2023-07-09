import './App.css';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import { AppHeader } from './cmp/app-header';
import { Edit } from './pages/edit';


function RootCmp() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
        <Route path='/todo/edit/:id' element={< Edit/>} />
        <Route path='/todo/edit' element={< Edit/>} />
      </Routes>
    </div>
  );
}

export default RootCmp;
