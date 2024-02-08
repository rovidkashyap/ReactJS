import React from "react";

const Hello = () => {
    // return (
    //     <h1>Hello Rovid</h1>
    // )

    // JSX File
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Techunsolved')
    )
}

export default Hello