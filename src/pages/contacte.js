import React from 'react'

import {
  Section,
  Container,
  Field,
  Label,
  Control,
  Input,
  TextArea,
  Button,
  Columns,
  Column,
  Content,
  Checkbox,
} from 'bloomer'

import Layout from '../components/layout'
import PageHero from '../components/pagehero'

const ContactePage = () => (
  <Layout>
    <PageHero
      title="Estem aquí per ajudar-te"
      subtitle="Si ens expliques quina necessitat tens, segur que trobarem la forma de treballar plegats"
    />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={6} isOffset={1}>
            <form
              name="contactPage"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <Field>
                <Label>Nom i cognoms</Label>
                <Control>
                  <Input type="text" name="name" placeholder="Jack Sparrow" />
                </Control>
              </Field>
              <p className="is-hidden">
                <label>
                  Don’t fill this out if you're human:{' '}
                  <input name="bot-field" />
                </label>
              </p>
              <Field>
                <Label>Correu electrònic</Label>
                <Control>
                  <Input type="email" name="email" placeholder="@" />
                </Control>
              </Field>
              <Field>
                <Label>Com et podem ajudar</Label>
                <Control>
                  <TextArea
                    name="message"
                    placeholder={'Explica tot allò que creguis necessari'}
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
          </Column>
          <Column isSize={4} isOffset={1}>
            <Content>
              <p className="title is-size-4">
                Pots omplir el formulari o si ho prefereixes escriure'ns
                directament{' '}
                <a href="mailto:hola@okstudio.tech">hola@okstudio.tech</a>
              </p>
            </Content>
          </Column>
          <Column isOffset={1} className="privacyContainer">
            <div className="is-size-5">
              Informació sobre la política de privacitat
            </div>
            <p className="privacyInfo">
              Responsable: Ok! Studio - Oriol Castro Arnau.{'\n'} Finalitat:
              Gestionar l'enviament d'informació relacionada amb la petició.{
                '\n'
              }
              Legitimació: Consentiment de la persona interessada. Podrà exercir
              els seus drets d'accés, rectificació, limitació o suprimir les
              dades a hola@okstudio.tech{'\n'}
              Destinataris: Ok! Studio - Oriol Castro Arnau.
            </p>
          </Column>
        </Columns>
      </Container>
    </Section>
  </Layout>
)

export default ContactePage
