import React from 'react'
import StudentDetail from './StudentDetail'

function StudentsList({ students }) {

  return (
    <div className="students-list">
      <h2> {students.map((student, index) => (
        <StudentDetail key={index} student={student} />
      ))}</h2>
    </div>
  )
}

export default StudentsList