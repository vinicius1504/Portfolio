import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutDynamic from '../../components/common/Layout/LayoutDynamic.jsx';
import AnimatedLayout from '../../components/ui/AnimatedLayout/AnimatedLayout';

const IndexView = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <AnimatedLayout>
                        <LayoutDynamic />
                    </AnimatedLayout>
                } />
            </Routes>
        </Router>
    );
};

export default IndexView;
