import React from 'react'

const Square = ({ colorValue, hexValue, isDarkText }) => {

    return (
        <section
            className='main-card'
            style={{
                backgroundColor: colorValue,
                color: isDarkText ? "#000" : "#FFF"
            }}
        >
            <p>{colorValue ? colorValue : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    )
}

Square.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Square
