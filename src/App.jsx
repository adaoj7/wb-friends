import { useState,useEffect } from "react";
import axios from "axios";

export default function App() {
  const [friends,setFriends] = useState([])
  const [picture,setPicture] = useState('')
  const [name,setName] = useState('')
  
  async function getSavedFriends(){
    const res = await axios.get('/api/friends')
    console.log(res)
    setFriends(res.data)
  }

  useEffect(() => {
    getSavedFriends()
  },[])

  const addFriend = () => {
   const newFriends = [...friends]
   newFriends.push({picture,name})
   setFriends(newFriends)
  
   setPicture('')
   setName('')
   console.log(newFriends)
   return setFriends
  }

  const friendInfo = friends.map((friend) => {
    return (
    <div key={`${friend.name}`}>
      <img src={friend.picture} alt={friend.name} />
      <span>{friend.name}</span>
    </div>
    )
  })


  return <div>Hello
    <br />
    <label htmlFor="urlName">Picture:</label>
    <input type="text" id="urlName" value={picture} onChange={(e) => setPicture(e.target.value)}/>

    <label htmlFor="name">Name:</label>
    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>

    <button type="button" onClick={addFriend}>Add Friend</button>

    <div>{friendInfo}</div>

  </div>;
}
