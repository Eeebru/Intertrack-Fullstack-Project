import React from "react";
import { Row, Col, Input, DatePicker } from "antd";
import { UserOutlined, WechatOutlined } from "@ant-design/icons";
import moment from "moment";
import Navbar from "../layouts/NavBar";
import image from "../../img/hian-oliveira-n_L_ppO4QtY-unsplash.png";

function input() {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  return (
    <div style={{ maxWidth: "100%", width: "100%", minHeight: "100%" }}>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <div>
          <img src={image} alt="profile-image" style={{ width: "100px" }} />
          <br />
          <br />
          <p style={{ fontSize: "30px" }}> Hey! I'm Peach.</p>
        </div>

        <div
          style={{
            width: "100%",
            display: "inline",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <h4>You're signing up</h4>
          <p style={{ color: "black", fontSize: "25px", fontWeight: "bolder" }}>
            Help me get to know you better
          </p>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Row gutter={[16, 16]} style={{ width: "50%" }}>
                <Col lg={12} xs={24}>
                  <Input
                    style={{ width: "300px", borderRadius: "8px" }}
                    placeholder="First and Last Names"
                    prefix={<UserOutlined />}
                  />
                </Col>
                <Col lg={12} xs={24}>
                  <Input.Password
                    style={{ width: "300px", borderRadius: "8px" }}
                    placeholder="input password"
                  />
                </Col>
              </Row>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Row gutter={[16, 16]} style={{ width: "50%" }}>
                {/* <Col lg={12} xs={24}>
                  <DatePicker
                    style={{ width: "300px", borderRadius: "8px" }}
                    placeholder="Date of Birth"
                    defaultValue={moment("01/01/2015", dateFormatList[0])}
                    format={dateFormatList}
                  />
                </Col> */}
                <Col lg={12} xs={24}>
                  <Input
                    style={{ width: "300px", borderRadius: "8px" }}
                    placeholder="Email"
                    prefix={<WechatOutlined />}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default input;
