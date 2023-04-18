import {
  Box,
  Stack,
  TextField,
  Select,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

const MONTHS = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

let currentYear = new Date().getFullYear();
let YEARS = [];

for (let i = currentYear; i < currentYear + 10; i = i + 1) {
  YEARS.push(i);
}

function CardForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const handleCardNumberChange = (e) => setCardNumber(e.target.value);
  const handleCardNameChange = (e) => setCardName(e.target.value);
  const handleMonthChange = (e) => setMonth(e.target.value);
  const handleYearChange = (e) => setYear(e.target.value);
  const handleCardCvvChange = (e) => {
    if (e.target.value.length > 3) return null;
    setCardCvv(e.target.value);
  };

  return (
    <Stack spacing={2} sx={{ marginInline: "auto", maxWidth: "35rem" }}>
      <Stack spacing={1}>
        <label htmlFor="card-number">Card Number</label>
        <TextField
          id="card-number"
          type="number"
          value={cardNumber}
          onChange={handleCardNumberChange}
          fullWidth
        />
      </Stack>
      <Stack spacing={1}>
        <label htmlFor="card-number">Card Holder Name</label>
        <TextField
          id="card-number"
          value={cardName}
          onChange={handleCardNameChange}
          fullWidth
        />
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <FormControl fullWidth>
            <InputLabel id="month">Month</InputLabel>
            <Select
              id="month"
              value={month}
              label="Month"
              onChange={handleMonthChange}
            >
              {MONTHS.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="year">Year</InputLabel>
            <Select
              id="year"
              value={year}
              label="Year"
              onChange={handleYearChange}
            >
              {YEARS.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Stack spacing={1}>
          <label htmlFor="card-cvv">Cvv</label>
          <TextField
            id="card-cvv"
            type="number"
            value={cardCvv}
            onChange={handleCardCvvChange}
            fullWidth
          />
        </Stack>
      </Stack>
      <Button sx={{ background: "#2264d3", color: "#fff" }}>Submit</Button>
    </Stack>
  );
}

export default CardForm;
