import React from 'react'
import './HomeWork.css'

const HomeWork = () => {
    return (
        <div className='homeWork'>
            <div className=''>
                <h1>How React works?</h1>
                <p>React works in declarative. Declarative 
                    views make code more predictable 
                    and easier to debug. React build components 
                    based ui.React goes through its virtual DOM ,
                    creates a list of those changes that need to 
                    be made to the actual DOM and then does it all in one single process.
                </p>
            </div>
            <div>
                <h1>props vs state</h1>
                <p>props and state are both plain JavaScript objects.
                A Component cannot change its props, but it is 
                responsible for putting together the props of its child Components.
                A Component manages its own state internally, but besides setting 
                an initial state has no business fiddling with the state of its children. 
                You could say the state is private.
                </p>
            </div>
        </div>
)
}

export default HomeWork