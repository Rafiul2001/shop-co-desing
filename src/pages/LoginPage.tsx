import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        alert(`Username: ${username}\nPassword: ${password}`);
    };

    return (
        <div className="h-full px-4 py-20 flex items-center justify-center bg-gradient-to-tr from-gray-100 to-gray-200">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl">
                <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">
                    Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-0 -translate-1/2 text-gray-400 hover:text-indigo-500"
                                onClick={() => setShowPassword(!showPassword)}
                                tabIndex={-1}
                            >
                                {showPassword ? (
                                    <FaEye />
                                ) : (
                                    <FaEyeSlash />
                                )}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
                    >
                        Sign In
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <a href="#" className="text-indigo-500 hover:underline text-sm">
                        Forgot your password?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;