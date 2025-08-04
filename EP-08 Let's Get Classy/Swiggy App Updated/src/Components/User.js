const User = (prop)=>{
    return(
        <div className="user-card">
            <h1>Name: {prop.name}</h1>
            <h2>Location: {prop.location}</h2>
            <h4>Contact: {prop.contact}</h4>
        </div>
    )
}
/*
export default User;
Parent Constructor  
Parent render  
  - First Constructor  
  - First Render  
  - Second Constructor  
  - Second Render  

<DOM UPDATED – IN SINGLE BATCH>  
  - First ComponentDidMount  
  - Second ComponentDidMount  

Parent ComponentDidMount 
*/