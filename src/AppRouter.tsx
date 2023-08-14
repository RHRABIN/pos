import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import Details from "./components/Details";

const Approuter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense
                        fallback={
                            <div className="h-screen w-full flex justify-center items-center">
                                Loading..
                            </div>
                        }
                    >

                    </Suspense>
                }
            >
                <Route path="/" element={<Test />} />
                <Route path="/details/:id" element={<Details />} />
            </Route>
        </Routes>
    );
};

export default Approuter;