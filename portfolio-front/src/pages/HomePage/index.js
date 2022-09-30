import React from "react";

import { handleSectionNavigation } from "util";
import { getCategories, getServices, getEducation, getExperience, blogs, getSites } from "service/api";
import {
  Column,
  Row,
  Stack,
  Img,
  Text,
  Button,
  Line,
  Input,
  List,
  TextArea,
} from "components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const [apiData, setApiData] = React.useState();
  const [apiData1, setApiData1] = React.useState();
  const [apiData2, setApiData2] = React.useState();
  const [apiData3, setApiData3] = React.useState();
  const [apiData4, setApiData4] = React.useState();
  const [apiData5, setApiData5] = React.useState();
  React.useEffect(() => {
    callApi();
    callApi1();
    callApi2();
    callApi3();
    callApi4();
    callApi5();
  }, []);

  function callApi() {
    const req = {};

    getCategories(req)
      .then((res) => {
        setApiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi1() {
    const req = {};

    getServices(req)
      .then((res) => {
        setApiData1(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function callApi2() {
    const req = {};

    getEducation(req)
      .then((res) => {
        setApiData2(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function callApi3() {
    const req = {};

    getExperience(req)
      .then((res) => {
        setApiData3(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function callApi4() {
    const req = {};

    blogs(req)
      .then((res) => {
        setApiData4(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function callApi5(id) {
    const req = {
      path: {
        id: id
      }
    };

    getSites(req)
      .then((res) => {
        setApiData5(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleNavigate6() {
    window.location.href = "https://twitter.com/login/";
  }

  function handleNavigate7() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <Column className="bg-bluegray_50 font-inter items-center mx-[auto] w-[100%]">
        <Row className="justify-between w-[100%]">
          <Column className="bg-white_A700 items-center justify-start lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[21%]">
            <Column className="items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[59%]">
              <Stack className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]">
                <Img
                  src="images/img_profile.png"
                  className="absolute lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] rounded-radius50 w-[100%]"
                  alt="Profile"
                />
                <div className="absolute bg-light_green_600 bottom-[12%] lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] right-[7%] rounded-radius50 shadow-bs1 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"></div>
              </Stack>
              <Text className="capitalize font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Rayan Gossling
              </Text>
              <Text className="capitalize font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                Backend Developer
              </Text>
            </Column>
            <Column className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[87%]">
              <Row className="items-center justify-between w-[99%]">
                <Button
                  className="common-pointer flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  onClick={handleNavigate7}
                  size="smIcn"
                >
                  <Img
                    src="images/img_facebook.svg"
                    className="flex items-center justify-center"
                    alt="facebook"
                  />
                </Button>
                <Button
                  className="flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  size="smIcn"
                >
                  <Img
                    src="images/img_camera.svg"
                    className="flex items-center justify-center lg:h-[9px] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px]"
                    alt="camera"
                  />
                </Button>
                <Button
                  className="common-pointer flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  onClick={handleNavigate6}
                  size="smIcn"
                >
                  <Img
                    src="images/img_twitter.svg"
                    className="flex items-center justify-center"
                    alt="twitter"
                  />
                </Button>
                <Button
                  className="flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  size="smIcn"
                >
                  <Img
                    src="images/img_linkedin.svg"
                    className="flex items-center justify-center"
                    alt="linkedin"
                  />
                </Button>
                <Button
                  className="flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  size="smIcn"
                >
                  <Img
                    src="images/img_vector_bluegray_900.svg"
                    className="flex items-center justify-center"
                    alt="Vector"
                  />
                </Button>
                <Button
                  className="flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  size="smIcn"
                >
                  <Img
                    src="images/img_globe.svg"
                    className="flex items-center justify-center lg:h-[9px] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px]"
                    alt="globe"
                  />
                </Button>
              </Row>
              <Line className="bg-bluegray_50 h-[1.5px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]" />
              <Row className="justify-between lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                <Text className="bg-amber_600 capitalize font-normal not-italic pb-[2px] lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] lg:pr-[6px] xl:pr-[7px] 2xl:pr-[8px] 3xl:pr-[9px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[46px]">
                  Age:
                </Text>
                <Text className="capitalize font-normal mt-[3px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                  24
                </Text>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                <Text className="bg-amber_600 capitalize font-normal not-italic lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[4px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[89px]">
                  Residence:
                </Text>
                <Text className="capitalize font-normal not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                  IN
                </Text>
              </Row>
              <Row className="justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                <Text className="bg-amber_600 capitalize font-normal not-italic lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[4px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[85px]">
                  Freelance:
                </Text>
                <Text className="capitalize font-normal mt-[3px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-light_green_600 w-[auto]">
                  Available
                </Text>
              </Row>
              <Row className="items-end 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                <Text className="bg-amber_600 capitalize font-normal not-italic lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] py-[4px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[75px]">
                  Address:
                </Text>
                <Text className="capitalize font-normal mt-[3px] ml-[53px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] w-[auto]">
                  Surat, India
                </Text>
              </Row>
              <Line className="bg-bluegray_50 h-[1.5px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]" />
              <Column className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rounded-radius30 w-[100%]">
                <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Languages
                </Text>
                <Row className="justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                  <Text className="capitalize font-normal mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    Gujarati
                  </Text>
                  <Text className="capitalize font-normal mb-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    100%
                  </Text>
                </Row>
                <Column className="items-center lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] pb-[1px] rounded-radius2 w-[100%]">

                  <Line className="bg-amber_600 h-[2px] rounded-radius1 w-[99%]" />
                </Column>
                <Row className="justify-between lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[100%]">
                  <Text className="capitalize font-normal mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    English
                  </Text>
                  <Text className="capitalize font-normal mb-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    80%
                  </Text>
                </Row>
                <Column className="lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] pb-[1px] rounded-radius2 w-[100%]">

                  <Line className="bg-amber_600 h-[2px] ml-[1px] rounded-radius1 w-[80%]" />
                </Column>
                <Row className="justify-between lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[100%]">
                  <Text className="capitalize font-normal mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    Hindi
                  </Text>
                  <Text className="capitalize font-normal mb-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    100%
                  </Text>
                </Row>
                <Column className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] pb-[1px] rounded-radius2 w-[100%]">

                  <Line className="bg-amber_600 h-[2px] ml-[1px] rounded-radius1 w-[100%]" />
                </Column>
              </Column>
              <Line className="bg-bluegray_50 h-[1.5px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]" />
              <Column className="lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rounded-radius30 w-[100%]">
                <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Skills
                </Text>
                <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Text className="capitalize font-normal mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    HTML
                  </Text>
                  <Text className="capitalize font-normal mb-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    100%
                  </Text>
                </Row>
                <Column className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] pb-[1px] rounded-radius2 w-[100%]">

                  <Line className="bg-amber_600 h-[2px] ml-[1px] rounded-radius1 w-[100%]" />
                </Column>
                <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]">
                  <Text className="capitalize font-normal mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    CSS
                  </Text>
                  <Text className="capitalize font-normal mb-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    70%
                  </Text>
                </Row>
                <Column className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] pb-[1px] rounded-radius2 w-[100%]">

                  <Line className="bg-amber_600 h-[2px] ml-[1px] rounded-radius1 w-[70%]" />
                </Column>
                <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]">
                  <Text className="capitalize font-normal mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    Javascript
                  </Text>
                  <Text className="capitalize font-normal mb-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    100%
                  </Text>
                </Row>
                <Column className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] pb-[1px] rounded-radius2 w-[100%]">

                  <Line className="bg-amber_600 h-[2px] ml-[1px] rounded-radius1 w-[100%]" />
                </Column>
                <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]">
                  <Text className="capitalize font-normal not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    MongoDB
                  </Text>
                  <Text className="capitalize font-normal not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    80%
                  </Text>
                </Row>
                <Column className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] pb-[1px] rounded-radius2 w-[100%]">

                  <Line className="bg-amber_600 h-[2px] ml-[1px] rounded-radius1 w-[80%]" />
                </Column>
                <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]">
                  <Text className="capitalize font-normal mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    SQL
                  </Text>
                  <Text className="capitalize font-normal mb-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                    50%
                  </Text>
                </Row>
                <Column className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] pb-[1px] rounded-radius2 w-[100%]">

                  <Line className="bg-amber_600 h-[2px] ml-[1px] rounded-radius1 w-[50%]" />
                </Column>
              </Column>
              <Line className="bg-bluegray_50 h-[1.5px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]" />
              <Text className="capitalize font-medium lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Extra Skills
              </Text>
              <Row className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[84%]">
                <Img
                  src="images/img_computer.svg"
                  className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mb-[1px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                  alt="computer"
                />
                <Text className="capitalize font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                  Bootstrap, Materialize
                </Text>
              </Row>
              <Row className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[71%]">
                <Img
                  src="images/img_computer.svg"
                  className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mb-[1px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                  alt="computer One"
                />
                <Text className="capitalize font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                  SEO & Marketing
                </Text>
              </Row>
              <Row className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[84%]">
                <Img
                  src="images/img_computer.svg"
                  className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mb-[1px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                  alt="computer Two"
                />
                <Text className="capitalize font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                  Nodejs with Express
                </Text>
              </Row>
              <Row className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[63%]">
                <Img
                  src="images/img_computer.svg"
                  className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mb-[1px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                  alt="computer Three"
                />
                <Text className="capitalize font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                  GIT
                </Text>
              </Row>
              <Line className="bg-bluegray_50 h-[1.5px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]" />
              <a href="functionalsample.pdf" download="resume.pdf">
                <Button
                  className="2xl:mt-[23px] 3xl:mt-[27px] flex items-center justify-center lg:mt-[17px] text-center w-[100%] xl:mt-[20px]"
                  rightIcon={
                    <Img
                      src="images/img_download.svg"
                      className="text-center lg:w-[8px] lg:ml-[15px] xl:w-[9px] xl:ml-[17px] 2xl:w-[11px] 2xl:ml-[20px] 3xl:w-[13px] 3xl:ml-[24px]"
                      alt="download"
                    />
                  }
                  size="xl"
                  variant="FillAmber600"
                >
                  <div className="bg-transparent font-normal lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] uppercase">
                    Download cv
                  </div>
                </Button>
              </a>
            </Column>
          </Column>
          <Column className="mt-[100px] w-[67%]">
            <Stack className="lg:h-[364px] xl:h-[416px] 2xl:h-[468px] 3xl:h-[561px] w-[100%]">
              <Column className="absolute bg-white_A700 bottom-[0] justify-end lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]">
                <div className="border-2 border-amber_600_cc border-solid lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 3xl:mr-[1068px] lg:mr-[692px] xl:mr-[791px] 2xl:mr-[890px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"></div>
                <Row className="lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:mr-[22px] xl:mr-[25px] 2xl:mr-[29px] 3xl:mr-[34px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[93%]">
                  <Column className="w-[98%]">
                    <div className="border-2 border-green_A700_cc border-solid lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[357px] xl:ml-[409px] 2xl:ml-[460px] 3xl:ml-[552px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"></div>
                    <Column className="lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[61%]">
                      <Text className="capitalize font-bold leading-[123.60%] ml-[3px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-bluegray_900 w-[94%]">
                        <span className="text-bluegray_900 font-inter">
                          I’m Rayan Gossling
                          <br />
                        </span>
                        <span className="text-amber_600 font-inter">
                          Backend
                        </span>
                        <span className="text-bluegray_900 font-inter"> D</span>
                        <span className="text-bluegray_900 font-inter">
                          developer{" "}
                        </span>
                      </Text>
                      <Text className="capitalize font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[77%]">
                        A dedicated software developer who loved to work with progressive team as well as work excellently as an individual. 
                      </Text>
                      <a href="functionalsample.pdf" download="resume.pdf">
                        <Row className="items-end justify-between lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[100%]">

                          <Button
                            className="2xl:mt-[9px] 3xl:mt-[10px] flex items-center justify-center lg:mt-[7px] mb-[2px] text-center w-[30%] xl:mt-[8px]"
                            rightIcon={
                              <Img
                                src="images/img_arrowright.svg"
                                className="text-center lg:w-[7px] lg:h-[8px] lg:ml-[8px] xl:w-[8px] xl:h-[9px] xl:ml-[9px] 2xl:w-[10px] 2xl:h-[11px] 2xl:ml-[11px] 3xl:w-[12px] 3xl:h-[13px] 3xl:ml-[13px]"
                                alt="arrow_right"
                              />
                            }
                            shape="RoundedBorder5"
                            size="xl"
                            variant="FillAmber600"
                          >
                            <div className="bg-transparent font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900">
                              HIRE ME
                            </div>
                          </Button>

                          <Img
                            src="images/img_ticket.svg"
                            className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:mb-[31px] xl:mb-[36px] 2xl:mb-[41px] 3xl:mb-[49px] lg:w-[16px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                            alt="ticket"
                          />
                          <div className="border-2 border-amber_600_cc border-solid lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"></div>
                        </Row>
                      </a>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_ticket_21X21.svg"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:w-[16px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                    alt="ticket One"
                  />
                </Row>
                <Row className="justify-end lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] 2xl:mr-[9px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[92%]">
                  <div className="border-2 border-green_A700_cc border-solid lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"></div>
                  <Img
                    src="images/img_polygon1.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[635px] xl:ml-[726px] 2xl:ml-[817px] 3xl:ml-[980px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    alt="PolygonOne"
                  />
                </Row>
              </Column>
              <Img
                src="images/img_yourimage1.png"
                className="absolute lg:h-[357px] xl:h-[409px] 2xl:h-[460px] 3xl:h-[552px] inset-y-[0] my-[auto] right-[6%] w-[34%]"
                alt="YourImageOne"
              />
            </Stack>
            <Text
              className="capitalize font-bold lg:ml-[294px] xl:ml-[336px] 2xl:ml-[378px] 3xl:ml-[453px] lg:mt-[12px] xl:mt-[28px] 2xl:mt-[45px] 3xl:mt-[74px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]"
              id="block5"
            >
              my services
            </Text>
            <Text className="capitalize font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[210px] xl:ml-[240px] 2xl:ml-[270px] 3xl:ml-[324px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center text-gray_600 w-[44%]">
              Here's what we can connect for.
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[100%]"
              orientation="horizontal"
            >
              <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[100%]">
                {apiData1?.map((apiDataResponseEle, index) => {
                  return (
                    <React.Fragment key={`apiDataResponseEle${index}`}>

                      <Column className="bg-white_A700 items-center lg:p-[27px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] w-[32%]">
                        <Img
                          src={`images/${apiDataResponseEle?.image}`}
                          className="lg:h-[42px] xl:h-[48px] 2xl:h-[54px] 3xl:h-[64px] w-[27%]"
                        />
                        <Text className="capitalize font-medium lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                          {apiDataResponseEle?.name}
                        </Text>
                        <Text className="capitalize font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                          {apiDataResponseEle?.tags}
                        </Text>
                      </Column>


                    </React.Fragment>
                  );
                })}
              </Row>
            </List>
            <Text className="capitalize font-bold lg:ml-[301px] xl:ml-[345px] 2xl:ml-[388px] 3xl:ml-[465px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
              Price plans
            </Text>
            <Text className="capitalize font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[185px] xl:ml-[211px] 2xl:ml-[238px] 3xl:ml-[285px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center text-gray_600 w-[44%]">
              Let's work together on the next big thing
            </Text>
            <List
              className="lg:gap-[16px] xl:gap-[18px] 2xl:gap-[21px] 3xl:gap-[25px] grid grid-cols-3 min-h-[auto] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[100%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 items-center justify-end mt-[1px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]">
                <Text className="capitalize font-normal lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                  silver
                </Text>
                <Row className="items-end justify-center lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[55%]">
                  <Text className="capitalize font-bold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
                    $20.00
                  </Text>
                  <Text className="capitalize font-normal mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                    /hour
                  </Text>
                </Row>
                <Column className="items-center mb-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[97%]">
                  <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[99%]" />
                  <Row className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[65%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] w-[10%]"
                      alt="checkmark One"
                    />
                    <Text className="capitalize font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                      web development
                    </Text>
                  </Row>
                  <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[99%]" />
                  <Row className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[65%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] w-[10%]"
                      alt="checkmark One"
                    />
                    <Text className="capitalize font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                      Content Creation
                    </Text>
                  </Row>
                  <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[99%]" />
                  <Row className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[47%]">
                    <Img
                      src="images/img_close.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[11%]"
                      alt="close"
                    />
                    <Text className="capitalize font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                      logo design
                    </Text>
                  </Row>
                  <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[99%]" />
                  <Row className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[60%]">
                    <Img
                      src="images/img_close.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[8%]"
                      alt="close One"
                    />
                    <Text className="capitalize font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                      seo optimization
                    </Text>
                  </Row>
                  <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[99%]" />
                  <Row className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[75%]">
                    <Img
                      src="images/img_close.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="close Two"
                    />
                    <Text className="capitalize font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                      Backend Development
                    </Text>
                  </Row>
                  <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[99%]" />
                  <Row className="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[44%]">
                    <Img
                      src="images/img_close.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[12%]"
                      alt="close Three"
                    />
                    <Text className="capitalize font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                      5 Websites
                    </Text>
                  </Row>
                  <Line className="bg-gray_50 h-[0.5px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[99%]" />

                  <Line className="bg-gray_50 h-[0.5px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[99%]" />

                  <Button
                    className="capitalize font-bold lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[66%]"
                    shape="CircleBorder19"
                    size="lg"
                    variant="OutlineBlack90026"
                  >
                    ORDER NOW
                  </Button>
                </Column>
              </Column>
              <Stack className="lg:h-[475px] xl:h-[543px] 2xl:h-[611px] 3xl:h-[733px] w-[100%]">
                <Column className="absolute bg-white_A700 items-center justify-end lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs2 top-[0] w-[100%]">
                  <Text className="capitalize font-normal lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                    gold
                  </Text>
                  <Row className="items-end justify-center lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[64%]">
                    <Text className="capitalize font-bold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
                      $50.00
                    </Text>
                    <Text className="capitalize font-normal mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                      /hour
                    </Text>
                  </Row>
                  <Column className="items-center lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[95%]">

                    <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[98%]" />
                    <Row className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[67%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] w-[10%]"
                        alt="checkmark One One"
                      />
                      <Text className="capitalize font-normal lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                        web development
                      </Text>
                    </Row>
                    <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[99%]" />
                    <Row className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[65%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] w-[10%]"
                        alt="checkmark One"
                      />
                      <Text className="capitalize font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                        Content Creation
                      </Text>
                    </Row>
                    <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[98%]" />
                    <Row className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[50%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[13%]"
                        alt="checkmark Two"
                      />
                      <Text className="capitalize font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                        logo design
                      </Text>
                    </Row>
                    <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[98%]" />
                    <Row className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[63%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[10%]"
                        alt="checkmark Three"
                      />
                      <Text className="capitalize font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                        seo optimization
                      </Text>
                    </Row>
                    <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[98%]" />
                    <Row className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[77%]">
                      <Img
                        src="images/img_close.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                        alt="close One"
                      />
                      <Text className="capitalize font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                        Backend Development
                      </Text>
                    </Row>
                    <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[98%]" />
                    <Row className="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[46%]">
                      <Img
                        src="images/img_close.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[12%]"
                        alt="close One One"
                      />
                      <Text className="capitalize font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                        5 Websites
                      </Text>
                    </Row>
                    <Line className="bg-gray_50 h-[0.5px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[98%]" />

                    <Line className="bg-gray_50 h-[0.5px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[98%]" />

                    <Button
                      className="capitalize font-bold lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[68%]"
                      shape="CircleBorder19"
                      size="lg"
                      variant="OutlineBlack900261_2"
                    >
                      ORDER NOW
                    </Button>
                  </Column>
                </Column>
                <Button
                  className="absolute capitalize font-normal not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 text-center top-[0] w-[100%]"
                  size="md"
                  variant="FillAmber600"
                >
                  Most Popular
                </Button>
              </Stack>
              <Column className="bg-white_A700 items-center justify-end mt-[1px] lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                <Text className="capitalize font-normal lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                  Diamond
                </Text>
                <Row className="items-end justify-center lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[64%]">
                  <Text className="capitalize font-bold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
                    $80.00
                  </Text>
                  <Text className="capitalize font-normal mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                    /hour
                  </Text>
                </Row>
                <Column className="items-center lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[96%]">

                  <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[98%]" />
                  <Row className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[67%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] w-[10%]"
                      alt="checkmark One Two"
                    />
                    <Text className="capitalize font-normal lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                      web development
                    </Text>
                  </Row>
                  <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[99%]" />
                  <Row className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[65%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] w-[10%]"
                      alt="checkmark One"
                    />
                    <Text className="capitalize font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                      Content Creation
                    </Text>
                  </Row>
                  <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[98%]" />
                  <Row className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[50%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[13%]"
                      alt="checkmark Two One"
                    />
                    <Text className="capitalize font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                      logo design
                    </Text>
                  </Row>
                  <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[98%]" />
                  <Row className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[63%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[10%]"
                      alt="checkmark Three One"
                    />
                    <Text className="capitalize font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                      seo optimization
                    </Text>
                  </Row>
                  <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[98%]" />
                  <Row className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[78%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] w-[8%]"
                      alt="checkmark Four"
                    />
                    <Text className="capitalize font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                      Backend Development
                    </Text>
                  </Row>
                  <Line className="bg-gray_50 h-[0.5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[98%]" />
                  <Row className="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[46%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[2px] w-[14%]"
                      alt="checkmark Five"
                    />
                    <Text className="capitalize font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[auto]">
                      5 Websites
                    </Text>
                  </Row>
                  <Line className="bg-gray_50 h-[0.5px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[98%]" />

                  <Line className="bg-gray_50 h-[0.5px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[98%]" />

                  <Button
                    className="capitalize font-bold lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[68%]"
                    shape="CircleBorder19"
                    size="lg"
                    variant="OutlineBlack90026"
                  >
                    ORDER NOW
                  </Button>
                </Column>
              </Column>
            </List>
            <Text className="capitalize font-bold lg:ml-[268px] xl:ml-[306px] 2xl:ml-[345px] 3xl:ml-[414px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
              recommendations
            </Text>
            <Text className="capitalize font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[215px] xl:ml-[246px] 2xl:ml-[277px] 3xl:ml-[332px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center text-gray_600 w-[44%]">
              Here is what people said about me.
            </Text>
            <List
              className="lg:gap-[21px] xl:gap-[24px] 2xl:gap-[27px] 3xl:gap-[32px] grid grid-cols-3 min-h-[auto] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[100%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                <Img
                  src="images/img_rating.svg"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[50%]"
                  alt="Rating"
                />
                <Text className="capitalize font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Great Quality!
                </Text>
                <Text className="capitalize font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[97%]">
                  Dhiwise has helped me to build a mobile application in short span of time that makes my productivity growth to 3X times. I would definitely recommend it to start-up companies and Freelance developers.
                </Text>
                <Row className="items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[83%]">
                  <Img
                    src="images/img_profile_80X80.png"
                    className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius50 lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="Profile One"
                  />
                  <Column className="lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] w-[57%]">
                    <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                      John Mayor
                    </Text>
                    <Text className="capitalize font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                      CEO at XYZ
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
                <Img
                  src="images/img_rating.svg"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[47%]"
                  alt="Rating One"
                />
                <Text className="capitalize font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Amazing work!
                </Text>
                <Text className="capitalize font-normal mb-[20px] lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[91%]">
                  First time I heard about DhiWise, I was shocked and said, “finally!”. DhiWise is one of my dream tools for business development. With DhiWise we can cut our cost and also our production time.
                </Text>
                <Row className="items-center lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[78%]">
                  <Img
                    src="images/img_profile_1.png"
                    className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius50 lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="Profile Two"
                  />
                  <Column className="items-center lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] w-[50%]">
                    <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                      Rizky Gust
                    </Text>
                    <Text className="capitalize font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                      Backend Dev
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                <Img
                  src="images/img_rating.svg"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[50%]"
                  alt="Rating Two"
                />
                <Text className="capitalize font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Quick Support
                </Text>
                <Text className="capitalize font-normal mb-[60px] lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[97%]">
                  Amazing project and great team, never had such quick feedback when issues arise or are discovered with DhiWise team.
                </Text>
                <Row className="items-center justify-between lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[97%]">
                  <Img
                    src="images/img_profile_2.png"
                    className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius50 lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="Profile Three"
                  />
                  <Column className="w-[58%]">
                    <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                      Sscha Cot
                    </Text>
                    <Text className="capitalize font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                      CEO at PINthing
                    </Text>
                  </Column>
                </Row>
              </Column>
            </List>
            <Img
              src="images/img_signal.svg"
              className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[351px] xl:ml-[402px] 2xl:ml-[452px] 3xl:ml-[542px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[5%]"
              alt="signal"
            />
            <Text
              className="capitalize font-bold lg:ml-[308px] xl:ml-[353px] 2xl:ml-[397px] 3xl:ml-[476px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]"
              id="block4"
            >
              Education
            </Text>
            <Text className="capitalize font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[210px] xl:ml-[240px] 2xl:ml-[270px] 3xl:ml-[324px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center text-gray_600 w-[44%]">
              My degrees and certificates if that excites you!
            </Text>
            <List
              className="bg-white_A700 gap-[0] min-h-[auto] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] lg:p-[28px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] w-[100%]"
              orientation="vertical"
            >
              {apiData2?.map((apiDataResponseEle, index) => {
                return (
                  <React.Fragment key={`apiDataResponseEle${index}`}>
                    <Column className="lg:mr-[15px] xl:mr-[17px] 2xl:mr-[20px] 3xl:mr-[24px] lg:my-[19px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] rounded-radius1 w-[98%]">
                      <Row className="w-[69%]">
                        <Text className="capitalize font-medium mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[100%]">
                          {apiDataResponseEle?.title}
                        </Text>
                        <Text className="capitalize font-medium mb-[4px] ml-[100px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[100%]">
                          {apiDataResponseEle?.specialization}
                        </Text>
                      </Row>
                      <Row className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                        <Text className="capitalize font-normal mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[100px]">
                          Student
                        </Text>
                        <Text className="bg-amber_600 font-normal lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] not-italic lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] py-[4px] rounded-radius1 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-white_A700 w-[111px]">
                          {apiDataResponseEle?.startdate} - {apiDataResponseEle.enddate}
                        </Text>
                        <Text className="capitalize font-normal ml-[92px] mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[58%]">
                          {apiDataResponseEle?.description}
                        </Text>
                      </Row>
                    </Column>
                    {index < apiData2?.length - 1 && (
                      <Line className="self-center w-[100%] h-[1.5px] bg-bluegray_50" />
                    )}
                  </React.Fragment>
                );
              })}
            </List>
            <Text className="capitalize font-bold lg:ml-[288px] xl:ml-[330px] 2xl:ml-[371px] 3xl:ml-[445px] lg:mt-[59px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
              Work History
            </Text>
            <Text className="capitalize font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[210px] xl:ml-[240px] 2xl:ml-[270px] 3xl:ml-[324px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center text-gray_600 w-[44%]">
              list of work that i have contributed to the industry
            </Text>
            <List
              className="bg-white_A700 gap-[0] min-h-[auto] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] lg:p-[28px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] w-[100%]"
              orientation="vertical"
            >
              {apiData3?.map((apiDataResponseEle, index) => {
                return (
                  <React.Fragment key={`apiDataResponseEle${index}`}>
                    <Column className="lg:mr-[15px] xl:mr-[17px] 2xl:mr-[20px] 3xl:mr-[24px] lg:my-[19px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] rounded-radius1 w-[98%]">
                      <Row className="w-[69%]">
                        <Text className="capitalize font-medium mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[100%]">
                          {apiDataResponseEle?.title}
                        </Text>
                        <Text className="capitalize font-medium mb-[4px] ml-[100px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[100%]">
                          {apiDataResponseEle?.specialization}
                        </Text>
                      </Row>
                      <Row className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                        <Text className="capitalize font-normal mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[100px]">
                          {apiDataResponseEle?.role}
                        </Text>
                        <Text className="bg-amber_600 font-normal lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] not-italic lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] py-[4px] rounded-radius1 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-white_A700 w-[111px]">
                          {apiDataResponseEle?.startdate} - {apiDataResponseEle.enddate}
                        </Text>
                        <Text className="capitalize font-normal  ml-[92px] mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[58%]">
                          {apiDataResponseEle?.description}
                        </Text>
                      </Row>
                    </Column>
                    {index < apiData3?.length - 1 && (
                      <Line className="self-center w-[100%] h-[1.5px] bg-gray_50" />
                    )}
                  </React.Fragment>
                );
              })}
            </List>
            <Text
              className="capitalize font-bold lg:ml-[318px] xl:ml-[364px] 2xl:ml-[410px] 3xl:ml-[492px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]"
              id="block3"
            >
              Portfolio
            </Text>
            <Text className="capitalize font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[210px] xl:ml-[240px] 2xl:ml-[270px] 3xl:ml-[324px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center text-gray_600 w-[44%]">
              Allow the art to speak for itself
            </Text>
            <List
              className="justify-center lg:gap-[28px] xl:gap-[32px] 2xl:gap-[37px] 3xl:gap-[44px] grid grid-cols-6 min-h-[auto] lg:ml-[141px] xl:ml-[120px] 2xl:ml-[182px] 3xl:ml-[218px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[70%]"
              orientation="horizontal"
            >
              <React.Fragment key="category">
                <Text className="cursor-pointer capitalize font-medium mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] w-[100%]"
                  onClick={() => callApi5()}>
                  All Categories
                </Text>
              </React.Fragment>
              {apiData?.map((apiDataResponseEle, index) => {
                return (
                  <React.Fragment key={`apiDataResponseEle${index}`}>
                    <Text className="cursor-pointer font-medium mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] w-[100%]"
                      onClick={() => callApi5(apiDataResponseEle.id)}>
                      {apiDataResponseEle.name}
                    </Text>
                  </React.Fragment>
                );
              })}
            </List>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] grid grid-cols-3 w-[100%]"
              orientation="vertical"
            >
              {
                apiData5?.length ?  apiData5?.map((apiDataResponseEle, index) => {
                  return (
                    <Column className="2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[100%]">
                      <React.Fragment key={`apiDataResponseEle${index}`}>

                        <Img
                          src={`images/${apiDataResponseEle.image}`}
                          className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] w-[90%]"
                          alt="Image One"
                        />
                      </React.Fragment>
                    </Column>
                  );
                }) : <Text className="capitalize font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[350px] xl:ml-[390px] 2xl:ml-[330px] 3xl:ml-[590px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center text-gray_600 w-[44%]">
                  No Data Available
                </Text>
              }
            </List>
            <Text
              className="capitalize font-bold lg:ml-[346px] xl:ml-[396px] 2xl:ml-[446px] 3xl:ml-[535px] lg:mt-[60px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]"
              id="block2"
            >
              Blog
            </Text>
            <Text className="capitalize font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[210px] xl:ml-[240px] 2xl:ml-[270px] 3xl:ml-[324px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center text-gray_600 w-[44%]">
              Blogs that I have authored
            </Text>
            <List
              className="lg:gap-[15px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-3 min-h-[auto] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[100%]"
              orientation="horizontal"
            >
              {apiData4?.items?.map((apiDataItemsEle, index) => {
                return (
                  <React.Fragment key={`apiDataItemsEle${index}`}>
                    <Column className="bg-white_A700 items-center lg:pb-[14px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] w-[100%]">
                      <Img
                        src={apiDataItemsEle?.thumbnail}
                        className="lg:h-[150px] xl:h-[150px] 2xl:h-[150px] 3xl:h-[150px] w-[100%]"
                        alt="Image Six"
                      />
                      <Column className="lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[80%]">
                        <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 h-[80px] w-[auto]">
                          {apiDataItemsEle?.title}
                        </Text>
                        {/* <Text className="capitalize font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[94%]">
                          {apiDataItemsEle?.content}
                        </Text> */}
                        <a href={apiDataItemsEle.link}>
                          <Row className="items-end lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[45%]">
                            <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-amber_600 w-[auto]">
                              Learn More
                            </Text>
                            <Img
                              src="images/img_vector_amber_600.svg"
                              className="lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] mb-[3px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[4%]"
                              alt="Vector Two"
                            />
                          </Row>
                        </a>
                      </Column>
                    </Column>
                  </React.Fragment>
                );
              })}
            </List>
            <Row className="justify-evenly lg:mt-[56px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] w-[100%]">
              <Column className="w-[62%]">
                <Text
                  className="capitalize font-bold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]"
                  id="block1"
                >
                  Leave us your info
                </Text>
                <Column className="bg-white_A700 lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[95%]">
                  <Text className="capitalize font-medium ml-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                    Your Full Name
                  </Text>
                  <Input
                    className="w-[100%]"
                    wrapClassName="2xl:h-[51px] 2xl:mt-[7px] 3xl:h-[61px] 3xl:mt-[8px] flex lg:h-[39px] lg:mt-[5px] w-[100%] xl:h-[45px] xl:mt-[6px]"
                    name="RectangleFiftyNine"
                    placeholder=""
                  ></Input>
                  <Text className="capitalize font-medium ml-[1px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                    Your Email
                  </Text>
                  <Input
                    className="w-[100%]"
                    wrapClassName="2xl:h-[51px] 2xl:mt-[7px] 3xl:h-[61px] 3xl:mt-[8px] flex lg:h-[39px] lg:mt-[5px] w-[100%] xl:h-[45px] xl:mt-[6px]"
                    name="RectangleSixtyEight"
                    placeholder=""
                  ></Input>
                  <Text className="capitalize font-medium ml-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                    Subject
                  </Text>
                  <Input
                    className="w-[100%]"
                    wrapClassName="2xl:h-[51px] 2xl:mt-[9px] 3xl:h-[61px] 3xl:mt-[10px] flex lg:h-[39px] lg:mt-[7px] w-[100%] xl:h-[45px] xl:mt-[8px]"
                    name="RectangleSixtyNine"
                    placeholder=""
                  ></Input>
                  <Text className="capitalize font-medium ml-[1px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                    Your Message
                  </Text>
                  <TextArea
                    className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]"
                    name="RectangleSixtyFour"
                    placeholder=""
                  ></TextArea>
                  <Button
                    className="font-normal mb-[1px] ml-[1px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 text-center uppercase w-[30%]"
                    size="lg"
                    variant="FillAmber600"
                    onClick={() => toast.success("Your message has been received.You will get a mail soon") }
                  >
                    send message
                  </Button>
                </Column>
              </Column>
              <Column className="w-[38%]">
                <Text className="capitalize font-bold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
                  Contact information
                </Text>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="bg-white_A700 items-center justify-end lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
                    <Button className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                      <Img
                        src="images/img_map.svg"
                        className="flex items-center justify-center lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                        alt="map"
                      />
                    </Button>
                    <Column className="items-center lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                      <Row className="justify-between w-[100%]">
                        <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                          Country:
                        </Text>
                        <Text className="capitalize font-normal mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                          India
                        </Text>
                      </Row>
                      <Row className="justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                        <Text className="capitalize font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                          City:
                        </Text>
                        <Text className="capitalize font-normal not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                          Surat
                        </Text>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                        <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                          Streat:
                        </Text>
                        <Text className="capitalize font-normal not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                          Infinity Tower
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 items-center justify-end 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[100%]">
                    <Button className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                      <Img
                        src="images/img_mail.svg"
                        className="flex items-center justify-center"
                        alt="mail"
                      />
                    </Button>
                    <Column className="items-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[92%]">
                      <Row className="w-[100%]">
                        <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                          Email:
                        </Text>
                        <Text className="capitalize font-normal 2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] mt-[2px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                          youremail@gmail.com
                        </Text>
                      </Row>
                      <Row className="justify-between lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                        <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                          Skype:
                        </Text>
                        <Text className="capitalize font-normal mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                          @yourusername
                        </Text>
                      </Row>
                      <Row className="justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                        <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                          Telegram:
                        </Text>
                        <Text className="capitalize font-normal mt-[1px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                          @yourusername
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 items-center justify-end 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[100%]">
                    <Button className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                      <Img
                        src="images/img_computer_40X40.svg"
                        className="flex items-center justify-center"
                        alt="computer Six"
                      />
                    </Button>
                    <Column className="items-center lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[96%]">
                      <Row className="justify-between w-[100%]">
                        <Text className="capitalize font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                          Support services:
                        </Text>
                        <Text className="capitalize font-normal not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                          15369
                        </Text>
                      </Row>
                      <Row className="justify-between lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                        <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                          Office:
                        </Text>
                        <Text className="capitalize font-normal mt-[2px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                          +58 (021)356 587 235
                        </Text>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                        <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                          Personal:
                        </Text>
                        <Text className="capitalize font-normal not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600 w-[auto]">
                          +58 (021)356 587 235
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </List>
              </Column>
            </Row>
            <Button
              className="capitalize font-normal 3xl:mt-[106px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[89px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[100%]"
              size="2xl"
              variant="FillWhiteA700"
            >
              Made with ❤️ using DhiWise
            </Button>
          </Column>
          <Column className="bg-gray_50 items-center lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] shadow-bs3 w-[8%]">

            <Column
              className="bg-cover bg-repeat items-center lg:mt-[137px] xl:mt-[157px] 2xl:mt-[177px] 3xl:mt-[212px] 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[98%]"
            >
            </Column>
            <Column className="items-center lg:mb-[425px] xl:mb-[486px] 2xl:mb-[547px] 3xl:mb-[656px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[61%]">
              <Button className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center rounded-radius50 w-[100%]">
                <Img
                  src="images/img_home.svg"
                  className="flex items-center justify-center"
                  alt="home One"
                />
              </Button>
              <Button
                className="common-pointer flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] rounded-radius50 w-[100%]"
                onClick={() => {
                  handleSectionNavigation("block5");
                }}
                variant="icbFillBluegray50"
              >
                <Img
                  src="images/img_folder.svg"
                  className="flex items-center justify-center"
                  alt="folder"
                />
              </Button>
              <Button
                className="common-pointer flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] rounded-radius50 w-[100%]"
                onClick={() => {
                  handleSectionNavigation("block4");
                }}
                variant="icbFillBluegray50"
              >
                <Img
                  src="images/img_clock.svg"
                  className="flex items-center justify-center"
                  alt="clock"
                />
              </Button>
              <Button
                className="common-pointer flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] rounded-radius50 w-[100%]"
                onClick={() => {
                  handleSectionNavigation("block3");
                }}
                variant="icbFillBluegray50"
              >
                <Img
                  src="images/img_computer_1.svg"
                  className="flex items-center justify-center lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                  alt="computer Seven"
                />
              </Button>
              <Button
                className="common-pointer flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] rounded-radius50 w-[100%]"
                onClick={() => {
                  handleSectionNavigation("block2");
                }}
                variant="icbFillBluegray50"
              >
                <Img
                  src="images/img_vector_gray_600.svg"
                  className="flex items-center justify-center"
                  alt="Vector Six"
                />
              </Button>
              <Button
                className="common-pointer flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] rounded-radius50 w-[100%]"
                onClick={() => {
                  handleSectionNavigation("block1");
                }}
                variant="icbFillBluegray50"
              >
                <Img
                  src="images/img_computer_2.svg"
                  className="flex items-center justify-center"
                  alt="computer Eight"
                />
              </Button>
            </Column>
          </Column>
        </Row>
      </Column>
      <ToastContainer />
    </>
  );
};

export default HomePage;
