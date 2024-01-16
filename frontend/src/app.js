import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import VendaList from './components/venda/vendaList';
import VendaForm from './components/venda/vendaForm';
import VendedorList from './components/vendedor/vendedorList';
import VendedorForm from './components/vendedor/vendedorForm';
import ClienteList from './components/cliente/clienteList';
import ClienteForm from './components/cliente/clienteForm';
import MarcaList from './components/marca/marcaList';
import MarcaForm from './components/marca/marcaForm';
import ModeloList from './components/modelo/modeloList';
import ModeloForm from './components/modelo/modeloForm';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/vendedores">Vendedores</Link>
            </li>
            <li>
              <Link to="/clientes">Clientes</Link>
            </li>
            <li>
              <Link to="/marcas">Marcas</Link>
            </li>
            <li>
              <Link to="/modelos">Modelos</Link>
            </li>
            <li>
              <Link to="/vendas">Vendas</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/vendedores" exact component={VendedorList} />
          <Route path="/vendedores/novo" exact component={VendedorForm} />
          <Route path="/clientes" exact component={ClienteList} />
          <Route path="/clientes/novo" exact component={ClienteForm} />
          <Route path="/marcas" exact component={MarcaList} />
          <Route path="/marcas/nova" exact component={MarcaForm} />
          <Route path="/modelos" exact component={ModeloList} />
          <Route path="/modelos/novo" exact component={ModeloForm} />
          <Route path="/vendas" exact component={VendaList} />
          <Route path="/vendas/nova" exact component={VendaForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
