import './App.css'
import{useState} from "react";


 function Navbar({darkMode}){
return(
    <nav>
        <h1 style={{
                color:darkMode?"white":"black"}}>
         🏠Find a Homestay</h1>
        <a href="#Home">Home</a>{"     "}
        <a href="#Destination">Destination</a>{"     "}
        <a href="#About">About</a>{"     "}
        <a href="#Dashboard">Dashboard</a>{"     "}
        <a href="#Login">Login</a>{"      "}
        <a href="#Signup">Sign_Up</a>
    </nav>
);
 }
 
 function Hero(){
    return(
        <div id="Home">
    <p>Explore beautyfull places all over the world</p>
    <p>Get rooms at affordable price</p>
    <input
    type="text"
    placeholder="Enter Location"
    />
    <button>Search</button>
    </div>
    );
 }


 function Footer(){
    return( 
       <div>
        <footer>
        <hr/>
        <p>Homestays in 2026</p>
        </footer>
        </div>
        );
        }

function About(){
    return(
        <div id="About">
            <p>Find a Homestay is a web application which help user all over India to get a affordable home stay as per their need.It also provide some special feature such as rating an reviews.</p>
        </div>
    );
}

function Dashboard({darkMode}){
    return(
        <div id="Dashboard">
            <h2 style={{
                color:darkMode?"white":"black"}}>
                    Dashboard</h2>
            <p>Welcome to your Dashboard
            here you can view your 
            booking and destination
            </p>
        </div>

    );
}

function Login({darkMode}){
    return(
        <div id="Login">
            <h2
            style={{
                color:darkMode?"white":"black"}}>Login</h2>
            <input
            type="email"
            placeholder="Enter Email"
            />
            <br/>
            <input
            type="password"
            palceholder="Password"
            />
            <br/>
            <button>Login</button>
        </div>

    );
}

function Signup({darkMode}){
     return(
        <div id="Signup">
            <h2
            style={{
                color:darkMode?"white":"black"}}>
                    Sign Up</h2>
            <input
            type="text"
            placeholder="Full Name"
            />
            <input
            type="email"
            placeholder="Enter Email"
            />
            <br/>
            <input
            type="password"
            palceholder="Password"
            />
            <br/>
            <button>Sign Up</button>
        </div>
     );
}

function Loader({darkMode}){
    return(
        <div>
            <h2 style={{
                color:darkMode?"white":"black"}}>
                    Loading.....</h2>
        </div>
    );
}

function Toast(){
    return(
        <div>
            <p>Booking Succesfull</p>
        </div>
    );
}

  
       
    

function App() {
    const[darkMode,setDarkMode]=useState(false);
    const destination=[
        { 
         name:"Goa", 
        image:"https://www.tripsavvy.com/thmb/8eoduV4QoEzXdx3siv4rS8prXLg=/2121x1414/filters:fill(auto,1)/GettyImages-606353257-5be1ac59c9e77c00519e8ae0.jpg" 
         }, 
        { 
         name:"Manali", 
         image:"https://th.bing.com/th/id/OIP.O04HO1Bd0WttkUbn19_uEwHaEo?w=291&h=182&c=7&r=0&o=7&pid=1.7&rm=3" 
         }, 
         { 
          name:"Shimla", 
          image:"https://th.bing.com/th/id/OIP.8yAXYKdQFbrRePAbbkd5HwHaFj?w=239&h=180&c=7&r=0&o=7&pid=1.7&rm=3" 
         }, 
          { 
           name:"Nanital", 
           image:"https://th.bing.com/th/id/OIP.PM6oEjJ1vl2L6dMK9pdoNwHaEO?w=310&h=180&c=7&r=0&o=7&pid=1.7&rm=3" 
           }, 
            { 
            name:"kerala", 
            image:"https://th.bing.com/th/id/OIP.mvIS6OMbg5HjpcmR4e5snQHaE8?w=311&h=180&c=7&r=0&o=7&pid=1.7&rm=3" 
            }, 
            {
            name:"Mumbai", 
            image:"https://th.bing.com/th/id/OIP.UVasaYs2knTBo_bd1-pfpwHaFg?w=222&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
         }, 
              {
              name:"Pune", 
              image:"https://th.bing.com/th/id/OIP.PsLyfokUHc4sslelqE_6tAHaEK?w=307&h=180&c=7&r=0&o=7&pid=1.7&rm=3" 
            },
            { 
             name:"Delhi", 
             image:"https://th.bing.com/th/id/OIP._dpxdJcbfJnyecpAR4h9agHaE9?w=291&h=180&c=7&r=0&o=7&pid=1.7&rm=3" 
            },
            {
             name:"Darjeeling", 
             image:"https://th.bing.com/th/id/OIP.RyGpRX2MDUaE38K5DCVvLwHaEK?w=274&h=180&c=7&r=0&o=7&pid=1.7&rm=3" 
            }
        ];
            const randomdestinations = destination.slice(0,3);
    return(

  <div style={{backgroundColor:darkMode?"black":"white",
               color:darkMode?"white":"black",
               minHeight:"100vh"
  }}>
    <button onClick={() => setDarkMode(!darkMode)}>
   Dark Mode
</button>
    
    <Navbar darkMode={darkMode}/>
    <Hero/>
  <div id="Destination">
    <h2 style={{
                color:darkMode?"white":"black"}}>Popular Destinations</h2> 
    <img src={destination[0].image}
      width="260" 
      />
     <p>{destination[0].name}</p> 
     <img src={destination[1].image}
      width="260" 
      />
      <p>{destination[1].name}</p>
       <img src={destination[2].image}
        width="260"
        /> 
    <p>{destination[2].name}</p>
    <button>Book Now</button>
    </div>
       <About/>
       <Dashboard darkMode={darkMode}/>
       <Login darkMode={darkMode}/>
       <Loader darkMode={darkMode}/>
       <Toast/>
       <Signup darkMode={darkMode}/>
      <Footer/>
  </div>
 );

}

export default App;
