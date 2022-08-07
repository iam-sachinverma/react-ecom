import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import CardIcon from "../../components/cart-icon/card-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavbarContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navbar.styles.jsx";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavbarContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CardIcon />
        </NavLinks>

        {/* short circuting */}
        {isCartOpen && <CartDropdown />}
      </NavbarContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
