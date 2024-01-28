import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import gdes from './nt-gdes.png'
import age from './nt-age.png'
import Header from './Header.jsx'
import PrototypeS1 from './Prototype_s1';


import Overlay from './overlay/Overlay'

const main = {
    backgroundColor: "#f7f5fa",
}

const imggdes = {
    width: "300px",
    marginTop: "3.5rem",
}



const Template = () => {
  return (
    <>
        <Header/>
        <div style={main}>
            <div style={{marginLeft: "5rem"}}>
                <img alt="Gi drømmen en sjanse" src={gdes} style={imggdes}/>
                <p>Logg inn for å levere og sjekke spill</p>
                <div style={{display: "flex"}}>
                    <img alt="black icon with eighteen plus written in white" src={age} style={{width: "40px", height: "50%", marginTop: ".5rem"}}/>
                    <p>Du må være over 18 år for å spille</p></div>
                <div style={{display: "flex", marginTop: ".5rem"}}>
                    <div style={{
                        backgroundColor: "#ffcf3f",
                        height: "3rem",
                        width: "7rem",
                        lineHeight: "3rem",
                        textAlign: "center",
                        borderRadius: ".5rem",
                        fontWeight: "bold",
                    }}>Logg inn <FontAwesomeIcon icon={faArrowRight}/></div>
                    <div style={{
                        backgroundColor: "white",
                        height: "3rem",
                        width: "7rem",
                        lineHeight: "3rem",
                        textAlign: "center",
                        borderRadius: ".5rem",
                        marginLeft: "1rem",
                        fontWeight: "bold"
                    }}>Bli kunde <FontAwesomeIcon icon={faArrowRight}/></div>
                </div>
            </div>

                    {/* Suggestion to place spillevettregler components here */}


            <div style={{marginLeft: "5rem", marginTop: "5rem"}}>
                <p style={{fontWeight: "bolder", fontSize: "1.5rem"}}>Våre spill</p>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", marginLeft: "-1.5rem", width: "80%"}}>
                    <div style={{
                        width: "13rem",
                        height: "5rem",
                        textAlign: "center",
                        lineHeight: "5rem",
                        borderRadius: ".5rem",
                        color: "#ffc9ce",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        backgroundColor: "#930d44",
                        marginBottom: ".5rem"
                    }}>
                        Lotteri
                    </div>
                    <div style={{
                        width: "13rem",
                        height: "5rem",
                        textAlign: "center",
                        lineHeight: "5rem",
                        borderRadius: ".5rem",
                        color: "#d9ebff",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        backgroundColor: "#13237c",
                        marginBottom: ".5rem"
                    }}>
                        Sport
                    </div>
                    <div style={{
                        width: "10rem",
                        height: "5rem",
                        textAlign: "center",
                        lineHeight: "5rem",
                        borderRadius: ".5rem",
                        marginBottom: ".5rem",
                        color: "#207400",
                        backgroundColor: "#e2f5d5"
                    }}>
                        Flax
                    </div>
                    <div style={{
                        width: "10rem",
                        height: "5rem",
                        textAlign: "center",
                        lineHeight: "5rem",
                        borderRadius: ".5rem",
                        marginBottom: ".5rem",
                        color: "#9c0059",
                        backgroundColor: "#fae8f9"
                    }}>
                        Yezz!
                    </div>
                    <div style={{
                        width: "10rem",
                        height: "5rem",
                        textAlign: "center",
                        lineHeight: "5rem",
                        borderRadius: ".5rem",
                        marginBottom: ".5rem",
                        color: "#22222e",
                        backgroundColor: "#e2dfe8"
                    }}>
                        Alle spill
                    </div>
                </div>
            </div>
        </div>

        {/* popover overlay */}
        <PrototypeS1/>
    </>
  )
}

export default Template