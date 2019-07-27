import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { Landing } from './index-styled-components';
import Slider from '../components/Slider';

import vanPath from '../images/van.jpg';
import holePath from '../images/hole.jpg';
import homePath from '../images/homepage.jpg';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Início" />
      <Landing>
        <Slider images={[vanPath, holePath, homePath]} />
      </Landing>
    </Layout>
  );
};

// const data = useStaticQuery(graphql`
//   query {
//     file(relativePath: { eq: "homepage.jpg" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `);

// <Img
//   title="Homepage image"
//   alt="Desentumpimento"
//   fluid={data.file.childImageSharp.fluid}
// />

export default IndexPage;
