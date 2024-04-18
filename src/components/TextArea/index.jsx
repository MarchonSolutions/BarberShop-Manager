import styled from "styled-components"

const TextArea = ({ value, placeholder, type, className, onChange }) => {

    const onTyping = (e) => {
        onChange(e.target.value)       
    }   

    return (
        <input 
          type={type} 
          placeholder={placeholder} 
          value={value} 
          className={className}
          onChange={onTyping}
        />
    )
}

export default TextArea