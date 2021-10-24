import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Build from "./components/a6/Build";
import Practice from "./components/a6/Practice.js";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/a6/build/HomeScreen/HomeScreen";
import Explore from "./components/a6/build/ExploreScreen/explore";

function App() {
  return (
      <>
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
              </div>
          </BrowserRouter>
      </>


  );
}
export default App;
