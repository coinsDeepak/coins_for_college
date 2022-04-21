import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link,

} from "react-router-dom";
import Create_question from './create_question';
import Create_question_1 from './create_question_1';
import Create_question_2 from './create_question_2';
import Perivious_question from './perivious_question';
import Show_question from './showQuestion';
import Referrals from './referrals';
import Referrals_active_2 from './referrals _active_2';
import Referrals_inactive from './referrals _inactive';
import Earning from './Earning';
import Earning_2 from './Earning_2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/create_question" element={<Create_question />} />
    <Route path="/create_question_1" element={<Create_question_1 />} />
    <Route path="/Create_question_2" element={<Create_question_2 />} />
    <Route path="/Perivious_question" element={<Perivious_question />} />
    <Route path="/Show_question" element={<Show_question />} />
    <Route path="/Referrals" element={<Referrals />} />
    <Route path="/Referrals_active_2" element={<Referrals_active_2 />} />
    <Route path="/Referrals_inactive" element={<Referrals_inactive />} />
    <Route path="/Earning" element={<Earning />} />
    <Route path="/Earning_2" element={<Earning_2 />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
