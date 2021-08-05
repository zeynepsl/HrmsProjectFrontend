import React from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import { useEffect, useState } from "react";
import CvEducationService from "../services/cvEducationService";

export default function CvEducationList() {

    const [cvEducations, setCvEducations] = useState([])

    useEffect(() => {
        let cvEducationService = new CvEducationService()
        cvEducationService.getCvEducations().then(result => setCvEducations(result.data.data))
    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Okul adı</Table.HeaderCell>
                        <Table.HeaderCell>Bölüm</Table.HeaderCell>
                        <Table.HeaderCell>Başlangıç tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Bitiş tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        cvEducations.map(cvEducation => (
                            <Table.Row key={cvEducation.id}>
                                <Table.Cell>{cvEducation.schoolName}</Table.Cell>
                                <Table.Cell>{cvEducation.department}</Table.Cell>
                                <Table.Cell>{cvEducation.startingDate}</Table.Cell>
                                <Table.Cell>{cvEducation.endDate}</Table.Cell>
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