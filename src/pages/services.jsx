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

import limpeza2Path from '../images/limpeza2.jpeg';

const renderDescription = list =>
  list.map(listItem => (
    <ServiceType>
      <span>{listItem}</span>
      <FontAwesomeIcon icon="check" />
    </ServiceType>
  ));

const servicesList = [
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
      {servicesList.map(service => (
        <Service id={service.id} src={service.src}>
          <ServiceContent>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceContent>
        </Service>
      ))}
    </Container>
  </Layout>
);

export default Services;
