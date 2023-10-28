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
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => setCount(0)}
        >
          Reset to Zero
        </button>
      </div>
      <table className="mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Row</th>
            <th className="px-4 py-2">Column</th>
            <th className="px-4 py-2">Input</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: count }, (_, i) => (
            <tr key={i}>
              <td className="border px-4 py-2">{i + 1}</td>
              <td className="border px-4 py-2">{new Date().toLocaleString()}</td>
              <td className="border px-4 py-2">
                <input type="text" className="border rounded px-2 py-1" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}