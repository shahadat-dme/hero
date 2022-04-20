import React from 'react'

const Blogs = () => {
    return (
        <div>
            <h2>Difference between authorization and authentication</h2>
            <p>Authentication is the process of verifying who a user is,
                while authorization is the process of verifying what they have access to.
                Authentication:
                1.Authentication verifies who the user is.
                2. Authentication is visible to and partially changeable by the user.
                Authorization:
                1.Authorization determines what resources a user can access.
                2. Authorization isn’t visible to or changeable by the user.
            </p>

            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Firebase is used for many purposes that can help your apps to develop, grow and make it a quality app.
                Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system.
                Firebase manages all data real-time in the database.
                1. Amazon Web Services(aws)
                2. azure</p>

            <h2>What other services does firebase provide other than authentication?</h2>
            <p>There are many services which Firebase provides, Most useful of them are: Cloud Firestore. Cloud Functions. Authentication. Hosting. Cloud Storage. Google Analytics. Predictions. Cloud Messaging.</p>
        </div>
    )
}

export default Blogs