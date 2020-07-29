import React, { Component } from "react";
import { Row, Col, Radio, Input } from "antd";
import { UserOutlined, DribbbleSquareOutlined } from "@ant-design/icons";
import Navbar from "../layouts/NavBar";
import image from "../../img/hian-oliveira-n_L_ppO4QtY-unsplash.png";

export default class final extends Component {
  state = {
    value: 4,
    name: "Ray",
  };
  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render() {
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

          <div>
            <div
              style={{
                display: "inline",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <h4>You're signing up</h4>
              <p
                style={{
                  color: "black",
                  fontSize: "25px",
                  fontWeight: "bolder",
                }}
              >
                {`Great to meet you ${this.state.name}! Where do you live?`}
              </p>
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
                      placeholder="Country"
                      prefix={<DribbbleSquareOutlined />}
                    />
                  </Col>
                  <Col lg={12} xs={24}>
                    <Input
                      style={{ width: "300px", borderRadius: "8px" }}
                      placeholder="Street Address, City, State"
                      prefix={<DribbbleSquareOutlined />}
                    />
                  </Col>
                </Row>
              </div>
              <div>
                <br />
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>
                    <span style={{ color: "black", fontWeight: "bolder" }}>
                      I agree to the
                    </span>{" "}
                    <span style={{ color: "#10DE9F", fontWeight: "bolder" }}>
                      terms of service
                    </span>
                  </Radio>
                </Radio.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
