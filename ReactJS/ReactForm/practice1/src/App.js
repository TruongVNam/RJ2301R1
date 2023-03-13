import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {FormLogin} from './components/FormLogin'
import {FormSignup} from './components/FormSignup'
import {ValidateFormLogin} from './components/ValidateFormLogin'
import {ValidateFormLoginFormik} from './components/ValidateFormLoginFormik'

function App() {
  return (
    <>
      {/* <FormLogin></FormLogin> */}

      {/* <FormSignup></FormSignup> */}

      {/* <ValidateFormLogin></ValidateFormLogin> */}

      <ValidateFormLoginFormik></ValidateFormLoginFormik>
    </>
  );
}

export default App;
