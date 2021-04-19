import styled from "styled-components";
import "../../assets/Fonts.css";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 330px;
`;

export const Title = styled.div`
  position: absolute;
  width: 93px;
  height: 36px;
  left: 320px;
  top: 53px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #4f4f4f;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  width: 60em;
  height: 35em;
  left: 320px;
  top: 117px;
`;

export const ButtonsColumn = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100px;
  align-items: center;
  gap: 100px;
  margin-bottom: 50px;
`;

export const ButtonSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ButtonSpaceTitle = styled.div`
  font-family: Ubuntu Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 12px;
  color: #333333;
  margin-bottom: 10px;
  width: 200px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const useVariant = (variant, color) => {
  switch (variant) {
    case "outline":
      return `1px solid ${color || "#e0e0e0"}`;
    
    case "text":
      return "none";

    default:
      return;
  }
};

const Hover = (color, variant) => {
  if (color) {
    if (variant) {
      return color + "10";
    } else {
      return color + "80";
    }
  } else {
    if (variant) {
      return "#e0e0e010";
    } else {
      return "#e0e0e080";
    }
  }
};

const useBackground = (color, variant) => {
  let returnColor;

  if (color) {
    returnColor = color;
  } else {
    returnColor = "#e0e0e0";
  }

  if (variant) {
    if (variant === "outline" || variant === "text") return "#ffffff";
    else return returnColor;
  } else {
    return returnColor;
  }
};

const useFontColor = (color, fontColor, variant) => {
  if (color) {
    if (variant) {
      return color;
    } else {
      return fontColor || "#3f3f3f";
    }
  } else {
    return fontColor || "#3f3f3f";
  }
};

const handleContent = (content, start, end) => {
  if (content) {
    if (start) {
      switch (start) {
        case "shopping-cart":
          return `🛒 ${content}`;
        
        case "information":
          return `ℹ️ ${content}`;
        
        default:
          return content;
      }
    }
    if (end) {
      switch (end) {
        case "shopping-cart":
          return `${content} 🛒`;

        case "information":
          return `${content} ℹ️`;

        default:
          return content;
      }
    }
    return content;
  } else {
    return "Default";
  }
}

const handleSize = (size) => {
  switch (size) {
    case "sm":
      return 0.8;
    
    case "md":
      return 1.1;
    
    case "bg":
      return 1.3;
    
    default:
      return 1;
  }
}

const useShadow = (color, shadow, variant) => {
  if (variant === "text") return "none";
  if (color) {
    if (shadow) return "none";
    return `0px 2px 3px ${color}`;
  } else {
    if (shadow) return "none";
    return "0px 2px 3px #e0e0e0";
  }
}

export const Button = styled.button`
  background: ${(props) => useBackground(props.color, props.variant)};
  border-radius: 6px;
  color: ${(props) =>
    useFontColor(props.color, props.fontColor, props.variant)};
  border: none;
  height: 40px;
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  outline: none;
  transition: 0.3s;
  border: ${(props) =>
    props.variant ? useVariant(props.variant, props.color) : "none"};
  transform: scale(${(props) => handleSize(props.size)});
  box-shadow: ${(props) =>
    useShadow(props.color, props.disabledShadow, props.variant)};

  &::after {
    padding: 15px;
    content: "${(props) =>
      handleContent(props.content, props.startIcon, props.endIcon)}";
      
  }

  &:hover,
  &:focus {
    background: ${(props) => Hover(props.color, props.variant)};
  }

  &:disabled {
    border: none;
    background: #e0e0e0;
    color: #9e9e9e;
    cursor: no-drop;
  }
`;

export const Footer = styled.div`
  position: absolute;
  width: 400px;
  height: 17px;
  top: 1020px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #474447;
  margin-bottom: 1000px;
`;