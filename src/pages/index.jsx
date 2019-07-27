import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { Landing, LandingText } from './index-styled-components';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Início" />
      <Landing>
        <LandingText>
          Desentupimentos <br />
          <span>24 horas</span>
        </LandingText>
      </Landing>
    </Layout>
  );
};

export default IndexPage;
