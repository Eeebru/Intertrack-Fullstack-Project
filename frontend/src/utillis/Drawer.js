import React, { useState } from "react";
import NavBar from "../components/layouts/NavBar";
import { Drawer, Button } from "antd";

const Drawers = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <NavBar />
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </div>

      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default Drawers;
