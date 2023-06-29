import { Link } from "react-router-dom";

function Home() {
    return ( <div>
        <h1>Home Client</h1>
        <Link to="/admin">Admin</Link>
    </div> );
}

export default Home;