import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import TopPage from "./TopPage";
import MainPage from "./MainPage";
import Type from "./Type";
import Scenario from "./Scenario";
import Ending from "./Ending";


const RoutingTable = createBrowserRouter (
    createRoutesFromElements (
        <>
            <Route path='/' element={<TopPage />} />
            <Route path='/uranai' element={<MainPage />} />
            <Route path='/type' element={<Type />} />
            <Route path='/scenario' element={<Scenario />} />
            <Route path='/ending' element={<Ending />} />
        </>
    )
);

export default RoutingTable;