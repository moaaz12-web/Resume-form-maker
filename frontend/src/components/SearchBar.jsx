import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { increment } from '../redux/counterAction'
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    return (
        <>
            <div className="flex items-center">
                <div className="flex">
                    <input
                        type="text"
                        className="block w-76 md:w-96 px-4 py-2 text-purple-700 bg-white border rounded-l-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                        placeholder="Enter your prompt"
                        onChange={(e) => {
                            dispatch(increment(e.target.value))

                        }}
                    />
                    <button className="px-4 text-white bg-purple-600 rounded-r-full shadow-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 " onClick={() => navigate('/ggg')}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>

            </div>
        </>
    )
}

export default SearchBar
