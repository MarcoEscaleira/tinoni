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
import desentupimentosPath from '../images/mangueiraDesentupimento1.jpeg';
import bombagemPath from '../images/bombagem.jpeg';
import canalizacaoPath from '../images/canalizacao.jpeg';
import chaminesPath from '../images/chamines2.jpeg';
import pequenasReparacoesPath from '../images/pequenasReparacoes2.jpeg';

const cards = [
  {
    src: desentupimentosPath,
    alt: 'desentupimentos',
    title: 'Desentupimentos',
    description: 'Serviço de desentupimentos de todos os tipos.',
    to: '/services',
  },
  {
    src: bombagemPath,
    alt: 'bombagem',
    title: 'Bombagem',
    description: 'Serviços de bombagem especializados.',
    to: '/services',
  },
  {
    src: canalizacaoPath,
    alt: 'canalizacao',
    title: 'Canalização',
    description: 'Serviços de canalização.',
    to: '/services',
  },
  {
    src: chaminesPath,
    alt: 'chamines',
    title: 'Chaminés',
    description: 'Serviços de chaminés.',
    to: '/services',
  },
  {
    src: pequenasReparacoesPath,
    alt: 'pequenas reparacoes',
    title: 'Pequenas reparacoes',
    description: 'Serviços de todo o tipo de pequenas reparações.',
    to: '/services',
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Início" />
      <Landing>
        <LandingText>
          <span>24</span> Horas
        </LandingText>
      </Landing>
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
