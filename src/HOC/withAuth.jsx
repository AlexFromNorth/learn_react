import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

export const withAuth = (Component) => (props) => {
  const { user } = useContext(AuthContext);

  if (!user)
    return (
      <>
        <br />
        <br />
        <br /> 
        <h3>You are not authorized to view this page</h3>
        <br /> 
        <Link to={'/'}>Back</Link>
      </>
    );

  return <Component {...props} />;
};
