import React, { useState } from 'react';
import axios from 'axios';
 
const LoginPage = () => {

    // State variables to hold username and password

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');
 
    // Function to handle form submission

    const handleSubmit = async (e) => {

        e.preventDefault(); // Prevent default form submission behavior
 
        try {

            // Make POST request to server

            const response = await axios.post('http://localhost:5000/auth/login', {

                username: username,

                password: password

            });
 
            // Handle response from server

            console.log('Login successful:', response.data);

            // You can redirect the user to another page or perform other actions here

        } catch (error) {

            console.error('Login failed:', error);

            // Handle login failure, show error message to the user, etc.

        }

    };
 
    return (

        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

            <h1 className="text-3xl font-bold mb-8">Student Login</h1>

            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3" onSubmit={handleSubmit}>

                <div className="mb-4">

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">

                        Username

                    </label>

                    <input

                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                        id="username" type="text" placeholder="Username"

                        value={username} onChange={(e) => setUsername(e.target.value)} />

                </div>

                <div className="mb-6">

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">

                        Password

                    </label>

                    <input

                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                        id="password" type="password" placeholder="Password"

                        value={password} onChange={(e) => setPassword(e.target.value)} />

                </div>

                <div className="flex items-center justify-between">

                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">

                        Sign In

                    </button>

                </div>

            </form>

        </div>

    );

};
 
export default LoginPage;
