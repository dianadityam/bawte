import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup/Signup';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home />} />
                    <Route path='signup' element={<Signup />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
