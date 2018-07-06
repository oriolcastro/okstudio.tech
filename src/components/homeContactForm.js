import React from 'react'

import {
  Field,
  Label,
  Control,
  Input,
  TextArea,
  Checkbox,
  Button,
  Section,
  Container,
  Columns,
  Column,
  Title,
  Subtitle,
} from 'bloomer'

const HomeContactForm = props => (
  <Section>
    <Container>
      <Columns>
        <Column style={{ display: 'flex', flexDirection: 'column' }}>
          <Title>Contacta amb nosaltres</Title>
          <Subtitle>
            Estem aquí per ajudar-te! Pots trobar-nos a través del formulari o
            al correu electrònic{' '}
            <a href="mailto:hola@okstudio.tech">hola@okstudio.tech</a>
          </Subtitle>
          <p className="privacyInfo is-hidden-mobile">{props.privacyInfo}</p>
        </Column>
        <Column isSize="2/3">
          <form
            name="homePage"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <Field>
              <Label>Nom i cognoms</Label>
              <Control>
                <Input type="text" name="name" placeholder="Hari Seldon" />
              </Control>
            </Field>
            <p className="is-hidden">
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <Field>
              <Label>Correu electrònic</Label>
              <Control>
                <Input
                  type="email"
                  name="email"
                  placeholder="hari@foundation.ia"
                />
              </Control>
            </Field>
            <Field>
              <Label>Com et podem ajudar</Label>
              <Control>
                <TextArea
                  name="message"
                  placeholder={
                    "Explica'ns tot allò que creguis necessari del teu projecte o problema"
                  }
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Checkbox> Accepto la política de privacitat </Checkbox>
              </Control>
            </Field>
            <Field isGrouped>
              <Control>
                <Button type="submit" isColor="primary">
                  Enviar
                </Button>
              </Control>
            </Field>
          </form>
          <p
            className="privacyInfo is-hidden-desktop is-hidden-tablet"
            style={{ marginTop: '2rem' }}
          >
            {props.privacyInfo}
          </p>
        </Column>
      </Columns>
    </Container>
  </Section>
)

export default HomeContactForm
