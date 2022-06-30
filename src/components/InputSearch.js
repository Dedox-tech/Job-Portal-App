import {
    Box,
    Grid,
    Typography,
    Container,
    TextField,
    Button,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
} from "@mui/material";
import React from "react";
// import CenterContainerWrapper from "./CenterContainerWrapper";

export default function InputSearch() {
    return (
        <Box sx={{ mt: 5 }}>
            <Container maxWidth="sm" align="center" sx={{ px: 5 }}>
                <Typography variant="h4" color="initial">
                    Hey! What are you looking for today?...
                </Typography>
                <Typography
                    variant="h6"
                    color="text.primary"
                    align="left"
                    sx={{ mt: 4, display: { md: "none" } }}
                >
                    Tech keywords
                </Typography>
                <TextField
                    id="Description"
                    variant="outlined"
                    label="E.g: Front-end, Back-end..."
                    sx={{ mt: 4 }}
                    fullWidth
                />
                <Typography
                    variant="h6"
                    color="text.primary"
                    align="left"
                    sx={{ mt: 4, display: { md: "none" } }}
                >
                    Filters
                </Typography>
                <Grid container spacing={3} mt={0}>
                    <Grid item xs={12} md={4}>
                        <FormControl fullWidth>
                            <InputLabel id="experience-for-jobs">
                                Experience
                            </InputLabel>
                            <Select
                                labelId="experience-for-jobs"
                                label="Experience"
                            >
                                <MenuItem>Junior</MenuItem>
                                <MenuItem>Regular</MenuItem>
                                <MenuItem>Senior</MenuItem>
                                <MenuItem>Lead</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControl fullWidth>
                            <InputLabel id="company-type-for-jobs">
                                Company Type
                            </InputLabel>
                            <Select
                                labelId="company-type-for-jobs"
                                label="Company Type"
                            >
                                <MenuItem>Startup</MenuItem>
                                <MenuItem>Product</MenuItem>
                                <MenuItem>Services</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControl fullWidth>
                            <InputLabel id="hours-for-jobs">Hours</InputLabel>
                            <Select labelId="hours-for-jobs" label="Hours">
                                <MenuItem>Full-Time</MenuItem>
                                <MenuItem>Part-Time</MenuItem>
                                <MenuItem>Contractor</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 4 }}
                >
                    Search
                </Button>
            </Container>
        </Box>
    );
}
