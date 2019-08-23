import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import {
  Container,
  Service,
  ServiceContent,
  ServiceTitle,
  ServiceDescription,
  ServiceType,
} from '../styles/pages/services';

import desentupimentosPath from '../images/mangueiraDesentupimento6.jpeg';
import bombagemPath from '../images/bombagem.jpeg';
import canalizacaoPath from '../images/canalizacao.jpeg';
import chaminesPath from '../images/chamines.jpeg';
import pequenasReparacoesPath from '../images/pequenasReparacoes1.jpeg';
import limpeza2Path from '../images/limpeza2.jpeg';

const renderDescription = list =>
  list.map(listItem => (
    <ServiceType key={listItem}>
      <span>{listItem}</span>
      <FontAwesomeIcon icon="check" />
    </ServiceType>
  ));

const servicesList = [
  {
    src: desentupimentosPath,
    id: 'desentupimentos',
    title: 'Desentupimentos',
    description: renderDescription([
      'Limpeza de reservatórios de água',
      'Limpeza de chaminés',
      'Limpeza de passeios',
    ]),
  },
  {
    src: bombagemPath,
    id: 'bombagem',
    title: 'Bombagem',
    description: renderDescription([
      'Limpeza de reservatórios de água',
      'Limpeza de chaminés',
      'Limpeza de passeios',
    ]),
  },
  {
    src: canalizacaoPath,
    id: 'canalizacao',
    title: 'Canalizacao',
    description: renderDescription([
      'Limpeza de reservatórios de água',
      'Limpeza de chaminés',
      'Limpeza de passeios',
    ]),
  },
  {
    src: chaminesPath,
    id: 'chamines',
    title: 'Chaminés',
    description: renderDescription([
      'Limpeza de reservatórios de água',
      'Limpeza de chaminés',
      'Limpeza de passeios',
    ]),
  },
  {
    src: pequenasReparacoesPath,
    id: 'pequenasReparacoes',
    title: 'Pequenas Reparações',
    description: renderDescription([
      'Limpeza de reservatórios de água',
      'Limpeza de chaminés',
      'Limpeza de passeios',
    ]),
  },
  {
    src: limpeza2Path,
    id: 'limpeza',
    title: 'Limpeza',
    description: renderDescription([
      'Limpeza de reservatórios de água',
      'Limpeza de chaminés',
      'Limpeza de passeios',
    ]),
  },
];

const Services = () => (
  <Layout>
    <SEO title="Serviços" />
    <Container>
      {servicesList.map(({ id, src, title, description }) => (
        <Service key={id} id={id} src={src}>
          <ServiceContent>
            <ServiceTitle>{title}</ServiceTitle>
            <ServiceDescription>{description}</ServiceDescription>
          </ServiceContent>
        </Service>
      ))}
    </Container>
  </Layout>
);

export default Services;
