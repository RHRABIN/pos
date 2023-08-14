import App from "./App";
import Test from "./components/Test";
import Details from "./components/Details";
import { createBrowserRouter } from "react-router-dom";

// type RouteDataItem = {
//     path?: string;
//     element?: string;
//     isPrivate?: boolean;
//     children: React.FC;
// };

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Test />
            },
            {
                path: "/detail/:id",
                element: <Details />
            }
        ]
    },

]);

