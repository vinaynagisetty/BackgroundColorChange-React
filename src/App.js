import "./App.css"
function App(){
  return(
      <div className="body">
      <h1 >Background Color change</h1>
      <input type="color" onClick={(e)=>{
        document.body.style.backgroundColor=e.target.value;

      }}/>
      </div>
  );
}
export default App;