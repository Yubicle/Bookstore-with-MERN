import {createBrowserRouter} from "react-router-dom";
import App from "../App";

// Method to create a browser router.
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <h1>Home</h1>,
                
            }
        ]
    },
]);

export default router;