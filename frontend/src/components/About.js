import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import logo from "../../src/laptop2.jpg";

const About = () => {
  return (
    <Row className="my-5">
      <Col md={6}>
        <Image src={logo} alt="poster" fluid />
      </Col>
      <Col>
        <p>
          <strong>
            Hello! I'm Almedin Alibasic, a software developer with a passion
            for web development. The VINTAGELAND was created as part of my
            learning process of React and Web Developement in general, and as
            such it serves solely to present my work.
          </strong>
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem ipsum dolor sit amet, dictas
          appellantur ex cum, ut sit sonet malorum voluptatum. An vel laboramus
          inciderint, vis facilisis signiferumque at. Qui natum malorum fastidii
          an. In mea vide numquam singulis, et qui errem munere possit. Te eos
          nobis possim, no malorum electram adversarium vis. Unum audiam
          delicatissimi ei eos, ne est eius ancillae, nec et quot meis
          deseruisse. Sit ex exerci inermis evertitur, ex modo erat etiam quo,
          tation veritus suavitate his et. Malorum euismod quo id, decore
          delicatissimi ne mel. Has inani aliquam verterem eu, ea per quidam
          euripidis, sensibus definitiones id sea. Lorem accumsan delicata eum
          ei. Sea eu dicunt quodsi.
        </p>
      </Col>
    </Row>
  );
};

export default About;
