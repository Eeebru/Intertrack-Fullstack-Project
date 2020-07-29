import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Radio, Button } from "antd";
import Navbar from "../layouts/NavBar";
import image from "../../img/hian-oliveira-n_L_ppO4QtY-unsplash.png";
import Input from "../Register/Input";
import Final from "../Register/Final";

class Signup extends Component {
  state = {
    value: 0,
    showThis: "one",
    switch: true,
  };

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const buttonText = this.state.switch ? "Next" : "Done";
    if (this.state.showThis === "one") {
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
                display: "inline",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <h4>You're signing up</h4>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                {/* <div
                  style={{
                    width: "200px",
                    height: "200px",
                    border:
                      this.state.value === 1
                        ? "1px solid #10DE9F"
                        : "1px solid grey",
                    borderRadius: "10px",
                    textAlign: "center",
                    marginTop: "15px",
                    padding: "10px",
                    margin: "15px",
                  }}
                >
                  <i
                    style={{
                      marginTop: "15px",
                      color: this.state.value === 1 ? "#10DE9F" : null,
                    }}
                    class="fas fa-users fa-5x"
                  ></i>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: this.state.value === 1 ? "#10DE9F" : null,
                    }}
                  >
                    Team
                  </p>
                  <br />
                  <Radio.Group
                    onChange={this.onChange}
                    value={this.state.value}
                  >
                    <Radio value={1}></Radio>
                  </Radio.Group>
                </div> */}
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    border:
                      this.state.value === 2
                        ? "1px solid #10DE9F"
                        : "1px solid grey",
                    borderRadius: "10px",
                    textAlign: "center",
                    marginTop: "15px",
                    padding: "10px",
                    margin: "15px",
                  }}
                >
                  <i
                    style={{
                      marginTop: "15px",
                      color: this.state.value === 2 ? "#10DE9F" : null,
                    }}
                    class="fas fa-user fa-5x"
                  ></i>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: this.state.value === 2 ? "#10DE9F" : null,
                    }}
                  >
                    Individual
                  </p>
                  <br />
                  <Radio.Group
                    onChange={this.onChange}
                    value={this.state.value}
                  >
                    <Radio value={2}></Radio>
                  </Radio.Group>
                </div>
              </div>
              <div>
                <Button
                  style={{
                    border: "2px solid #10DE9F",
                    width: "100px",
                    borderRadius: "5px",
                    color:
                      this.state.value === 1 || this.state.value === 2
                        ? "#ffffff"
                        : "#10DE9F",
                    backgroundColor:
                      this.state.value === 1 || this.state.value === 2
                        ? "#10DE9F"
                        : "#ffffff",
                  }}
                  htmlType="submit"
                  onClick={() => {
                    this.setState({ showThis: "two" });
                  }}
                >
                  {buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.showThis === "two") {
      return (
        <div
          style={{
            display: "inline",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Input />
          <br />
          <br />
          <div>
            <Button
              style={{
                border: "2px solid #10DE9F",
                width: "100px",
                borderRadius: "5px",
                color:
                  this.state.value === 1 || this.state.value === 2
                    ? "#ffffff"
                    : "#10DE9F",
                backgroundColor:
                  this.state.value === 1 || this.state.value === 2
                    ? "#10DE9F"
                    : "#ffffff",
              }}
              htmlType="submit"
              onClick={() => {
                this.setState({ showThis: "three", switch: false });
              }}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      );
    } else if (this.state.showThis === "three") {
      return (
        <div
          style={{
            display: "inline",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Final />
          <br />
          <br />
          <div>
            <Button
              style={{
                border: "2px solid #10DE9F",
                width: "100px",
                borderRadius: "5px",
                color:
                  this.state.value === 1 || this.state.value === 2
                    ? "#ffffff"
                    : "#10DE9F",
                backgroundColor:
                  this.state.value === 1 || this.state.value === 2
                    ? "#10DE9F"
                    : "#ffffff",
              }}
              htmlType="submit"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Signup;
