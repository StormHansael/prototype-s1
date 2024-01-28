import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons'
import logo from './nt-logo.png'


const Header = () => {

    const header = {
        display: "flex",
        justifyContent: "space-between",
        padding: ".5rem",
        height: "3rem",
        backgroundColor: "white",
        lineHeight: "3rem",
        borderRadius: "0px 0px 10px 10px",
        boxShadow: "3px 3px 10px #e6e4eb"
    }

    const imglogo = {
        width: "100%",
        height: "60%",
        marginTop: ".5rem"
    }


  return (
    <div style={header}>
            <div style={{display: "flex", justifyContent: "space-evenly", marginLeft: "4rem"}}>
                <div style={{marginLeft: "1rem"}}><FontAwesomeIcon icon={faBars}/></div>
                <div style={{marginLeft: "1rem"}}><FontAwesomeIcon icon={faHouse}/></div>
            </div>
            <div style={{display: "flex"}}>
                <div style={{marginLeft: "1rem"}}><img alt="Norsk Tipping logo" src={logo} style={imglogo}/></div>
                <div style={{marginLeft: ".5rem"}}><p style={{fontWeight: 'bold', margin: '0', fontSize: '1.2rem', wordSpacing: '-0.3rem'}}>Norsk Tipping</p></div>
            </div>
            <div style={{display: "flex", marginRight: "4rem"}}>
                <div style={{marginRight: "2rem", marginTop: ".2rem"}}>Bli kunde</div>
                <div 
                style={{
                    backgroundColor: "#004AD6",
                    borderRadius: "4rem",
                    fontWeight: "bold",
                    width: "6rem",
                    height: "2.5rem",
                    lineHeight: "2.5rem",
                    color: "white",
                    textAlign: "center",
                    marginTop: ".5rem"
                }}>
                    Logg inn
                </div>
            </div>
        </div>
  )
}

export default Header