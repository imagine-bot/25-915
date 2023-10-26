import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.post('/api/updateCount', { count })
      .catch(error => console.error(error))
  }, [count])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Counter: {count}</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  )
}