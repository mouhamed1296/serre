import { Link, Outlet, Route } from "react-router-dom";
import { Historique } from "../src/components/Historique/Historique";

const Dashboard = () => {

  return (
    <>
      <Link to="history">Historique</Link>
      <Link to="parametrage">Parametrage</Link>
      <Link to="/">Retour</Link>
      <Outlet />
    </>
  );

}

export default Dashboard;
