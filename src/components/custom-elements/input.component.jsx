import React from 'react'

export const CustomInput = ({type,name, placeholder, handleChanges, handleBlur, ...otherProps}) => {
    const isTextarea = type === 'textarea'

    return (
        !isTextarea ? <input
                className='form-control'
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleChanges}
                onBlur={handleBlur}
                {...otherProps}
            />
            : <textarea
                className='form-control'
                placeholder={placeholder}
                onChange={handleChanges}
                onBlur={handleBlur}
                name={name}
                rows='3'
            >
            </textarea>
    )
}
