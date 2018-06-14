import React from 'react'

import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'

const AppFooter = () => (
  <div>
    <Footer id="footer">
      <Container>
        <Content>
          <Columns>
            <Column isSize="1/4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                sed id semper risus in hendrerit. Ultrices gravida dictum fusce
                ut. Ornare lectus sit amet est placerat.
              </p>
            </Column>
            <Column isSize="1/4">
              <p>columna amb llista pagines 1</p>
            </Column>
            <Column isSize="1/4">
              <p>columna amb llista pagines 2</p>
            </Column>
            <Column isSize="1/4">
              <p>columna amb icones xarxes socials</p>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Footer>
  </div>
)

export default AppFooter
