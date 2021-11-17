import APIExamples from "./APIExamples";
import {Link} from "react-router-dom";
import ReduxExamples from "../a7/Practice/ReduxExamples/components";

const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Link to="/a8/twitter/home">Build</Link>
            <APIExamples/>
            <ReduxExamples/>
        </div>
    )
};
export default Practice;
