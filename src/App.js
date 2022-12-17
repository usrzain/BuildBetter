
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Front from './Components/Front';
import Services from './Components/Services';
import About from './Components/About';
import Furnitures from './Components/Furnitures';
import Who from './Components/Who';
import Pro from './Components/Ourpro';
import Contact from './Components/Contact';
import Nbar from './Components/Nbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <Router >
    <div className="App">
     
           
                  <Switch>  

                     <Route exact path="/">
                          <Redirect to="/Home" />
                     </Route>
               
                  </Switch>

                  <Switch>

                               
                 <Route path="/Home">
                    <Nbar />
                    <Front/>
                    <Services />
                    <About />
                    <Furnitures />
                     <Who />
                    <Pro />
                    <Contact />
                    <Footer />
                  </Route>


                  </Switch>


                  <Switch>

                  <Route path="/Services">
                   <Nbar />
                  <Services />
                  <Footer />
                  
                 </Route>
    
                  </Switch>
     

                 <Switch>
                 <Route path="/About">
                    <Nbar />
                    <About />
                    <Footer />
                 </Route>
      
                 </Switch>



                 <Switch>
                 <Route path="/Shop">
                    <Nbar />
                    <Furnitures />
                    <Footer />
                 </Route>

                 </Switch>




                 <Switch>
                          
                 <Route path="/Who">
                    <Nbar />
                     <Who />
                     <Footer />
                 </Route>

                 </Switch>



                 <Switch>
                       
                 <Route path="/Pro">
                    <Nbar />
                    <Pro />
                    <Footer />
                 </Route>

                 </Switch>



                 <Switch>
                 <Route path="/Contact">
                       <Nbar />
                      <Contact />
                      <Footer />
                 </Route>
                 </Switch>

         




             



    </div>
    </Router>
  );
}

export default App;
