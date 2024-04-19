import GlobalStyles, { MainContent } from "./components/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavFooter from "./components/NavFooter";
import ClientList from "./Pages/ClientList";
import BarberSettings from "./Pages/BarberSettings";
import ClientHistory from "./Pages/ClientHistory";
import styled from "styled-components";
import { useEffect, useState } from "react";

const MainBackground = styled.section`
  height: 100vh;
  background-color: #22292b;
`;

function App() {
  const [allServices, setAllServices] = useState([]);
  const [allClients, setAllClients] = useState([]);
  const [finishedClients, setFinishedClients] = useState([]);
  const [editClient, setEditCLient] = useState(null)
  const [prices, setPrices] = useState([]);
  const [mainPassword, setMainPassword] = useState('');
  const [access, setAccess] = useState(false)

  useEffect(() => {
    const refreshServices = localStorage.getItem("services");
    const refreshClients = localStorage.getItem("clients");
    const refreshFinishedClients = localStorage.getItem("finishedClients");
    const refreshPassword = localStorage.getItem("password")

    if (refreshServices) {
      try {
        const parseServices = JSON.parse(refreshServices);
        setAllServices(parseServices);
      } catch (e) {
        console.log(e);
      }
    }

    if (refreshClients) {
      try {
        const parseClients = JSON.parse(refreshClients);
        setAllClients(parseClients);
      } catch (e) {
        console.log(e);
      }
    }

    if (refreshFinishedClients) {
      try {
        const finishedParse = JSON.parse(refreshFinishedClients);
        setFinishedClients(finishedParse);
      } catch (e) {
        console.log(e);
      }
    }

    if (refreshPassword) {
      try {
        const parsePassword = JSON.parse(refreshPassword);
        setMainPassword(parsePassword);
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("services", JSON.stringify(allServices));
  }, [allServices]);

  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(allClients));
  }, [allClients]);

  useEffect(() => {
    localStorage.setItem("finishedClients", JSON.stringify(finishedClients));

    if(finishedClients) {
      const updatedPrices = finishedClients.map( client => client.price);
      setPrices(updatedPrices);
    }        
  }, [finishedClients]);

  useEffect(() => {
    localStorage.setItem("password", JSON.stringify(mainPassword));
  }, [mainPassword]);

  const addServices = (service) => {
    setAllServices([...allServices, service]);
  };

  const addClients = (client) => {
    if(editClient) {
      const updateClients = allClients.map( c => c.id === editClient.id ? {...client, id: editClient.id} : c )

      setAllClients(updateClients)
      setEditCLient(null)
    } else {
      setAllClients([...allClients, client]);
    }        
  };

  const updateEditClient = (client) => {
    setEditCLient(client)
  }

  const addFinishedClients = (client) => {
    setFinishedClients([...finishedClients, client]);
  };

  const onDeleteService = (serviceId) => {
    setAllServices(allServices.filter((service) => service.id !== serviceId));
  };

  const onDeleteClient = (clientId) => {
    setAllClients(allClients.filter((client) => client.id !== clientId));
  };

  const onDeleteFinished = (clientId) => {
    setFinishedClients(
      finishedClients.filter((client) => client.id !== clientId)
    );
  };

  const addPassword = (newPassword) => {
    setMainPassword(newPassword)
  }

  const onSetAccess = (boolean) => {
    setAccess(boolean)
  }

  return (
    <BrowserRouter>
      <MainBackground>
        <GlobalStyles />
        <Header />
        <MainContent>
          <Routes>
            <Route
              path="/"
              element={
                <ClientList
                  addClients={(valor) => addClients(valor)}
                  editClient={editClient}
                  updateEditClient={updateEditClient}
                  allServices={allServices}
                  allClients={allClients}
                  onDeleteClient={onDeleteClient}
                  addFinishedClients={addFinishedClients}
                />
              }
            />
            <Route
              path="/settings"
              element={
                <BarberSettings
                  mainPassword={mainPassword}
                  addPassword={password => addPassword(password)}
                  addServices={service => addServices(service)}
                  allServices={allServices}
                  onDeleteService={onDeleteService}
                  access={access}
                  setAccess={ boolean => onSetAccess(boolean)}
                />
              }
            />
            <Route
              path="/history"
              element={
                <ClientHistory
                  mainPassword={mainPassword}
                  access={access}
                  setAccess={boolean => onSetAccess(boolean)}
                  finishedClients={finishedClients}
                  onDeleteFinished={onDeleteFinished}
                  prices={prices}
                />
              }
            />
          </Routes>
        </MainContent>
        <NavFooter 
          access={access}
          setAccess={boolean => onSetAccess(boolean)}
        />
      </MainBackground>
    </BrowserRouter>
  );
}

export default App;
