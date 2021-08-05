import React from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import { useEffect, useState } from "react";
import CvService from "../services/cvService";

export default function CvList() {

    const [cvs, setCvs] = useState([])

    useEffect(() => {
        let cvService = new CvService()
        cvService.getCVs().then(result => setCvs(result.data.data))
    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Aday isim</Table.HeaderCell>
                        <Table.HeaderCell>aday soy isim</Table.HeaderCell>
                        <Table.HeaderCell>aday dogum tarihi</Table.HeaderCell>
                        <Table.HeaderCell>aday e posta</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        cvs.map((cv) => (
                            <Table.Row key={cv.id}>
                                <Table.Cell>{cv.candidate.firstName}</Table.Cell>
                                <Table.Cell>{cv.candidate.lastName}</Table.Cell>
                                <Table.Cell>{cv.candidate.birthDate}</Table.Cell>
                                <Table.Cell>{cv.candidate.email}</Table.Cell>
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