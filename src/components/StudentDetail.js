import React from 'react'

function StudentDetail({ student }) {
    return (
        <div className="card">
            <h1> name: {student[0]}</h1>
            <h1> age: {student[1]}</h1>
            <h1> city: {student[2]}</h1>
        </div>)
}

export default StudentDetail