import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DataProps } from '../App';

const TenureSelect = (props: DataProps) => {
    const { data, setData } = props

    const handleChange = (event: SelectChangeEvent) => {
        setData({ ...data, loanTerm: event.target.value })
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.loanTerm.toString()}
                label="Tenure"
                onChange={handleChange}
            >
                <MenuItem value={10}>10 years</MenuItem>
                <MenuItem value={15}>15 years</MenuItem>
                <MenuItem value={20}>20 years</MenuItem>
                <MenuItem value={25}>25 years</MenuItem>
                <MenuItem value={30}>30 years</MenuItem>
            </Select>
        </FormControl>
    )
}

export default TenureSelect