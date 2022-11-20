import React, { useEffect, useState } from 'react'

function Circle({ value, selectedNumbers, setSelectedNumbers, allowed }) {

    const selectedColor = '#f32'
    const unSelectedColor = "#0f2"

    const [color, setColor] = useState(unSelectedColor)
    const [selected, setSelected] = useState(false)

    var circleStyle = {
        padding: 10,
        margin: 5,
        display: "flex",
        cursor: 'pointer',
        flexDirection: 'column',
        backgroundColor: color,
        borderRadius: "50%",
        width: 50,
        height: 50,
        left: 0,
        color: "black",
        textAlign: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        top: 0
    }

    useEffect(() => {
        setColor(!selected ? unSelectedColor : selectedColor)
    }, [selected])

    const circleClicked = () => {
        if (selectedNumbers.includes(value)) {
            const temp = [...selectedNumbers]
            temp.splice(selectedNumbers.indexOf(value), 1)
            setSelectedNumbers(temp)
            setSelected(false)
        }
        else {
            if (selectedNumbers.length < allowed) {
                setSelectedNumbers(selectedNumbers => [...selectedNumbers, value]);
                setSelected(true)
            }
        }
    }

    return (
        <div style={circleStyle} onClick={circleClicked}>
            {value}
        </div>
    )
}

export default Circle