import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './src/About';
import Contact from './src/Contact';
import Education from './Education';
import Project from './src/Project';
import Services from './src/Services';
import Layout from './components/Layout';

 // Keeping the page routes together makes every portfolio section easy to find
const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>
                <Route exact path = "/" element={<Home />} />
                <Route exact path = "/about" element={<About />} />
                <Route exact path = "/education" element={<Education />} />  
                <Route exact path = "/projects" element={<Project />} />
                <Route exact path = "/contact" element={<Contact />} />
                <Route exact path = "/services" element={<Services />} />
 
            </Routes>
        </div>
    )
}
export default MainRouter;