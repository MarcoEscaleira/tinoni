import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { Landing, LandingText } from '../styles/pages/index';

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
