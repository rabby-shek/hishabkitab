import { Key } from '@mui/icons-material'
import React,{useState, useEffect} from 'react'

const Card_test = () => {
  
  const [todos, SetTodos] = useState(null)
  const [error , setError] = useState(null)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      if(!res.ok)
      {
        throw Error("data fethcing is not successful")
      }
      else{
        return res.json()

      }
      
    })
    .then((data) => {
      SetTodos(data);
      setError(null);
      
    })
    .catch((error)=>{
      setError(error.message)

    })
  },[])


  const todoselement = 
  todos &&
        todos.map((todo) => {
          return <p>{todo.title}</p>
        })

  return (
    <div>
      <h1>Data Fetching using Api</h1>
      {error && <p>{error}</p>}
      {todoselement}
      
       
      
      
    </div>
  )
}

export default Card_test