import { FC, ReactElement } from 'react';

import { Grid } from '@mui/material';
import {TaskArea} from "../components/taskArea/taskArea.tsx";
import {Sidebar} from "../components/sidebar/sidebar.tsx";

export const Dashboard: FC = (): ReactElement => {
    return (
        <Grid container minHeight="100vh" p={0} m={0}>
            <TaskArea/>
            <Sidebar/>
        </Grid>
    );
};
