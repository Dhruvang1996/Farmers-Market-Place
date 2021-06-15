import Navbar from '../components/Navbar';

const cart = ( { isAuthenticated, setIsAuthenticated } ) => {
    return (
      <div>
          <Navbar setIsAuthenticated={setIsAuthenticated} />
          <div>
            <h1>Cart</h1>
          </div>
      </div>
    )
}
  
export default cart;