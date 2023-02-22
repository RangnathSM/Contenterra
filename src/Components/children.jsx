import Card from 'react-bootstrap/Card';
import {useState, useEffect} from 'react'
function TextExample() {
    let [child, setChild]= useState([])

    useEffect(()=>{
        let fetchData= async() =>{
        let response =await fetch(`https://www.reddit.com/r/reactjs.json`)
        let Conte=await response.json()
        setChild(Conte.data.children)
    }
    fetchData()
    },[child])


  return (
    <div className="container " style={{display:"flex",flexWrap:"wrap",paddingTop:"30px"}}>
        {child.map((item)=>(
            <div className="cards">
                <Card style={{ width: '400px',marginRight:"30px",backgroundColor:"black",color:"white",marginBottom:"30px"}}>
      <Card.Body>
        <Card.Title>Title :{item.data.title}</Card.Title>
        <Card.Text><b>Selftext_html :</b>{item.data.selftext_html} </Card.Text>
        <Card.Link href="/"><b>Url :</b>{item.data.url}</Card.Link>
        <Card.Text><b>Score :</b>{item.data.score}</Card.Text>      
      </Card.Body>
    </Card>
            </div>

        ))}
        
    </div>
  );
}

export default TextExample;