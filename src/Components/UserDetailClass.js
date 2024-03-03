//Class Component
import { Component } from "react";
import { json } from "react-router-dom";

class UserDetailClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdataAssign: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const userData = await fetch("https://api.github.com/users/Shivanikanswal");
    const jsonData = await userData.json();
    this.setState({
      userdataAssign: jsonData,
    });
  }

  render() {
    const { name, location, avatar_url, bio } = this.state.userdataAssign;
    const { count } = this.state;

    return (
      <div className="userBlock">
        <img src={avatar_url}></img>
        <h1>
          {bio} from {location}
        </h1>
      </div>
    );
  }
}
export default UserDetailClass;
