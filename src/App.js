
import { useState } from 'react';
import './App.css';
import Home from './Home';
import OrderPage from './OrderPage';
import SummaryPage from './SummaryPage';
import Navigation from './Navigation';




function App() {
  const [stage, setStage] =useState("home")
  
  return (
<div>
  <Navigation page={setStage} order={setStage}/>
{stage==="home" && <Home data={setStage}/>}
{stage==="summarypage" && <SummaryPage page={setStage} order={setStage}/>}
{stage==="orderPage" && <OrderPage page={setStage} />}
</div>
  );
}

export default App;
