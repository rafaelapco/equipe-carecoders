import React from "react";
import styled from "styled-components";

const CircleImage = styled.img`
  border-radius: 50%;
`;

const RoundedImage = ({ src, alt, size, ...rest }) => {
  return (
    <CircleImage
      src={src}
      alt={alt}
      style={{ width: size, height: size }}
      {...rest}
    />
  );
};

export default RoundedImage;
