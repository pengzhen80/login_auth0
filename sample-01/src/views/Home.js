import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import Content_Onlybutton from "../components/Content.Onlybutton";
import { useAuth0 } from "@auth0/auth0-react";

//if email not verified : show a button to resend email to verify 
const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    <Content />
  </Fragment>
);

// const Home = () => {
//   const {
//     user,
//     isAuthenticated,
//   } = useAuth0();

//   return 
//   (
//     <Fragment>
//     <Hero />
//     <hr />
//     {(
//     <Content />
//     )}
//     {isAuthenticated && !user['email_verified']&&(
//     <Content_Onlybutton />
//     )}
//     </Fragment>
//   )
// }


// {isAuthenticated && user['email_verified']&&(
//   <NavItem>
//     <NavLink
//       tag={RouterNavLink}
//       to="/external-api"
//       exact
//       activeClassName="router-link-exact-active"
//     >
//       External API
//     </NavLink>
//   </NavItem>
// )}

// const Home_OnlyButton = () => (
//   <Fragment>
//     <Hero />
//     <hr />
//     <Content_Onlybutton />
//   </Fragment>
// );

export default Home;
