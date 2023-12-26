import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "../../components/dashboard/Dashboard";

function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <Dashboard />
    </>
  );
}

export default Home;
