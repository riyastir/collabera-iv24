import { useState } from "react"

const Home = () => {
  const [numbers, setNumbers] = useState({ values: { 0: "", 1: "" } })
  const [total, setTotal] = useState("")

  const isValidNumber = (value) => {
    return !isNaN(value) && /^\d*\.?\d*$/.test(value)
  }

  const updateNumber = (key, value) => {
    // Resesting the total
    setTotal("")
    if (isValidNumber(value)) {
      setNumbers((prevState) => ({
        ...prevState,
        values: {
          ...prevState.values,
          [key]: value,
        },
      }))
    } else {
      setNumbers((prevState) => ({
        ...prevState,
        values: {
          ...prevState.values,
          [key]: "",
        },
      }))
      alert(`Invalid Number ${value}`)
    }
  }

  const calculateTotal = () => {
    if (numbers?.values[0] && numbers?.values[1]) {
      setTotal(parseFloat(numbers?.values[0]) + parseFloat(numbers?.values[1]))
    } else {
      alert(`Enter the numbers first`)
    }
  }

  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-5xl font-bold text-center mb-4">
          Adding Two Numbers
        </h1>
        <input
          type="text"
          placeholder="First Number"
          className="mt-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => updateNumber(0, e.target.value)}
          value={numbers?.values[0]}
        />
        <input
          type="text"
          placeholder="Second Number"
          className="mt-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => updateNumber(1, e.target.value)}
          value={numbers?.values[1]}
        />
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          onClick={calculateTotal}
        >
          Add Two Numbers
        </button>
        <h6 className="mt-4">Total: {total}</h6>
      </main>
    </div>
  )
}
export default Home
