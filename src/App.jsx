import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} Component={Login} />
          <Route path={ROUTES.SIGN_UP} Component={SignUp} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
