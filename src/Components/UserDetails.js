// Functional Component
const UserDetails = (props) => {
  return (
    <div className="userBlock">
      <h2>Welcome to the world of tasty and fresh food with {props.name}</h2>
    </div>
  );
};

export default UserDetails;
