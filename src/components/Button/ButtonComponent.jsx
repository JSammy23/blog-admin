import './ButtonComponent.styles.css'

const ButtonComponent = ({ onClick, size = "medium", children }) => {

    return (
      <button className={`universal-button ${size}`} onClick={onClick}>
        {children}
      </button>
    );
  }
  
  export default ButtonComponent;