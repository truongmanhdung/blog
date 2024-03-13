import React from "react";
import { Row, Col, Typography } from "antd";
type Props = {};
import Image from "next/image";
import ImageProfile from "../assets/images/avatar.jpg";
import { PhoneOutlined } from "@ant-design/icons";

const Profile = (props: Props) => {
  const dataProfile = {
    name: "Trương Mạnh Dũng",
    content:
      "Hello everyone, this is my Blog. I have three years of experience working on React, React Native, Node JS and Angular",
    position: "FrontEnd Developer",
    phoneNumber: "0365727226",
    email: "truongmanhdung04@gmail.com",
    github: "https://github.com/truongmanhdung",
    address: "107 Trần Quốc Vượng, Dịch Vọng Hậu. Cầu Giấy, Hà Nội",
  };

  return (
    <div className="grid">
      <Row>
        <Col
          xs={24}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className="items-center d-flex justify-center"
        >
          <Image
            height={200}
            width={200}
            src={ImageProfile}
            style={{ objectFit: "cover" }}
            className="rounded-full"
            alt="Avatar"
          />
        </Col>

        <Col xs={24} sm={12} md={18} lg={18} xl={18}>
          <div className="profile-position">
            <Typography className="font-medium">
              {dataProfile?.position}
            </Typography>
          </div>
          <div className="profile-name">
            <Typography className="font-bold text-name">
              {dataProfile?.name}
            </Typography>
          </div>
          <div className="profile-content">
            <Typography className="font-medium text-content">
              {dataProfile?.content}
            </Typography>
          </div>

          <Row gutter={[12, 12]} className="profile-wrapper mt-[20px]">
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="profile-item-rounded">
                <PhoneOutlined
                  style={{
                    fontSize: "28px",
                    color: "white",
                    marginBottom: "5px",
                  }}
                />
                <Typography className="font-medium text-content color-white">
                  {dataProfile?.phoneNumber}
                </Typography>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="profile-item-rounded">
                <PhoneOutlined
                  style={{
                    fontSize: "28px",
                    color: "white",
                    marginBottom: "5px",
                  }}
                />

                <Typography className="font-medium text-content color-white">
                  {dataProfile?.phoneNumber}
                </Typography>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="profile-item-rounded">
                <PhoneOutlined
                  style={{
                    fontSize: "28px",
                    color: "white",
                    marginBottom: "5px",
                  }}
                />
                <Typography className="font-medium text-content color-white">
                  {dataProfile?.phoneNumber}
                </Typography>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="profile-item-rounded">
                <PhoneOutlined
                  style={{
                    fontSize: "28px",
                    color: "white",
                    marginBottom: "5px",
                  }}
                />
                <Typography className="font-medium text-content color-white">
                  {dataProfile?.phoneNumber}
                </Typography>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
