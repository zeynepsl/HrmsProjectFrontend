import React from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import { useEffect, useState } from "react";
import CvExperienceService from "../services/cvExperienceService";

export default function CvExperienceList() {
    const [cvExperiences, setCvExperiences] = useState([])

    useEffect(() => {
        let cvExperienceService = new CvExperienceService()
        cvExperienceService.getCvExperiences().then(result => setCvExperiences(result.data.data))
    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Çalışama Yeri</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Başlangıç tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Bitiş tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        cvExperiences.map(cvExperience => (
                            <Table.Row key={cvExperience.id}>
                                <Table.Cell>{cvExperience.workplaceName}</Table.Cell>
                                <Table.Cell>{cvExperience.position}</Table.Cell>
                                <Table.Cell>{cvExperience.startingDate}</Table.Cell>
                                <Table.Cell>{cvExperience.endDate}</Table.Cell>
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