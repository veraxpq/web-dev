import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Build from "./components/a7/Build";
import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeScreen from "./components/a6/build/HomeScreen/HomeScreen";
import Explore from "./components/a6/build/ExploreScreen/explore";
import Practice from "./components/a8/Practice"
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ProfileScreen from "./components/a7/build/ProfileScreen"
import EditProfile from "./components/a7/build/EditProfile";
import profile from "./reducers/profile";
import PracticeA8 from "./components/a8/a7/Practice";
import HomeScreenA8 from "./components/a8/a7/build/HomeScreen/HomeScreen";
import EditProfileA8 from "./components/a8/a7/build/EditProfile";
import ProfileScreenA8 from "./components/a8/a7/build/ProfileScreen";
import logger from 'redux-logger';
import PracticeA6 from "./components/a6/Practice";
import PracticeA7 from "./components/a7/Practice";
import ExploreA8 from "./components/a8/a7/build/ExploreScreen/explore";
import A9 from "./components/a9";
import tweetsA9 from "./components/a9/reducers/tweets"
import profileA9 from "./components/a9/reducers/profile"
import whoA9 from "./components/a9/reducers/who"
import HomeScreenA9 from "./components/a9/build/HomeScreen/HomeScreen";
import ExploreA9 from "./components/a9/build/ExploreScreen/explore";
import ProfileScreenA9 from "./components/a9/build/ProfileScreen";
import EditProfileA9 from "./components/a9/build/EditProfile";

const reducer = combineReducers({tweets, who, profile, tweetsA9, profileA9, whoA9})
const store = createStore(reducer, applyMiddleware(logger));
function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <div className="container">
                  <Link to="/a6/practice">A6</Link> |
                  <Link to="/a7/practice">A7</Link> |
                  <Link to="/a8/practice">A8</Link> |
                  <Link to="/a9/practice">A9</Link>

                  <Route path="/a6/hello" exact={true}>
                      <HelloWorld/>
                  </Route>
                  <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                      <PracticeA6/>
                  </Route>
                  <Route path={"/a6/build"} exact={true}>
                      <HomeScreen/>
                  </Route>
                  <Route path={"/a6/twitter/home"} component={HomeScreen} />
                  <Route path="/a6/twitter/explore" component={Explore}/>
                  <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                      <PracticeA7/>
                  </Route>
                  <Route path="/a7/twitter">
                      <Build/>
                  </Route>
                  <Route path={"/a7/twitter/profile"}>
                      <ProfileScreen/>
                  </Route>
                  <Route path={"/a7/twitter/editProfile"}>
                      <EditProfile/>
                  </Route>
                  <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
                      <Practice/>
                  </Route>
                  <Route path={"/a8/practice"}>
                      <PracticeA8/>
                  </Route>
                  <Route path={"/a8/twitter/home"} component={HomeScreenA8} />
                  <Route path={"/a8/twitter/editProfile"}>
                      <EditProfileA8/>
                  </Route>
                  <Route path={"/a8/twitter/explore"}>
                      <ExploreA8/>
                  </Route>
                  <Route path={"/a8/twitter/profile"}>
                      <ProfileScreenA8/>
                  </Route>
                  <Route path={"/a9"}>
                      <A9/>
                  </Route>
              </div>
          </BrowserRouter>
      </Provider>
  );
}
export default App;
