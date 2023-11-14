import { Form } from "./components/form";
import { Input } from "./components/input";

function App() {
  return (
    <>
      <Form>
        <Input type="number" label="Guest user" placeholder="Enterar" />
        <Input type="number" label="Guest user" placeholder="Enterar" />
        <Input type="number" label="Guest user" placeholder="Enterar" />
        <Input type="number" label="Guest user" placeholder="Enterar" />
        <span className="errorMessage">erooo de mais da conta</span>
      </Form>
    </>
  );
}

export default App;
