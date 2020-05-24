import React from 'react'

function Menu(props) {

  const onChange = () => {
    props.toggleDarkMode()
  }
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input onChange={() => onChange()} type="checkbox" name="public" />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu