import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./style.css"
function DropdownCredit() {
    return (
        <DropdownButton className="creditButton" id="dropdown-basic-button" title="Credits">
            <Dropdown.Item href="https://www.vecteezy.com/free-vector/holiday">Holiday Vectors by Vecteezy</Dropdown.Item>
            <Dropdown.Item href="https://www.vecteezy.com/free-vector/blue">Blue Vectors by Vecteezy</Dropdown.Item>
            <Dropdown.Item href="https://www.vecteezy.com/free-vector/sea-cartoon">Sea Cartoon Vectors by Vecteezy</Dropdown.Item>
        </DropdownButton>
    );
}

export default DropdownCredit;