import React from 'react';
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <div className="relative bg-blue-50 overflow-hidden max-h-screen">
      <header className="fixed right-0 top-0 left-60 bg-blue-50 py-3 px-4 h-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              
            </div>
            <div className="text-lg font-bold text-blue-800">Admin Dashboard</div>
            <div>
            
            </div>
          </div>
        </div>
      </header>

      <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow">
            <div className="px-4 py-6 text-center border-b">
              <h1 className="text-xl font-bold leading-none"><span className="text-blue-700">EduAdmit</span> Connect</h1>
            </div>
            <div className="p-4">
              <ul className="space-y-1">
                <li>
                <Link to="/adminapplications" className="flex items-center bg-blue-200 rounded-xl font-bold text-sm text-blue-900 py-3 px-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
      </svg>
      Applications
    </Link>  
                </li>
                <li>
                <Link to="/admincrud" className="flex bg-white hover:bg-blue-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"/>
                </svg> 
                Courses
              </Link>
                </li>
                
               
              </ul>
            </div>
          </div>
          <div className="p-4">
            <button type="button" className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>
           </button><Link to="/login"> <span className="font-bold text-sm ml-2">Logout</span></Link>  
          </div>
        </div>
      </aside>

      <main className="ml-60 pt-16 max-h-screen overflow-auto">
        <div className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 mb-5">
              <h1 className="text-3xl font-bold mb-10">Students who have enrolled and registration details </h1>
              <div className="flex items-center justify-between">
                <div className="flex items-stretch">
                  <div className="text-gray-400 text-xs">Members<br/>connected</div>
                  <div className="h-100 border-l mx-4"></div>
                  <div className="flex flex-nowrap -space-x-3">
                    <div className="h-9 w-9">
                      <img className="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random" alt="Avatar 1"/>
                    </div>
                    <div className="h-9 w-9">
                      <img className="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random" alt="Avatar 2"/>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <button type="button" className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16">
                      <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                    </svg>
                  </button>
                  <button type="button" className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                    Open
                  </button>
                </div>
              </div>

              <hr className="my-10"/>

              <div className="grid grid-cols-2 gap-x-20">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Stats</h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <div className="p-4 bg-green-100 rounded-xl">
                        <div className="font-bold text-xl text-gray-800 leading-none">Good day, <br/>Admin</div>
                        <div className="mt-5">
                          <button type="button" className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
                            Start tracking
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                      <div className="font-bold text-xl leading-none">Pending Approvals<br/>today</div>
                      <div className="mt-5 text-4xl font-bold">10</div>
                      <div className="mt-2 text-sm">Applications</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Student Status</h2>
                  <div className="grid grid-cols-1 gap-y-4">
                    <div className="p-4 bg-white rounded-xl shadow-sm">
                      <h3 className="font-semibold text-gray-900">New Registrations</h3>
                      <p className="text-sm text-gray-600 mt-2">You have new student registration. Click here to see more details.</p>
                      <button type="button" className="block mt-4 bg-yellow-200 hover:bg-yellow-300 rounded-lg text-yellow-900 font-semibold px-4 py-2 transition">View Registrations</button>
                    </div>
                    <div className="p-4 bg-white rounded-xl shadow-sm">
                      <h3 className="font-semibold text-gray-900">Reminder: Team Lead meeting</h3>
                      <p className="text-sm text-gray-600 mt-2">Don't forget about the team meeting today at 3:00 PM. Make sure to be present.</p>
                      <button type="button" className="block mt-4 bg-yellow-200 hover:bg-yellow-300 rounded-lg text-yellow-900 font-semibold px-4 py-2 transition">Join meeting</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainContent;
