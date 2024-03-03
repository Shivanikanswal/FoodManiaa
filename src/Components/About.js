import { Component } from "react";
import UserDetailClass from "./UserDetailClass";
import UserDetails from "./UserDetails";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="">
        <div className="about-us">
          <h1 className=" font-bold text-2xl">Welcome to Food Mania</h1>
        </div>
        <div>
          <UserDetailClass name={"First Class"} location={"Dehradun"} />
        </div>
      </div>
    );
  }
}

export default About;
