import { type ReactNode } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

type AppProps = {
  children: ReactNode;
};
function App({ children }: AppProps) {
  return (
    <div className="h-screen w-screen bg-gray-700 text-gray-300">
      <div className="mb-2 w-full border-b border-gray-300">
        <Link to="/" className="mr-2" />
      </div>
      {children}
    </div>
  );
}

export default App;
