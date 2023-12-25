import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import {useSelector} from "react-redux";
import { selectSendMessageIsOpen } from './features/counter/mailSlice';
import Rightpanel from './RightPanel';

function App() {
   const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <BrowserRouter >
    <div className="app">
      <Header />
      <div className="app_body">
      <Sidebar />
      <Routes>
        <Route path='/mail' element={<Mail />} >
        </Route>
        <Route path='/' element={<EmailList />}>
        </Route>
      </Routes>
      <Rightpanel />
      </div>  

      {sendMessageIsOpen && <SendMail /> }
    </div>
    </BrowserRouter>
  );
}

export default App;
