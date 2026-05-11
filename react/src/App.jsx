import CuadroDeMandos from "./interactividad/BotonAccion";
import BotonSaludo from "./interactividad/BotonSaludo";
import FormularioControlado from "./interactividad/FormularioControlado";
import MaquinaExpendedora from "./interactividad/MaquinaExpendedora";
import BarraTareas from "./interactividad/PropagacionEventos";
import Login from "./ui-description/Login";
import PasswordValidator from "./ui-description/PasswordValidator";
import PonyPisador from './gestion-estado/PonyPisador.jsx';
import Lugares from './gestion-estado/Lugares';
import Accordion from "./gestion-estado/Accordion.jsx";
import MainView from "./gestion-estado/SideBarSincronizada.jsx";
import FilterableProductsTable from "./gestion-estado/Filters.jsx";

function App() {
  return (
    <FilterableProductsTable />
  )
}

export default App
