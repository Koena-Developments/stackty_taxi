import React from 'react';
import LoginComponent from './components/LoginComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp'

const App = () => {
    return (
        <Router>
            <div>
                <h1>My App</h1>
                <Routes>
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;














