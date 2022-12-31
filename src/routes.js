import Home from './pages/Home/Home';
import Offs from './pages/Offs/Offs';
import Products from './pages/Products/Products.jsx'
import Ticket from './pages/Ticket/Ticket'
import Users from './pages/Users/User'
import Finance from './pages/Finance/Finance';
import Orders from './pages/Orders/Orders';

const routes = [
    {path:'/', element :<Home/>},
    {path:'/offs', element :<Offs/>},
    {path:'/products', element :<Products/>},
    {path:'/ticket', element :<Ticket/>},
    {path:'/users', element :<Users/>},
    {path:'/finance', element :<Finance/>},
    {path:'/orders', element :<Orders/>},
]

export default routes