import {Header,About,RegisterLinks} from "./componetes/index"
function App() {
  return (
    <>
    <div>
      <div className="header_flex border">
<Header></Header>
      </div>
      <div className="main_flex">
      <div>
        <About></About>
      </div>
      <div>
         <RegisterLinks></RegisterLinks>
      </div>   
      </div>
     
    </div>
    </>
  );
}

export default App;
