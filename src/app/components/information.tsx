import React from "react";
import { Row, Col, Typography, Tooltip } from "antd";
type Props = {};
import Image from "next/image";
import ImageProfile from "../assets/images/avatar.jpg";
import { PhoneOutlined } from "@ant-design/icons";

const Information = (props: Props) => {
    const dataProfile = {
        name: "Trương Mạnh Dũng",
        content:
          "Hello everyone, this is my Blog. I have three years of experience working on React, React Native, Node JS and Angular, I have three years of experience working on React, React Native, Node JS and Angular",
        position: "FrontEnd Developer",
        phoneNumber: "0365727226",
        email: "truongmanhdung04@gmail.com",
        github: "https://github.com/truongmanhdung",
        address: "107 Trần Quốc Vượng, Dịch Vọng Hậu. Cầu Giấy, Hà Nội",
        birthday: '04/01/2000'
      };
  return (
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
          height={250}
          width={250}
          src={ImageProfile}
          style={{ objectFit: "cover" }}
          className="rounded-full"
          alt="Avatar"
        />
      </Col>

      <Col xs={24} sm={12} md={18} lg={18} xl={18}>
        <div className="profile-position">
          <Typography className="font-medium color-white">
            {dataProfile?.position}
          </Typography>
        </div>
        <div className="profile-name">
          <Typography className="font-bold color-white text-name">
            {dataProfile?.name}
          </Typography>
        </div>
        <div className="profile-content">
          <Typography className="font-medium color-white text-content">
            {dataProfile?.content}
          </Typography>
        </div>

        <Row gutter={[24, 0]} className="profile-wrapper mt-[20px]">
          <Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <div className="profile-item-rounded">
              <PhoneOutlined
                style={{
                  fontSize: "28px",
                  color: "white",
                  marginBottom: "5px",
                }}
              />
              <Typography className="font-medium text-content color-white">
                Phone
              </Typography>
              <Typography className="font-medium text-content color-white text-rounded">
                {dataProfile?.phoneNumber}
              </Typography>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <div className="profile-item-rounded">
              <PhoneOutlined
                style={{
                  fontSize: "28px",
                  color: "white",
                  marginBottom: "5px",
                }}
              />
              <Typography className="font-medium text-content color-white">
                Email
              </Typography>
              <Tooltip title={dataProfile?.email}>
                <Typography className="font-medium text-content color-white text-rounded">
                  {dataProfile?.email}
                </Typography>
              </Tooltip>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <div className="profile-item-rounded">
              <PhoneOutlined
                style={{
                  fontSize: "28px",
                  color: "white",
                  marginBottom: "5px",
                }}
              />
              <Typography className="font-medium text-content color-white">
                Birthday
              </Typography>
              <Tooltip title={dataProfile?.birthday}>
                <Typography className="font-medium text-content color-white text-rounded">
                  {dataProfile?.birthday}
                </Typography>
              </Tooltip>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <div className="profile-item-rounded">
              <PhoneOutlined
                style={{
                  fontSize: "28px",
                  color: "white",
                  marginBottom: "5px",
                }}
              />
              <Typography className="font-medium text-content color-white">
                Address
              </Typography>
              <Tooltip title={dataProfile?.address}>
                <Typography className="font-medium text-content color-white text-rounded">
                  {dataProfile?.address}
                </Typography>
              </Tooltip>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <div className="profile-item-rounded">
              <PhoneOutlined
                style={{
                  fontSize: "28px",
                  color: "white",
                  marginBottom: "5px",
                }}
              />
              <Typography className="font-medium text-content color-white">
                Github
              </Typography>
              <Tooltip title={dataProfile?.github}>
                <Typography className="font-medium text-content color-white text-rounded">
                  {dataProfile?.github}
                </Typography>
              </Tooltip>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Information;
