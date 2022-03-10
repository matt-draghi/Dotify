import { useState, useEffect } from 'react'

function Home(){

    const [user, setUser] = useState("")

    useEffect (() => {
        fetch("http://localhost:9292/users/1")
            .then(r => r.json())
            .then(user => setUser(user))
    }, [])

return(
    <div className="home-page">
        <h1 className="dotify-title">Dotify.</h1>
        <p className="welcome">{user.user_name ? `Hello, ${user.user_name}.` : null}</p>
    </div>
)
}

export default Home