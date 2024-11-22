// import React from "react";

// function UserContextExample() {
//   const user = { name: "John Doe", age: 30 }; // Shared data

//   return (
//     <div>
//       <h1>Welcome to the App</h1>
//       <Profile user={user} />
//     </div>
//   );
// }

// function Profile({ user }) {
//   return (
//     <div>
//       <h2>Profile Component</h2>
//       <UserInfo user={user} />
//     </div>
//   );
// }

// function UserInfo({ user }) {
//   return (
//     <div>
//       <p>Name: {user.name}</p>
//       <p>Age: {user.age}</p>
//     </div>
//   );
// }

// export default UserContextExample;



import React, { createContext, useContext } from "react";

// Create a Context
const UserContext = createContext();

function UserContextExample() {
  const user = { firstName: "John",lastName:"Doe", age: 30 }; // Shared data

  return (
    // Provide the context value
    <UserContext.Provider value={user}>
      <div>
        <h1>Welcome to the App</h1>
        <Profile />
      </div>
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>Profile Component for {user.firstName}</h2>
      <UserInfo />
    </div>
  );
}

function UserInfo() {
  // Consume the context value
  const user = useContext(UserContext);

  return (
    <div>
      <p>Name: {user.firstName+' '+user.lastName}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserContextExample;