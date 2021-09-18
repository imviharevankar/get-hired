import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import MyProfile from "./components/MyProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Applied from "./components/Applied";
import SignIn from "./components/SignIn";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Main from "./components/Main";
import SignUp from "./components/SignUp";
import UserData from "./components/UserData";
import { UserDataProvider } from "./contexts/UserDataContext";

function App() {
  const currentUser = true;

  return (
    <Router>
      <AuthProvider>
        <UserDataProvider>
        <div className="app">
          <Header />
          <div>
            <Switch>
              <Route exact path="/profile" component={MyProfile}></Route>
              <Route exact path="/applied" component={Applied}></Route>
              <Route exact path="/user-data" component={UserData}></Route>
              <Route exact path="/sign-up" component={SignUp}></Route>
              <Route exact path="/sign-in" component={SignIn}></Route>

              <Route exact path="/" component={Dashboard}></Route>
            </Switch>
          </div>
          <Footer />
        </div>
        </UserDataProvider>

      </AuthProvider>
    </Router>
  );
}

export default App;
