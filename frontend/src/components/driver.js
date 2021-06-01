import "../styles.css";

//importing pages
import Home from "../components/home";
import Login from "../components/login";
import Signup from "../components/signup";
import Option from "../components/option";
import Chatbot from "../components/chatbot";
import MoreInfo from "../components/moreinfo";
import Skincancerdetecion from "../components/skinCancerDetecion";
import Symptomatediseasedetection from "../components/symptomateDiseaseDetection";
import Footer from "../components/Footer/footer";

import Terms from "../components/Symptoms/terms";
import Introduction from "../components/Symptoms/introduction";
import Forwhom from "../components/Symptoms/forwhom";
import Questions from "../components/Symptoms/questions";
import SymptomSearch from "../components/Symptoms/symptomsearch";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import STerms from "../components/SkinCancer/sterms";
import SIntroduction from "../components/SkinCancer/skinintroduction";
import SForwhom from "../components/SkinCancer/sforwhom";
import SkinCheck from "../components/SkinCancer/skincheck";
import Results from "../components/Symptoms/results";

import UserMain from "../components/UserManagment/usermain";
import ChangeUsername from "../components/UserManagment/changeusername";
import ChangePassword from "../components/UserManagment/changepassword";
import ChangeEmail from "../components/UserManagment/changeemail";
import ChangeDOB from "../components/UserManagment/changedob";
import ESignup from "../components/UserManagment/signup";
import DeleteAccount from "../components/UserManagment/deleteaccount";

import Addbasicinfo from "../components/BasicAndPersonalInformation/basicinfo";
import AddPersonalInfo from "../components/BasicAndPersonalInformation/personalinfo";
import Addmedication from "../components/BasicAndPersonalInformation/addmedication";
import Allergy from "../components/BasicAndPersonalInformation/allergy";
import Library from "../components/BasicAndPersonalInformation/conditionLibrary";

import Reports from "../components/Reports/viewreports";
import AReports from "../components/Reports/areport";

import About from "../components/Settings/about";
import Account from "../components/Settings/accounts";
import Feedback from "../components/Settings/feedback";
import Notifications from "../components/Settings/notifications";

import ALogin from "../components/AdminManagement/adminlogin";
import Privlages from "../components/AdminManagement/privilages";
import VUser from "../components/AdminManagement/viewusers";
import ASignup from "../components/AdminManagement/asignup";

import React from "react";

function Driver() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/option" exact component={Option} />
        <Route path="/chatbot" exact component={Chatbot} />
        <Route path="/moreinfo" exact component={MoreInfo} />
        <Route
          path="/skincancerdetection"
          exact
          component={Skincancerdetecion}
        />
        <Route
          path="/symptomatediseasedetection"
          exact
          component={Symptomatediseasedetection}
        />
        {/* SymptomSearch */}
        <Route path="/symptoms/terms" exact component={Terms} />
        <Route path="/symptoms/introduction" exact component={Introduction} />
        <Route path="/symptoms/forwhom" exact component={Forwhom} />
        <Route path="/symptoms/questions" exact component={Questions} />
        <Route path="/symptoms/symptomsearch" exact component={SymptomSearch} />
        {/* SKIN CANCER */}
        <Route path="/skin/skinterms" exact component={STerms} />
        <Route path="/skin/skinintroduction" exact component={SIntroduction} />
        <Route path="/skin/skinforwhom" exact component={SForwhom} />
        <Route path="/skin/skincancer" exact component={SkinCheck} />
        <Route path="/skin/results" exact component={Results} />
        {/* USER MANAGEMENT */}
        <Route path="/editprofile" exact component={UserMain} />
        <Route
          path="/users/editprofile/changeusername"
          exact
          component={ChangeUsername}
        />
        <Route
          path="/users/editprofile/changepassword"
          exact
          component={ChangePassword}
        />
        <Route path="/editprofile/changeemail" exact component={ChangeEmail} />
        <Route path="/users/editprofile/changeDOB" exact component={ChangeDOB} />
        <Route path="/editprofile/signup" exact component={ESignup} />
        <Route
          path="/users/editprofile/deleteuser"
          exact
          component={DeleteAccount}
        />

        <Route path="/addinfo/basicinfo" exact component={Addbasicinfo} />

        <Route path="/addinfo/personalinfo" exact component={AddPersonalInfo} />

        <Route path="/addinfo/addmedication" exact component={Addmedication} />

        <Route path="/addinfo/allergy" exact component={Allergy} />

        <Route path="/addinfo/background" exact component={Allergy} />

        <Route path="/addinfo/conditionlibrary" exact component={Library} />
  
        


        <Route path="/reports/viewreports" exact component={Reports} />

        <Route path="/reports/aviewreports" exact component={Reports} />


        <Route path="/setting/about" exact component={About} />

        <Route path="/setting/accounts" exact component={Account} />

        <Route path="/setting/feedback" exact component={Feedback} />

        <Route path="/setting/notifications" exact component={Notifications} />

        <Route path="/admin/signup" exact component={ASignup} />
        
        <Route path="/admin/login" exact component={ALogin} />

        <Route path="/admin/privlages" exact component={Privlages} />
        
        <Route path="/users/admin/viewusers" exact component={VUser} />

      </Switch>
      <Footer />
    </Router>
  );
}
export default Driver;
