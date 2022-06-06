import { useState } from "react"
import Link from "next/link"

function Header({ title }) {
    return <h1>{title ? title : "Default title"}</h1>
}

function NavList(){
    return (
        <>
            <p>
                <Link href = "/personal">
                    <a>Go to personal projects</a>
                </Link>
            </p>
            <p>
                <Link href = "/school">
                    <a>Go to school projects</a>
                </Link>
            </p>

        </>
    );
}

export default function HomePage() {
    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]

    const [likes, setLikes] = useState(0)

    function handleClick() {
        setLikes(likes + 1)
    }

    return (
        <div>
        <NavList>hello </NavList>
        <Header title="Develop. Preview. Ship. 🚀" />
        <ul>
            {names.map((name) => (
            <li key={name}>{name}</li>
            ))}
        </ul>
        

        <button onClick={handleClick}>Like ({likes})</button>
        </div>
    )
}
