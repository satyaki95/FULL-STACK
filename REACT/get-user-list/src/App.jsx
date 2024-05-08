import { useEffect, useState } from 'react';

const APIURL = "http://jsonplaceholder.typicode.com/users"

function App() {

  const [userList, setUserList] = useState([]);
  const [clickNo, setClickNo] = useState(0);

  const getUser = () => {
    fetch(APIURL)
    .then(data => data.json())
    .then((list)=> setUserList(list));
  }

  useEffect(() => {
    if(clickNo === 1){
      const oldList = [...userList];
      oldList.sort((a,b)=>a.name.length - b.name.length);
      setUserList(oldList);
    }
    else if(clickNo === 2){
      const oldList = [...userList];
      oldList.sort((a,b)=>b.name.length - a.name.length);
      setUserList(oldList);
    }
    else if(clickNo === 3){
      getUser();
      setClickNo(0);
    }
  },[clickNo]);

  const sortList = () => {
    setClickNo((s)=> s+1 )
  }

  return (
    <main>
      <h1>User List</h1>
      <div>
        <button onClick={getUser}>Get User</button>
        <button onClick={sortList}>Sort List</button>
      </div>
      <ul>
      {userList.map((user,id)=>(
        <li key={id}>{user.name}</li>
      ))}
      </ul>
    </main>
  )
}

export default App;
