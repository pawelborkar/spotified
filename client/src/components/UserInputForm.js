import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "../App.css";

const currencies = [
    {
        value: "Five",
        label: "5",
    },
    {
        value: "Ten",
        label: "10",
    },
    {
        value: "Twenty",
        label: "20",
    },
    {
        value: "Fifty",
        label: "50",
    },
    
];

const UserInputForm = () => {
    const [currency, setCurrency] = React.useState("EUR");

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "23ch" },
                    margin: 9,
                    width: 500,
                    maxWidth: "100%",
                }}
                noValidate
                autoComplete="off"
            >
                {" "}
                <TextField
                    required
                    placeholder="Playlist ID"
                    label="Enter Playlist ID"
                    id="fullWidth"
                />
                <div className="select">
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Select no. of Recommendations"
                        value={currency}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                    >
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </div>
            </Box>
            <Box
                sx={{
                    margin: 10,
                    width: 500,
                    maxWidth: "100%",
                }}
            >
                <Button variant="contained" color="success">
                    GET RECOMMENDATIONS
                </Button>
            </Box>
        </>
    );
};

export default UserInputForm;
