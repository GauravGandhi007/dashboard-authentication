
import { useContext } from "react";
import { RandomJokes } from "./RandomJokes";
import { AuthContext } from '../context/AuthContext';

const DashboardPage = () => {
  const { auth } = useContext(AuthContext);

  
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold mb-4">
        Hello, {auth?.user?.name || auth?.user?.email}!
      </h1>
      <div>
        <RandomJokes/>
      </div>
    </div>
  );
};

export default DashboardPage;
