import React, { useState } from 'react' ;
import PropTypes from 'prop-types' ;
import { ButtonDropdown , DropdownToggle , DropdownMenu, DropdownItem } from 'reactstrap';

export const Dropdown = (props) => {
    const [ dropdownOpen , setOpen ] = useState (false);
    const toggle = () => setOpen( !dropdownOpen )
    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} >
            <DropdownToggle caret color="primary">
                Button Dropdown
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    <div className="dropdown">
                        <div className="btn btn" href="/" id="navbarDropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>Explore</span>
                        </div>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                            <li className="dropdown-item">item 1</li>
                            <li className="dropdown-item">item 2</li>
                        </ul>
                    </div>
                </DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    );
}

ButtonDropdown.propTypes = {
    disabled: PropTypes.bool ,
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']) ,
    group: PropTypes.bool ,
    isOpen: PropTypes.bool ,
    tag: PropTypes.string ,
    toggle: PropTypes.func 
};
DropdownToggle.propTypes = {
    caret: PropTypes.bool ,
    color: PropTypes.string ,
    disabled: PropTypes.bool ,
    onClick: PropTypes.func ,
    'data-toggle': PropTypes.string ,
    'aria-haspopup': PropTypes.bool
};
