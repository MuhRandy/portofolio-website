import { Tab } from "@headlessui/react";
import Content from "./Content";
import Navbar from "./component/Navbar";
import Test from "./test/Test";

function App() {
  return (
    <Tab.Group>
      <Navbar />
      <Content />
    </Tab.Group>
    // <Test />
  );
}

export default App;
