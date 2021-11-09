import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Build from "./components/a7/Build";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/a6/build/HomeScreen/HomeScreen";
import Explore from "./components/a6/build/ExploreScreen/explore";
import Practice from "./components/a7/Practice"
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ProfileScreen from "./components/a7/build/ProfileScreen"
import EditProfile from "./components/a7/build/EditProfile";
import profile from "./reducers/profile";

const reducer = combineReducers({tweets, who, profile})
const store = createStore(reducer);
function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <div className="container">
                  <Route path="/a6/hello" exact={true}>
                      <HelloWorld/>
                  </Route>
                  <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                      <Practice/>
                  </Route>
                  <Route path={"/a6/build"} exact={true}>
                      <HomeScreen/>
                  </Route>
                  <Route path={"/a6/twitter/home"} component={HomeScreen} />
                  <Route path="/a6/twitter/explore" component={Explore}/>
                  <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                      <Practice/>
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
              </div>
          </BrowserRouter>
      </Provider>
  );
}
export default App;
