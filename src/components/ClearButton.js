import React from "react";
import '../styleSheets/ClearButton.css'

const ClearButton = (props) => (
    <div className="clear-button" 
    onClick={props.manageClear}>
        Clear
    </div>
);

export default ClearButton
