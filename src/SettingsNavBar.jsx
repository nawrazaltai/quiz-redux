import { NavLink } from "react-router-dom";

export default function SettingsNavBar() {
  return (
    <div className="settingsNavBar">
      <div className="settingsHomeTitle">
        <NavLink style={{ textDecoration: "none", color: "black" }} to={"/"}>
          Home
        </NavLink>
      </div>
      <div className="settingsAlterQuestions">
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to={"/admin/addquestion"}
        >
          Add Questions
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to={"/admin/updatequestion"}
        >
          Update Questions
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to={"/admin/deletequestion"}
        >
          Delete Questions
        </NavLink>
      </div>
    </div>
  );
}
