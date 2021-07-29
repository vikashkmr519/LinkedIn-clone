import styled from "styled-components";
import React from "react";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import Main from "./Main";
import { Redirect } from "react-router";
import { connect } from "react-redux";

function Home(props) {
  return (
    <Container>
      {!props.user && <Redirect to="/" />}
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <Leftside />
        <Main></Main>
        <Rightside />
      </Layout>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Content = styled.div`
  max-width: 112%;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;

  h5 {
    color: #0a66c2;
    font-size: 18px;
    a {
      font-weight: 700;
      cursor: pointer;
    }
  }

  p {
    font-size: 18px;
    color: #434649;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;

  //grid-template-row: auto;
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);
