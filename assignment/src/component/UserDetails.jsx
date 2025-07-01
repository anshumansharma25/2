import React from 'react'

export default function UserDetails({name, age, city, email}) {
    
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-72 flex flex-col items-center space-y-4 ">
          <img
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg"
            alt="Rounded avatar"
          />

          <div className="text-center text-black space-y-1">
            <h2 className="text-lg font-semibold">Name: {name}</h2>
            <p className="text-sm">Age: {age}</p>
            <p className="text-sm">City: {city}</p>
            <p className="text-sm break-words">Email: {email}</p>
          </div>
        </div>
      </div>
    );
      
}


