import styled from 'styled-components';

const StyledLogo = styled.div`
  width: 80px;
  min-width: 50px;
`;

export default function Logo({ src, alt = 'Logo' }) {
  return (
    <StyledLogo>
      <img src={src} alt={alt} />
    </StyledLogo>
  );
}
