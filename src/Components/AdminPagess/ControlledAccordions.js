import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <div style={{paddingTop:"50px" ,
      paddingBottom:"40px",
      fontFamily:"Arial, Helvetica, sans-serif"
      }}>
        {/* <h3>Hospital Data </h3> */}
    </div>

    <div  className="abc" style={{marginLeft:"50px" , marginRight:"50px" }}>
      
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{backgroundColor:'#E0E0E0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Doctor Details
          </Typography>

          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Name: "Dr. A.D.Mehta"<br/>
            license: "ABC"<br/>
            contact: "7456"<br/>
            age: 12<br/>
            gender: "Male"<br/>
            qualification: "MBBS"<br/>
            experience: 1.5<br/>
            specialization: "Dirty"<br/>
            charges: 500<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{backgroundColor:'#E0E0E0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Policies</Typography>

          {/* <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography> */}

        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ justifyContent:'flex-start'  }}>
National Policy for Rare Diseases, 2021<br/>
National Health Policy, 2017<br/>
National Mental Health Policy 2014<br/>
National Programme on AMR Containment 2011<br/>
India Newborn Action Plan 2014 (INAP)<br/>
Kangaroo Mother Care & Optimal Feeding of Low Birth Weight Infants 2014<br/>
Home Based New Born Care Operational Guidelines 2014 (revised)<br/>
National Health Profile 2019<br/>
National Health Research Policy (2011)<br/>
National Vaccine Policy (April 2011)<br/>
National Policy for Persons with Disabilities (2006)<br/>
National Health Policy (2002)<br/>
National Health Policy 1983<br/>
National Population Policy (2000)<br/>
The National Youth Policy (2003)<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{backgroundColor:'#E0E0E0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Treatments
          </Typography>

          {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Abdominal pain
          Back pain
Back pain investigations <br/>
Ablation of arrhythmia<br/>
Capsule endoscopy<br/>
Cardiac catheterisation<br/>
Cardiac CT scan (heart CT)<br/>
Back surgery (spinal surgery)<br/>
Ablation of arrhythmia<br/>
Acid reflux (Stretta)<br/>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{backgroundColor:'#E0E0E0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Departments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Heart<br/>
            Brain<br/>
            Kidney<br/>
            Skin<br/>
            Spine<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{backgroundColor:'#E0E0E0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Hospital info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Ruby Hall Clinic: Best Multispeciality Hospital in Pune, Indiahttps://rubyhall.com
59/6, Azad Nagar, Wanowrie, Pune - 411040, Maharashtra, India. ... Rajeev Gandhi Infotech Park, MIDC Phase No 1, Plot No P-33, Hinjawadi, Pune – 411057
          </Typography>
        </AccordionDetails>
      </Accordion>
          </div>
    </div>
  );
}
