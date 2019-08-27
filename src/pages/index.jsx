import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import {
  Landing,
  LandingText,
  HomeContent,
  CardsWrapper,
  Card,
  CardImage,
  CardContent,
  CardContentTitle,
  CardContentDescription,
  CardContentBtn,
  MapWrapper,
  MapTitle,
  Map,
  MapDescription,
  MapDescriptionItem,
} from '../styles/pages/index';

// Imports for cards
import desentupimentosPath from '../images/mangueiraDesentupimento1.jpeg';
import bombagemPath from '../images/bombagem.jpeg';
import canalizacaoPath from '../images/canalizacao.jpeg';
import chaminesPath from '../images/chamines2.jpeg';
import pequenasReparacoesPath from '../images/pequenasReparacoes2.jpeg';
import limpezaPath from '../images/limpeza1.jpeg';

import mapPath from '../images/mapa.jpeg';

const cards = [
  {
    src: desentupimentosPath,
    alt: 'desentupimentos',
    title: 'Desentupimentos',
    description: 'Serviço de desentupimentos de todos os tipos.',
    to: '/services#desentupimentos',
  },
  {
    src: bombagemPath,
    alt: 'bombagem',
    title: 'Bombagem',
    description: 'Serviços de bombagem especializados.',
    to: '/services#bombagem',
  },
  {
    src: canalizacaoPath,
    alt: 'canalizacao',
    title: 'Canalização',
    description: 'Serviços de canalização.',
    to: '/services#canalizacao',
  },
  {
    src: chaminesPath,
    alt: 'chamines',
    title: 'Chaminés',
    description: 'Serviços de chaminés.',
    to: '/services#chamines',
  },
  {
    src: pequenasReparacoesPath,
    alt: 'pequenas reparacoes',
    title: 'Pequenas reparacoes',
    description: 'Serviços de todo o tipo de pequenas reparações.',
    to: '/services#pequenasReparacoes',
  },
  {
    src: limpezaPath,
    alt: 'limpeza',
    title: 'Limpeza',
    description: 'Serviços de limpeza.',
    to: '/services#limpeza',
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
        <CardsWrapper>
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
        </CardsWrapper>
        <MapWrapper>
          <MapTitle>
            Estamos em toda a zona do <span>grande Porto</span>
          </MapTitle>
          <Map src={mapPath} alt="mapa" />
          <MapDescription>
            {[
              'Alfena',
              'Espinho',
              'Ermesinde',
              'Gondomar',
              'Maia',
              'Matosinhos',
              'Paços de Ferreira',
              'Porto',
              'Póvoa de Varzim',
              'São Mamede de Infesta',
              'Santo Tirso',
              'Senhora da Hora',
              'Trofa',
              'Valongo',
              'Vila do Conde',
              'Vila Nova de Gaia',
            ].map(item => (
              <MapDescriptionItem key={item}>
                <FontAwesomeIcon icon="check" />
                {item}
              </MapDescriptionItem>
            ))}
          </MapDescription>
        </MapWrapper>
      </HomeContent>
    </Layout>
  );
};

export default IndexPage;
