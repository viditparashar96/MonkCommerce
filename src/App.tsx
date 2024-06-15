import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatLayout from "./_chat/ChatLayout";
import Right from "./components/right";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChatLayout />}>
          <Route path="chat/:userId" element={<Right />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
