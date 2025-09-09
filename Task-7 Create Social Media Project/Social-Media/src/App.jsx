import { useState } from "react";
import "./App.css";
import CreateForm from "./Components/CreateForm";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostAllList from "./Components/PostAllList";
import Sidebar from "./Components/Sidebar";
import PostAllListProvider from "./Store/PostAllList";
function App() {
  const [selectTab, setSelectTab] = useState("Home");

  return (
    <PostAllListProvider>
      <div className="media-container">
        <Sidebar selectTab={selectTab} setSelectTab={setSelectTab} />
        <div className="media-content">
          <Header />
          {selectTab === "Home" ? <PostAllList /> : <CreateForm />}
          <Footer />
        </div>
      </div>
    </PostAllListProvider>
  );
}

export default App;
