import {useState} from "react"

/**
 * @function useToggle
 * @param startingToggle - Boolean starting toggle point
 * @returns {{toggler: (function), toggle}}
 */
export const useToggle = startingToggle => {
    const [toggle, setToggle] = useState(startingToggle)
    const toggler = () => setToggle(!toggle)
    return {toggle,toggler, setToggle}
}

/**
 * @function useFormProperties
 * @param initInputs - {Object of initial inputs}
 * @param callback - {Function of what the submit function should do}
 * @returns {{handleSubmit: handleSubmit, handleChange: handleChange, inputs: {any}}}
 */
export const useFormProperties = (initInputs, callback) => {
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setInputs({
            ...inputs,
            [e.target.name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        callback(inputs)
        setInputs(initInputs)
    }
    return {handleChange, handleSubmit, inputs}
}