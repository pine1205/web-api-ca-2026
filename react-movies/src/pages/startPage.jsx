import { Link } from "react-router";

const StartPage = () => {
  
    return(
        <>
            <p>
                Welcome to Movies Website! View your <Link to="/discover">Movies</Link> or your <Link to="/profile">Profile</Link>.
            </p>
            <p>
                <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to view the Movies!
            </p>
        </>
    );
  };

export default StartPage;
