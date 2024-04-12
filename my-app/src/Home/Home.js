function Home(props){
    const tekst = "Ovo je moja prva aplikacija";
     
    
    return <div>
        <h1>{props.ime}</h1>
        <div>{tekst}</div>
    </div>
    
}

export default Home;