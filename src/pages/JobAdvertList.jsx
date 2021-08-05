import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobAdvertService from '../services/jobAdvertService'

export default function JobAdvertList() {

    const [jobadverts, setJobadverts] = useState([])

    useEffect(() => {
        let jobadvertService = new JobAdvertService()
        jobadvertService.getJobAdverts().then(result => setJobadverts(result.data.data))
    }, [])

    return (

        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>sehir</Table.HeaderCell>
                        <Table.HeaderCell>aciklama</Table.HeaderCell>
                        <Table.HeaderCell>min ucret</Table.HeaderCell>
                        <Table.HeaderCell>max ucret</Table.HeaderCell>
                        <Table.HeaderCell>ilan tarihi</Table.HeaderCell>
                        <Table.HeaderCell>son başvuru tarihi</Table.HeaderCell>
                        <Table.HeaderCell>aktiflik</Table.HeaderCell>
                        <Table.HeaderCell>Şirket</Table.HeaderCell>
                        <Table.HeaderCell>açık pozisyon sayı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobadverts.map((jobadvert) => (
                        <Table.Row key={jobadvert.id}>
                            <Table.Cell>{jobadvert.jobPosition.jobName}</Table.Cell>
                            <Table.Cell>{jobadvert.city.cityName}</Table.Cell>
                            <Table.Cell>{jobadvert.jobDescription}</Table.Cell>
                            <Table.Cell>{jobadvert.minSalary}</Table.Cell>
                            <Table.Cell>{jobadvert.maxSalary}</Table.Cell>
                            <Table.Cell>{jobadvert.creationDate}</Table.Cell>
                            <Table.Cell>{jobadvert.applicationDeadline}</Table.Cell>
                            <Table.Cell>{jobadvert.isActive}</Table.Cell>
                            <Table.Cell>{jobadvert.employer.companyName}</Table.Cell>
                            <Table.Cell>{jobadvert.numberOfOpenPositions}</Table.Cell>           
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
    );
}
