import { useState, useEffect } from 'react'

function Home({setSearchToAllSongs}){

    const [user, setUser] = useState("")

    useEffect (() => {
        setSearchToAllSongs(true)

        fetch("http://localhost:9292/users/1")
            .then(r => r.json())
            .then(user => setUser(user))
    }, [])

return(
    <div className="home-page">
        <div className="dotify-title-div">
            <h1 className="dotify-title">Dotify</h1>
            <h1 className="title-dot">.</h1>
        </div>
        <p className="welcome">{user.user_name ? `Hello, ${user.user_name}.` : null}</p>
    </div>
)
}

export default Home