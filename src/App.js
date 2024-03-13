import { useState } from 'react'
import axios from 'axios'
import Home from './pages/home'
export default function App() {
  const [file, setFile] = useState()
  const [description, setDescription] = useState("")

  const submit = async event => {
    event.preventDefault()
    const formData = new FormData()
  formData.append("image", file)
  formData.append("description", description)

  const result = await axios.post('/api/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  console.log(result.data)
  }

  return (
    <div className="">
        <Home/>
    </div>
  )
}