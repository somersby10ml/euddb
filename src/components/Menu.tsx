import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="mb-2 w-full border-b border-gray-300">
      <Link to="/" className="mr-2">Home</Link>
      <Link to="/address" className="mr-2">address</Link>
    </div>
  );
}
export default Menu;
