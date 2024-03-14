// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

const TermsSelect = ({ data, setData }) => {

  const handleChange = (event) => {
    setData({ ...data, loanTerm: event.target.value });
  };

  return (
    <>
      <Typography variant="subtitle2" style={{marginBottom: 10}}>Terms</Typography>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data.loanTerm}
        label="Terms"
        defaultValue={5}
        onChange={handleChange}
        style={{width: '100%'}}
      >
        <MenuItem value={5}>5 years</MenuItem>
        <MenuItem value={10}>10 years</MenuItem>
        <MenuItem value={15}>15 years</MenuItem>
        <MenuItem value={20}>20 years</MenuItem>
        <MenuItem value={25}>25 years</MenuItem>
      </Select>
    </>
  );
};

export default TermsSelect;