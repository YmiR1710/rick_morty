import './Select.css';
import { useState } from 'react';
import PropTypes from "prop-types";

const Select = ({ value, handleSelect, options, label, selectedOption }) => {
    const [isOpened, setIsOpened] = useState(false);

    const handleIsOpened = () => setIsOpened(!isOpened);

    const onOptionClick = (option) => {
        handleSelect(option.value);
        setIsOpened(false);
    };

    const renderOption = (option) =>
        <li key={option.value} value={option.value} className="Select__option" onClick={ () => onOptionClick(option)}>
            {option.label}
        </li>;

    selectedOption = options?.find(option => option.value === value);

    return <div className="Select">
        <div className="Select__selectedOption" onClick={handleIsOpened}>
                <span className="Select__label">
                    {label}
                </span>
                <span className="Select__value">
                    {selectedOption?.label}
                </span>
        </div>
        {isOpened && (
            <ul className="Select__options">
                {options?.map(renderOption)}
            </ul>
        )
        }

    </div>
};

Select.propTypes = {
    value: PropTypes.string.isRequired,
    handleSelect: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    label: PropTypes.oneOf(["Status", "Gender"]).isRequired,
    selectedOption: PropTypes.func.isRequired
}

export default Select;