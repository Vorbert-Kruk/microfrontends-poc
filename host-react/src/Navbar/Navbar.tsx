import styled from "styled-components";

const StyledWrapper = styled.nav`
  padding: 12px 16px;
  background-color: #357ec7;
`;

const NavbarHeader = styled.h2`
  font-size: 24px;
  line-height: 1;
`;

const Navbar = () => {
  return (
    <StyledWrapper>
      <NavbarHeader>I'm a React app</NavbarHeader>
    </StyledWrapper>
  );
};

export default Navbar;
