import React from 'react';

const person = (props) => {
  return (
    <div>

      {/* Con con props. prendo i dati dati nel tag di JSX(app.js) e li gestisco su questo js */}
      <h3>sono {props.name} e ho {Math.floor(Math.random() * 30)} anni!</h3>

      {/* Con props.children invece, gestisco quello che viene scritto tra i tag in app.js */}
      <p>{props.children}</p>

  </div>
  )
}

export default person;