import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './component/route/index';
import { DefaultLayout } from "./component/DefaultLayout/index";

function App() {
    return (
        <Router>
            <div className="">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
