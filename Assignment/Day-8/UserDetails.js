import { useEffect } from "react";

// Functional Component
const UserDetails = (props) => {
  useEffect(() => {
    console.log("useEffect");
    const timer = setInterval(() => {
      console.log("Interval set");
    }, 1000);
    return () => {
      console.log("useeffect return"); //unmounting
      clearInterval(timer);
    };
  }, []);

  console.log("render");
  return (
    <div className="userBlock">
      <h2>Welcome to the world of tasty and fresh food with {props.name}</h2>
    </div>
  );
};

export default UserDetails;
