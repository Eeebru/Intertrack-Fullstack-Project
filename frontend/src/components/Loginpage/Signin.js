import React, { useState, useEffect } from "react";
import Navbar from "../layouts/NavBar";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import image from "../../img/hian-oliveira-n_L_ppO4QtY-unsplash.png";
import Footer from "../layouts/Footer";

const Signin = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values);
  };
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
          <h1
            style={{
              fontWeigth: "900",
              fontSize: "35px",
              lineHeight: "1.4rem",
            }}
          >
            Enter your login details
          </h1>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form
              form={form}
              name="horizontal_login"
              layout="inline"
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  style={{ borderRadius: "8px" }}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  style={{ borderRadius: "8px" }}
                />
              </Form.Item>
              <Form.Item shouldUpdate={true}>
                {() => (
                  <Button
                    htmlType="submit"
                    style={{ borderRadius: "5px", color: "#52c41a" }}
                    disabled={
                      !form.isFieldsTouched(true) ||
                      form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    Log in
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "300px" }}>
        <Footer />
      </div>
    </div>
  );
};
export default Signin;
