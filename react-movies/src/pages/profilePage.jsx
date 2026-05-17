import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/authContext";

const ProfilePage = () => {
     const context = useContext(AuthContext);
    const navigate = useNavigate();
  
    return context.isAuthenticated ?  (
          <p>
            User profile: {context.userName}
        </p>
    ) : (
     
     <p>
            You must log in to see your profile! {" "}
            <button onClick={() => navigate('/login')}>Login</button>
      </p>
    );
};

export default ProfilePage;
