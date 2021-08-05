import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'

//test amaçlı:
//import CvEducationList from '../pages/CvEducationList'
//import CvExperienceList from '../pages/CvExperienceList'
//import CvLanguageList from '../pages/CvLanguageList'
//import CvLinkList from '../pages/CvLinkList'
//import JobPositionList from '../pages/JobPositionList'
//import CandidateList from '../pages/CandidateList'
//import EmployerList from '../pages/EmployerList'
//import CvList from '../pages/CvList'
//import CvList from '../pages/CvList'

import JobAdvertList from '../pages/JobAdvertList'
import Categories from './Categories'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>

                    <Grid.Column width={4}>
                        <Categories/>
                    </Grid.Column>

                    <Grid.Column width={12}>
                        <JobAdvertList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
            
        </div>
    )
}
