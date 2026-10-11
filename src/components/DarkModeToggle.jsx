// DarkModeToggle.jsx - button whose text switches between Dark and Light.
import React from 'react'

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <button onClick={onToggle}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
