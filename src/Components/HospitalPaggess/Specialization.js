import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

const specialization = [
  'Anaesthesiology',
  'Cardiologist',
  'Dermatology and Venereology',
  'Endocrinology, Metabolism and Diabetes',
  'General Dentistry',
  'General Surgeon',
  'Gynaecology',
  'In Vitro Fertilization (IVF)',
  'Neuron Surgeon',
  'Nephrology',
  'Oncology/ Oncosurgery (Cancer Care)',
  'Ophthalmology (Eye Care)',
  'Otorhinolaryngology (Ear Nose and Throat)',
  'Physiology',
  'Reproductive Biology',
  'Transplant Surgery',
  'Transfusion Medicine (Blood Bank)',
  'Urology',
  'Others',
];

export default function MultipleSelectCheckmarks() {
  const [specialization1, setSpecialization] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSpecialization(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={specialization1}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {specialization.map((specialization) => (
            <MenuItem key={specialization} value={specialization}>
              <Checkbox checked={specialization1.indexOf(specialization) > -1} />
              <ListItemText primary={specialization} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

    
  );
}
