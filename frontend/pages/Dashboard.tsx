import { Link, Outlet, Route } from "react-router-dom";
import { Historique } from "../src/components/Historique/Historique";
import Header from "../src/components/Header/Header";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Mesures from "../src/components/Mesures/Mesures";
import CtrlSysteme from "../src/components/CtrlSysteme/CtrlSysteme";

const Dashboard = () => {

  return (
    <div className="h-screen bg-slate-100">
      <Header />
      <Sidebar />
      <div className='absolute top-12' style={{left: "25%",  width: "66.666667%"}}>
       <Mesures />
       <div className="mt-5">
        <Outlet />
       </div>
      </div>
      {/*<CtrlSysteme /> */}
    </div>
  );

}

export default Dashboard;
