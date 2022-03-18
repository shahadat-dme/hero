import React from 'react'

const Home = () => {

    // const handleClick = () => {
    //     console.log("Hello!");
    // }
    // const handleClick1 = (e) => {
    //     console.log("Hello!", e);
    // }
    // const handleClickAgain = (name, e) => {
    //     console.log('Hello ' + name, e.target)
    // }

    return (
        <div className='home'>
            <h2>Home page</h2>
            {/* <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={handleClick1}>Click Me</button> */}
            {/* <button onClick={(e) => { handleClickAgain('Shahadat', e) }}>Click Me Again</button> */}

            {/* <button onClick={() => {
                console.log('Hello World!');
            }}>Click Again</button> */}
        </div>
    )
}

export default Home