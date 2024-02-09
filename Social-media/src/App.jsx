import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import "./App.css"
import CreatePost from "./components/CreatePost"
import Postlist from "./components/Postlist"
import { useState } from "react"
import PostlistProvider from "./store/post-list-store"
function App() {
  const [selectedTab,setSelectedTab]=useState("Home");

  return (
    <PostlistProvider>
    <div className="app-container">
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
    <div className="content">
    <Header/>
    {selectedTab==="Home" ? <Postlist/> : <CreatePost/> }
    <Footer/>
    </div>
    </div>
    </PostlistProvider>
  )
}

export default App;
