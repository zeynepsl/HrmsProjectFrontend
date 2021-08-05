import { Icon, Menu, Table } from 'semantic-ui-react'
import { useEffect, useState } from "react";
import CvLanguageService from "../services/cvLanguageService";

export default function CvLanguageList() {
    const [cvLanguages, setcvLanguages] = useState([])

    useEffect(() => {
        let cvLanguageservice = new CvLanguageService()
        cvLanguageservice.getCvLanguages().then(result => setcvLanguages(result.data.data))
    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Yabancı dil</Table.HeaderCell>
                        <Table.HeaderCell>Seviye</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        cvLanguages.map(cvLanguage => (
                            <Table.Row key={cvLanguage.id}>
                                <Table.Cell>{cvLanguage.languageName}</Table.Cell>
                                <Table.Cell>{cvLanguage.level}</Table.Cell>
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