import React from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import { useEffect, useState } from "react";
import CvLinkService from "../services/cvLinkService";

export default function CvLinkList(){
    const [cvLinks, setcvLinks] = useState([])

    useEffect(() => {
        let cvLinkService = new CvLinkService()
        cvLinkService.getCvLinks().then(result => setcvLinks(result.data.data))
    }, [])

    return (
        <div>
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Bağlantı</Table.HeaderCell>
        <Table.HeaderCell>Adres</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     {
         cvLinks.map(cvLink => (
              <Table.Row key={cvLink.id}>
        <Table.Cell>{cvLink.name}</Table.Cell>
        <Table.Cell>{cvLink.url}</Table.Cell>
      </Table.Row>
         ))
     }
     
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
        </div>
    )
}