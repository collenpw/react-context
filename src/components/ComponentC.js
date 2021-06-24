import { useContext } from "react";
import { DataContext } from "../App";

const ComponentC = () => {
    const data = useContext(DataContext);
    console.log(data);
    return (
        <div>
            {data.loggedIn && <h3>The user is: {data.username}</h3>}
            {data.loggedIn && <button onClick={() => data.setLoggedIn(false)}>Log Out</button>}
            {!data.loggedIn && <button onClick={() => data.setLoggedIn(true)}>Log In</button>}
        </div>
    );
};

export default ComponentC;