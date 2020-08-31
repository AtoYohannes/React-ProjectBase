import React from "react";
import "./Styles/magazine.scss";
import "react-animated-slider/build/horizontal.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./Config/routes";
import { Spinner } from "reactstrap";
import { MainLayout } from "./Components/Layout";

const DemoPage = React.lazy(() => import("./Pages/DemoPage"));


const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};

function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Switch>
        {/* <LayoutRoute
              exact
              path={routes.signIn}
              layout={EmptyLayout}
              component={SignInPage}
            /> */}
        <React.Fragment>
          <MainLayout>
            <React.Suspense
              fallback={
                <div className="spinnerContainer">
                  <Spinner color="secondary" />
                </div>
              }
            >
              <Route exact path={routes.homePage} component={DemoPage} />


            </React.Suspense>
          </MainLayout>
        </React.Fragment>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

// const query = ({ width }) => {
//   if (width < 575) {
//     return { breakpoint: "xs" };
//   }

//   if (576 < width && width < 767) {
//     return { breakpoint: "sm" };
//   }

//   if (768 < width && width < 991) {
//     return { breakpoint: "md" };
//   }

//   if (992 < width && width < 1199) {
//     return { breakpoint: "lg" };
//   }

//   if (width > 1200) {
//     return { breakpoint: "xl" };
//   }

//   return { breakpoint: "xs" };
// };

export default App;
