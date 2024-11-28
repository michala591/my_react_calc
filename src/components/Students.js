import React, { useState } from 'react'

function Students({ students, setStudents }) {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [city, setCity] = useState("")
    const [result, setResult] = useState("")


    function submit() {
        if (!students.includes(name)) {
            if ((city === "Tel Aviv" || city === "Beer Sheva" || city === "Rishon Leziyon") && age > 20) {
                const newStudent = students.slice()
                newStudent.push([name, age, city])
                setStudents(newStudent)
                setResult("Accepted")
            } else {
                setResult("Declined")
            }
        }
    }
    return (
        <div className="card">
            name: <input value={name} onChange={(e) => setName(e.target.value)} />
            age: <input value={age} onChange={(e) => setAge(Number(e.target.value))} />
            city:<input value={city} onChange={(e) => setCity(e.target.value)} />
            <div>
                <button type="button" className="button" onClick={submit}>submit</button>
            </div>
            <div>
                <h1 style={{ color: result === "Accepted" ? "blue" : "red" }}>{result}</h1>
            </div>

        </div>
    )
}

export default Students