import React, { useState, useEffect} from 'react'

const  PrototypeS1 = () => {

    const elementList = ["yellow", "blue", "green"]
    const [chosenElement, SetElement] = useState ([])
    const [poppupToggle, setpoppupToggle] = useState(false);
    const [hasSeenPoppup, sethasSeenPoppup] = useState(false)
    const [chosenColorBackground, setchosenColorBackground] = useState([])
    const [chosenColorText, setchosenColorText] = useState([])
    const [chosenTextHeader, setchosenTextHeader] = useState([])
    const [chosenTextContnet, setchosenTextContnet] = useState([])
    function chooseElement() {
        const randomIndex = Math.floor(Math.random() * elementList.length);
        SetElement(elementList[randomIndex]);
        setchosenColorBackground(colorsBackground[randomIndex])
        setchosenColorText([colorsText[randomIndex]])
        const randomIndex2 = Math.floor(Math.random() * textContnet.length);
        setchosenTextHeader(textHeaders[randomIndex2])
        setchosenTextContnet(textContnet[randomIndex2])
    }

    // const textStyleBlue
    const colorsBackground = ["#799FFF", "#71B736", "#E59C00"]
    const colorsText = ["#1B31A2", "#1A5B1D", "#644100"]
    const textHeaders = ["Spillevett #1", "Spillevett #2", "Spillevett #3", "Spillevett #4", "Spillevett #5", "Spillevett #6", "Spillevett #7",]
    const textContnet = ["Du må være over 18 år for å spille hos Norsk Tipping.", 
    "Bestem på forhånd hvor mye tid du kan bruke på spill", 
    "Bestem på forhånd hvor mye du har råd til å tape", 
    "Spill ikke for mer enn du kan fortelle til familie og venner.",
    "Ikke tro du kan vinne tilbake det du har tapt",
    "Gevinst skyldes nesten alltid bare tilfeldigheter eller flaks",
    "Lån aldri penger for å spille"



]



    useEffect(() => {
        chooseElement();
    }, []);

    return(
        <>
        <div class="notificationsContainer" style={{marginLeft: "5rem"}}>

        <div class="bootomleftThing" onClick={() => setpoppupToggle(!poppupToggle, sethasSeenPoppup(true))} >
            <div style={{marginRight: "100px",position: 'fixed', bottom: poppupToggle ? '300px' :'0', right: '0', width: "589px", height: "68px",  background: "#D9D9D9",  borderRadius: "25px 25px 0px 0px", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                <h1 style={{position: "relative",  textAlign: "center"}}>Spillevett</h1>
                <div class="inidcationCircle" style={{left: "476px",position: "relative", top: "-65px", width: "40px", height: "40px", fill: hasSeenPoppup ? "#D9D9D9" : "#0EB933",  dropShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", background: hasSeenPoppup ? "#D9D9D9" : "#0EB933", borderRadius: "50%" }}></div>
            
            {/* {poppupToggle && <div>{chosenElement}</div>} */}
            <div class="poppup" style={{width: "589px", height: "295px", top: "-56px", position: "relative", background: "#F7F5FA", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}} >
                <div style={{ position: "relative" ,width: "497px", height: "250px", background: chosenColorBackground, left: "50%", top: "50%", transform: "translate(-50%, -50%)", borderRadius: "25px",boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    {/* <p style={{textAlign: "center"}}>hello</p> */}
                    <p style={{textAlign: "center", color: chosenColorText, top: "10px", fontWeight: "500", fontSize: "2rem", width: "100%", position: "relative", margin: "auto"}}>{chosenTextHeader}</p>
                    <br></br> 
                    <p style={{position: "relative", textAlign: "center", color: chosenColorText, top: "10px", fontWeight: "500", fontSize: "2rem", margin:"auto" }}>{chosenTextContnet}.</p>

                  
                </div>

            </div>
            </div>
           

        </div>
        </div>
        
        </>
// background: "#F7F5FA"
    )
    
}



export default PrototypeS1