import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavbarContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navbar.styles.jsx";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navbar = () => {
  // Get value from Redux Store to into Components
  // const currentUser = useSelector((state) => state.user.currentUser);
  const currentUser = useSelector(selectCurrentUser);

  // console.log("render/re-rendering Navbar component");

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
          <CartIcon />
        </NavLinks>

        {/* short circuting */}
        {isCartOpen && <CartDropdown />}
      </NavbarContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
