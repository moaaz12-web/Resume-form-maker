import React, { useState } from 'react';

const NavSide = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);



    return (
        <div className="flex flex-col h-screen">
            <nav className="bg-lighblue-500 py-4 px-8 shadow-md">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div
                            className="bg-gray-600 rounded-full p-5 h-10 flex items-center justify-center text-white font-bold text-2xl hover:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out cursor-pointer"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            Sidebar
                        </div>
                        <div className="ml-4 text-white font-bold text-2xl">My App</div>
                    </div>
                    <div>
                        <button className="btn bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded-full">EMAIL 1</button>
                        <button className="btn bg-blue-600 ml-4 hover:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded-full">Button 2</button>
                    </div>
                </div>
            </nav>
            <div className="flex flex-1">
                {sidebarOpen && (
                    <aside
                        className="bg-dark-blue-800 w-64 p-6 transform duration-150 ease-in-out mt-6 ml-4 transition duration-150 ease-in-out"
                        style={{ transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)" }}
                    >
                        <button className="btn bg-blue-600 w-full mb-4 hover:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded-full hover:underline">Email</button>
                        <button className="btn bg-blue-600 w-full mb-4 hover:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded-full hover:underline">Facebook Ad</button>
                        <button className="btn bg-blue-600 w-full mb-4 hover:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded-full hover:underline">LinkedIn Post</button>
                        <button className="btn bg-blue-600 w-full mb-4 hover:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded-full hover:underline">Discount Offer</button>
                        <button className="btn bg-blue-600 w-full mb-4 hover:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded-full hover:underline">Newsletter</button>
                        <button className="btn bg-blue-600 w-full mb-4 hover:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded-full hover:underline">Product Launch</button>
                        <button className="btn bg-blue-600 w-full mb-4 hover:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded-full hover:underline">One Hack</button>
                        <button className="btn bg-blue-600 w-full mb-4 hover:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded-full hover:underline">Feedback</button>
                    </aside>
                )}
                <main className="flex-1 bg-gray-300 p-4 flex items-center flex-col">
                <div className="shadow-xl rounded-lg p-4 m-4 mt-0 flex w-full items-center">
                        <img className="h-10 w-10 object-cover rounded-full" src="/img.png" alt="" />
                        <div className="flex flex-col justify-between items-center p-4">
                            <p className="text-2xl font-bold">Welcome Username</p>
                            <p className="text-gray-600">Ready to generate something new?</p>
                        </div>
                    </div>


                    <div className="flex justify-between mt-4">
                        <div className="shadow-xl border-2 rounded-lg p-4 w-96 h-72">
                            <div className="font-bold text-2xl mb-2">Heading 1</div>
                            <div className="text-gray-700">Content goes here</div>
                        </div>
                        <div className="shadow-xl border-2 rounded-lg p-4 w-96 h-72 mx-6">
                            <div className="font-bold text-2xl mb-2">Heading 2</div>
                            <div className="text-gray-700">Content goes here</div>
                        </div>
                    </div>
                </main>

            </div>
        </div>

    );
};

export default NavSide;
