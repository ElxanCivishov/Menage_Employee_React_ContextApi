import EmployeList from "./components/EmployeList";
import EmployesContextProvider from "./context/Context";

function App() {
  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <EmployesContextProvider>
              <EmployeList />
            </EmployesContextProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
