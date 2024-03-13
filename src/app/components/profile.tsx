import React from "react";
import { Row, Col } from "antd";
type Props = {};
import Image from "next/image";
import ImageProfile from "../assets/images/avatar.jpg";
const Profile = (props: Props) => {
  return (
    <div className="grid">
      <Row>
        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
          <Image
            height={300}
            width={300}
            src={ImageProfile}
            className="rounded-full"
            alt="Avatar"
          />
        </Col>
        <Col xs={24} sm={12} md={18} lg={18} xl={18}></Col>
      </Row>
    </div>
  );
};

export default Profile;
