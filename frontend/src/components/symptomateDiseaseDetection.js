import React, { useEffect } from "react";
/*importing pages*/
import Introduction from "../components/Symptoms/introduction";

//importing navbar
import Header from "../components/Navbar/header";

import { useHistory, useLocation } from "react-router";

function Symptomatediseasedetection(props) {

  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = React.useState();
  const [token, setToken] = React.useState();

  useEffect(() => {
    if (location.state) {
      setUser(location.state.user)
      setToken(location.state.token)
    } else {
      history.push('./login')
    }
  }, [location, history]);
  return (
    <div>
    
    <div>
      <Introduction />
      {/* QUESTION#02 */}
    </div>
    </div>
  );
}
export default Symptomatediseasedetection;
