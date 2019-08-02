import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import {
  Landing,
  LandingText,
  HomeContent,
  Card,
  CardImage,
  CardContent,
  CardContentTitle,
  CardContentDescription,
  CardContentBtn,
} from '../styles/pages/index';

// Imports for cards
import homePath from '../images/homepage.jpg';
import holePath from '../images/hole.jpg';
import vanPath from '../images/van.jpg';

const cards = [
  {
    src: holePath,
    alt: 'hole',
    title: 'Serviços de Desentupimentos',
    description: 'Desentupimentos mecânicos, tradicionais e eletrónicos.',
    to: '/services',
  },
  {
    src: homePath,
    alt: 'home',
    title: 'Serviços de Desentupimentos',
    description: 'Desentupimentos mecânicos, tradicionais e eletrónicos.',
    to: '/services',
  },
  {
    src: vanPath,
    alt: 'van',
    title: 'Serviços de Desentupimentos',
    description: 'Desentupimentos mecânicos, tradicionais e eletrónicos.',
    to: '/services',
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Início" />
      <Landing />
      <HomeContent>
        {cards.map(({ src, alt, title, description, btnText, to }) => (
          <Card key={alt}>
            <CardImage src={src} alt={alt} />
            <CardContent>
              <CardContentTitle>{title}</CardContentTitle>
              <CardContentDescription>{description}</CardContentDescription>
              <CardContentBtn to={to}>
                <FontAwesomeIcon icon="chevron-right" />
              </CardContentBtn>
            </CardContent>
          </Card>
        ))}
      </HomeContent>
    </Layout>
  );
};

export default IndexPage;
