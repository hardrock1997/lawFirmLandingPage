import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import line from '../assets/LineInAccordion.png';
import styles from '../components/FAQAccordion.module.css';

export default function FAQAccordion() {
  return (
    <div>
      <Accordion className={styles.accordionWrapper} disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.accordionText}> <p>Amet minim mollit non deserunt ullamco est sit </p>
                <p>aliqua dolor do amet sint.Velit officia consequatduis</p>
                <p>Amet minim mollit non deserunt ullamco est sit </p>
                <p>aliqua dolor do amet sint.Velit officia consequatduis</p>
                <p>aliqua dolor do amet sint</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <img src={line} alt='line'/>
      <Accordion  className={styles.accordionWrapper}>
        <AccordionSummary
          expandIcon={<div className={styles.iconWrapper}><AddIcon className={styles.icon}/></div>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h2>How much is my case worth?</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <img src={line} alt='line'/>
      <Accordion  className={styles.accordionWrapper}>
        <AccordionSummary
          expandIcon={<div className={styles.iconWrapper}><AddIcon className={styles.icon}/></div>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h2>What should I do right after car accident?</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <img src={line} alt='line'/>
      <Accordion  className={styles.accordionWrapper}>
        <AccordionSummary
          expandIcon={<div className={styles.iconWrapper}><AddIcon className={styles.icon}/></div>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h2>How much is my case worth?</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
