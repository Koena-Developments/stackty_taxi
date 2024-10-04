import React from 'react';
import LoginComponent from './components/LoginComponent';

const App = () => {
    return (
        <div>
            <h1>My App</h1>
            <LoginComponent />
        </div>
    );
};

export default App;
















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         axios.get('http://localhost:8000/home')
//             .then(response => {
//                 setMessage(response.data.message);
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the data!", error);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>{message}</h1>
//         </div>
//     );
// }

// export default App;
// src/App.js
