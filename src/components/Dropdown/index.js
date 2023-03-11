import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropdownCredit() {
    return (
        <DropdownButton id="dropdown-basic-button" title="Credits">
            <Dropdown.ItemText href="https://www.vecteezy.com/free-vector/holiday">Holiday Vectors by Vecteezy</Dropdown.ItemText>
            <Dropdown.ItemText href="https://www.vecteezy.com/free-vector/blue">Blue Vectors by Vecteezy</Dropdown.ItemText>
            <Dropdown.ItemText href="https://www.vecteezy.com/free-vector/sea-cartoon">Sea Cartoon Vectors by Vecteezy</Dropdown.ItemText>
        </DropdownButton>
    );
}

export default DropdownCredit;