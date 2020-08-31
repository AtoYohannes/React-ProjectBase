import React from "react";

const SlidingDrawer = ({ type, show }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className={drawerClasses}>
      {type === "signIn" ? "Sign In" : "Sign Up"}
    </div>
  );
};

export default SlidingDrawer;
