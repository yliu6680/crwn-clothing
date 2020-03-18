import React from 'react';

import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={ handleChange } { ...otherProps }/>
    
        {
            label ? (
                // if the value.length == 0, then 'shrink form-input'
                //                      otherwise, ' form-input'  (i.e. when user types someting in the text box) 
                <label 
                    className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} 
                >
                    { label }
                </label>
                ):null
        }
    
    </div>
);

export default FormInput;