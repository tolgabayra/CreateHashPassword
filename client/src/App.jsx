import { useState } from 'react'
import Header from './components/Header.jsx'
import {appAxios} from "./utils/appAxios.js"

function App() {
  const [password, setPassword] = useState("")
  const [hashPassword, setHashPassword] = useState("")

  const submitPassword = () => {
    appAxios.post("/api/hashed/hash", {password})
    .then(res=>{
      console.log(res);
      setHashPassword(res.data) 
    }).catch(err=>alert("you must write password"))
  }

  return (
      <div className='flex flex-col font-mono'>
      <Header />
        <div>
          <div className='m-10 bg-gray-900 p-10 rounded-2xl'>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-3 text-sm font-medium text-gray-300 dark:text-gray-100 text-center">Your password</label>
                <input onChange={(e)=>{
                  setPassword(e.target.value)
                }} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex mb-3 items-center">
          </div>
              <button onClick={submitPassword} type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Submit</button>
      </div>
     </div>


     <div>
          <div className='m-10 bg-gray-800 p-8 rounded-2xl'>
          <i className="fas fa-cloud text-white border-2 rounded-2xl p-1 m-1"></i>

            <div className="mb-6">
              <label htmlFor="password" className="block mb-3 text-sm font-medium text-gray-300 dark:text-gray-100 text-center">Your hashed password</label>
          </div>
          <div className="flex mb-1 justify-center">
          <p className='text-white'>{hashPassword}</p>
          </div>
      </div>

       
     </div>
    </div>
  )
}

export default App
