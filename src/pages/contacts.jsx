import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  ImageWrapper,
  Image,
  FormWrapper,
  Title,
  Form,
  FormInput,
  Input,
  Textarea,
  LabelName,
  ContentName,
  Submit,
} from '../styles/pages/contacts';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import worksPath from '../images/works.jpeg';

// FIXME: Change the email on form action
const Contacts = () => (
  <Layout>
    <SEO title="Contactos" />

    <Container>
      <ImageWrapper>
        <Image src={worksPath} alt="works" />
      </ImageWrapper>
      <FormWrapper>
        <Title>Fale connosco...</Title>
        <Form
          data-netlify="true"
          netlify-honeypot="bot-field"
          method="post"
          action="https://formspree.io/marcoescaleira2000@gmail.com"
          autoComplete="off"
        >
          <input type="hidden" name="bot-field" />

          <FormInput>
            <Input type="text" name="name" required />
            <LabelName htmlFor="name">
              <ContentName>Nome</ContentName>
            </LabelName>
          </FormInput>

          <FormInput>
            <Input type="number" name="mobileNumber" required />
            <LabelName htmlFor="mobileNumber">
              <ContentName>Nr. Telemóvel</ContentName>
            </LabelName>
          </FormInput>

          <FormInput>
            <Input type="text" name="subject" required />
            <LabelName htmlFor="subject">
              <ContentName>Assunto</ContentName>
            </LabelName>
          </FormInput>

          <FormInput>
            <Textarea textarea name="message" required />
            <LabelName htmlFor="message">
              <ContentName>Message</ContentName>
            </LabelName>
          </FormInput>

          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          <Submit type="submit">
            <FontAwesomeIcon icon="paper-plane" />
          </Submit>
        </Form>
      </FormWrapper>
    </Container>
  </Layout>
);

export default Contacts;
