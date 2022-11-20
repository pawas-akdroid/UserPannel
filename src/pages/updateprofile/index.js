import React from 'react';
import { Header } from '../../components';

function index() {

  return (

    <div className="md:m-10 mt-1 p-2 md:p-10 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl h-full">
    <Header category="Profile" title="Update Profile" />
        
        <div className=" md:mt-0 md:col-span-2 dark:bg-secondary-dark-bg">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden dark:bg-secondary-dark-bg">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6 dark:bg-secondary-dark-bg">
               

                

                <div>
                  <label className="block text-sm font-medium text-gray-700 ml-3 dark:bg-secondary-dark-bg dark:text-gray-200">Photo</label>
                  <div className="mt-1 flex items-center ml-3 dark:bg-secondary-dark-bg">
                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100 dark:bg-secondary-dark-bg">
                      <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <button
                      type="button"
                      className=" ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Change
                    </button>
                  </div>
                </div>

                <h2 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200">
            User Name
          </h2>

          <input
            className="ml-5 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Uname"
            type="text"
            placeholder="User Name"
          />


          
<h2 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200">
            Password
          </h2>

          <input
            className="ml-5 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />



          
<h2 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200">
            Confirm New Password
          </h2>

          <input
            className="ml-5 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Uname"
            type="password"
            placeholder="Confirm New Password"
          />

              
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 dark:bg-secondary-dark-bg">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>

       
        
      
          <div className="mt-5 md:mt-0 md:col-span-2 dark:bg-secondary-dark-bg">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md dark:bg-secondary-dark-bg">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6 dark:bg-secondary-dark-bg">
                  <fieldset>
                    <legend className="sr-only">By Email</legend>
                    <div className="text-base font-medium text-gray-900 dark:bg-secondary-dark-bg dark:text-gray-200" aria-hidden="true">
                     Notifications By Email
                    </div>
                    <div className="mt-4 space-y-4 ">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded dark:text-gray-200"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-medium text-gray-700 dark:text-gray-200">
                            Comments
                          </label>
                          <p className="text-gray-500 dark:text-gray-200">Get notified when someones posts a comment on a posting.</p>
                        </div>
                      </div>
                      <div className="flex items-start dark:bg-secondary-dark-bg dark:text-gray-200">
                        <div className="flex items-center h-5 dark:bg-secondary-dark-bg dark:text-gray-200">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded dark:text-gray-200"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="candidates" className="font-medium text-gray-700 dark:text-gray-200">
                            Candidates
                          </label>
                          <p className="text-gray-500 dark:text-gray-200">Get notified when a candidate applies for a job.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded dark:text-gray-200"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="offers" className="font-medium text-gray-700 dark:text-gray-200">
                            Offers
                          </label>
                          <p className="text-gray-500 dark:text-gray-200">Get notified when a candidate accepts or rejects an offer.</p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="contents text-base font-medium text-gray-900 dark:text-gray-200">Push Notifications</legend>
                    <p className="text-sm text-gray-500 dark:text-gray-200">These are delivered via SMS to your mobile phone.</p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-200">
                          Everything
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:text-gray-200"
                        />
                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-200">
                          Same as email
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:text-gray-200" 
                        />
                        <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-200">
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 dark:bg-secondary-dark-bg">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      
   
  )
}

export default index;