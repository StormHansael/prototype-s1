import React from 'react'
import hand from './nt-hand.png'
import Popover from '@mui/material/Popover';
import { Button, Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

// bg
// numwidth
// ariacontrols
// id
// nummargint
// pmargin

// rulenum
// rule
// rulecontent
// rulelink



const Accordionitem = (props) => {

    return (  
        
        <Accordion style={{ width: "25rem", textAlign: "center", border: "3px white solid", borderRadius: ".5rem", backgroundColor: props.bg}}>
            <AccordionSummary
            aria-controls={props.ariacontrols}
            id={props.id}
            >
            <div style={{height: "2rem", width: props.numwidth, lineHeight: "2rem", color: "white", marginTop: props.nummargint, backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "50%"}}>{props.rulenum}</div>
            <p style={{fontWeight: "bold", margin: props.pmargin}}>{props.rule}</p>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "white"}}>
                <Box style={{backgroundColor: "white"}}>
                    <p>{props.rulecontent}</p>
                    <p>{props.rulelink}</p>
                </Box>
            </AccordionDetails>
        </Accordion>

    )
}


const Overlay = () => {


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;


  return (
    <div style={{display: 'flex', justifyContent: 'right', marginRight: '5rem'}}>
            <Button 
                sx={{
                    ':hover': {
                        bgcolor: "#f9f7fc"
                    },
                    color: 'red', 
                    backgroundColor: '#f9f7fc', 
                    height: '6rem', 
                    width: '6rem',
                    borderRadius: '50%',
                    }} 
                aria-describedby={id} 
                variant="contained"
                onClick={handleClick}>
             <img alt="a pink waving hand" src={hand} style={{width: "70px", height: "70%", marginTop: ".5rem"}}/>
            </Button>
            <Popover 
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                >

                    <Accordionitem 
                        bg="#71B736" 
                        ariacontrols="rule1-content" 
                        id="rule1" 
                        numwidth="2rem" 
                        nummargint=".5rem" 
                        pmargin="1rem 1rem 1rem 2rem"
                        rulenum="#1"
                        rule="Du må være over 18 år for å spille"
                        rulecontent="Du må være over 18 år for å spille hos Norsk Tipping. Forskning viser at jo yngre du er når du begynner å spille, jo større risiko er det for å utvikle spilleproblemer."
                        rulelink="Les mer her"
                    />

                    <Accordionitem 
                        bg="#E59C00" 
                        ariacontrols="rule2-content" 
                        id="rule2" 
                        numwidth="2.5rem" 
                        nummargint="1rem" 
                        pmargin="1rem"
                        rulenum="#2"
                        rule="Bestem på forhånd hvor mye du har råd til å tape"
                        rulecontent="Spillregnskapet gir deg til enhver tid oversikt over hvor mye penger du har brukt."
                        rulelink="Les mer her"
                    />

                    <Accordionitem 
                        bg="#799FFF" 
                        ariacontrols="rule3-content" 
                        id="rule3" 
                        numwidth="2.8rem" 
                        nummargint="1rem" 
                        pmargin="1rem"
                        rulenum="#3"
                        rule="Bestem på forhånd hvor mye tid du kan bruke på spill"
                        rulecontent="Noen ganger kan du trenge å ta en pause fra spill, eller å stenge muligheten til å spille helt."
                        rulelink="Les mer her"
                    />

                    <Accordionitem 
                        bg="#71B736" 
                        ariacontrols="rule4-content" 
                        id="rule4" 
                        numwidth="3rem" 
                        nummargint="1rem" 
                        pmargin="1rem"
                        rulenum="#4"
                        rule="Spill ikke for mer enn du kan fortelle til familie og venner"
                        rulecontent="Spillegrenser hjelper deg til å ikke bruke mer penger og tid enn du har bestemt deg for."
                        rulelink="Les mer her"
                    />

                    <Accordionitem 
                        bg="#E59C00" 
                        ariacontrols="rule5-content" 
                        id="rule5" 
                        numwidth="2.3rem" 
                        nummargint="1rem" 
                        pmargin="1rem"
                        rulenum="#5"
                        rule="Ikke tro du kan vinne tilbake det du har tapt"
                        rulecontent="Ikke noe innhold."
                        rulelink=""
                    />

                    <Accordionitem 
                        bg="#799FFF" 
                        ariacontrols="rule6-content" 
                        id="rule6" 
                        numwidth="3rem" 
                        nummargint="1rem" 
                        pmargin="1rem"
                        rulenum="#6"
                        rule="Gevinst skyldes nesten alltid bare tilfeldigheter eller flaks"
                        rulecontent="Ikke noe innhold."
                        rulelink=""
                    />

                    <Accordionitem 
                        bg="#71B736" 
                        ariacontrols="rule7-content" 
                        id="rule7" 
                        numwidth="2rem" 
                        nummargint="1rem" 
                        pmargin="1rem 1rem 1rem 3rem"
                        rulenum="#7"
                        rule="Lån aldri penger for å spille"
                        rulecontent="Å ha problemer med spill innebærer at du kjenner et sug etter å spille, som du har vanskeligheter med å stå imot."
                        rulelink="Les mer her"
                    />


                <div style={{display: "flex", width: "25rem", height: "4.5rem", textAlign: "center", marginTop: "1rem"}}>
                    <div style={{ width: "12rem", height: "3rem", lineHeight: "3rem", textAlign: "center", margin: "0 auto", backgroundColor: "#E1E7FC", color: "#1F4CD9", borderRadius: "2rem"}}>
                        Les mer om Spillevett
                    </div>
                </div>
            </Popover>
        </div>
  )
}

export default Overlay