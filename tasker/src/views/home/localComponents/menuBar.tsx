import React from "react";
import DropDownMenu from "../../../components/dropDownMenu";

function MenuBar(): JSX.Element {
  return (
    <div className="menu-bar">
      <DropDownMenu
        {...{
          title: "Task",
          hasChildren: true,
          children: [
            {
              title: "Add a task",
              action: function () {
                console.log("adding a task");
              },
            },
            {
              title: "Edit task",
              action: function () {
                console.log("editing task");
              },
            },
          ],
        }}
      />
      <DropDownMenu
        {...{
          title: "Project",
          hasChildren: true,
          children: [
            {
              title: "New project",
              hasChildren: false,
              action: function () {
                console.log("adding a new project");
              },
            },
          ],
        }}
      />
    </div>
  );
}

export default MenuBar;
