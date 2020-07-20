import React, { useState } from "react";

export interface DropDownMenuItem {
  title: string;
  hasChildren?: boolean;
  children?: Array<DropDownMenuItem>;
  action?: VoidFunction;
}

export default function DropDownMenu(menuItem: DropDownMenuItem) {
  const [clicked, setClicked] = useState(false);

  const renderSubmenu = (): JSX.Element | undefined => {
    if (menuItem.hasChildren && clicked) {
      return (
        <div className="sub-menu">
          {menuItem.children?.map((child) => (
            <p
              key={child.title}
              onClick={child.action}
              className="sub-menu-item"
            >
              {child.title}
            </p>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="menu-item">
      <p onClick={(): void => setClicked(!clicked)} className="menu-item-title">
        {menuItem.title}
      </p>
      {renderSubmenu()}
    </div>
  );
}
