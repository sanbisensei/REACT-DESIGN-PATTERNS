import ControlledForm from "./controlled/ControlledForm";
import UncontrolledForm from "./uncontrolled/UncontrolledForm";
import UncontrolledFormNoRef from "./uncontrolled/UncontrolledFormNoRef";

function App() {
  return (
    <div>
      <UncontrolledForm></UncontrolledForm>
      <br />
      <UncontrolledFormNoRef></UncontrolledFormNoRef>
      <br />
      <ControlledForm></ControlledForm>
    </div>
  );
}

export default App;
