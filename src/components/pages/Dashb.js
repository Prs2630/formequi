import React,{useState,useEffect} from 'react'

const Dashb = () => {
    const [comment, setcomment] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setcomment(data)
        console.log(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
        
    </div>
  )
}

export default Dashb;