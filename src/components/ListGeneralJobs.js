/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useContext, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import JobCard from "./JobCard";
import useFetchData from "../utils/useFetchData";
import dateToString from "../utils/dateToString";
import { AppContext } from "../utils/AppContext";

export default function ListGeneralJobs() {
    const { numberOfPost } = useContext(AppContext);
    const { data, error } = useFetchData();

    let elementToRender;

    if (error) {
        elementToRender = (
            <Box>
                <Typography paragraph>
                    Oops! An error has ocurred fetching the data
                </Typography>
                <Typography paragraph>
                    Error message: {error.message}
                </Typography>
            </Box>
        );
    }

    if (data) {
        elementToRender = data.slice(6, numberOfPost + 6).map((element) => (
            <Grid item xs={12} sm={9} md={5} lg={4} key={element._id}>
                <JobCard
                    id={element._id}
                    company={element.company}
                    jobName={element.name}
                    location={
                        element.stateCategory.charAt(0).toUpperCase() +
                        element.stateCategory.slice(1)
                    }
                    hours={element.jobType}
                    date={dateToString(element.activeFrom)}
                />
            </Grid>
        ));
    }

    useEffect(() => {
        console.log("data", data);
        console.log("error", error);
    });

    return (
        <Box sx={{ mt: 8 }}>
            <Container maxWidth="lg" sx={{ px: 5 }}>
                <Grid
                    container
                    spacing={5}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                >
                    {elementToRender}
                </Grid>
            </Container>
        </Box>
    );
}
