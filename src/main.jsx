import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './main.module.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Profile_cards img="https://scontent.fkhi5-2.fna.fbcdn.net/v/t39.30808-6/547782626_122185692116360567_4518806653912492670_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEyAgw_aPcfNIwkincPC1xY8hsbkTtD34zyGxuRO0PfjASk2A5n-vWISANeAN3cypgdKy8A6vJueHnKSBHwpMxf&_nc_ohc=DtIuoKPI0DsQ7kNvwGdsEos&_nc_oc=Adlph5PnM5oCGXt1IDth75m3zretaQTQfZk4CoXAJ0MfBOcdjMORAlr2-8UiiFcMPFA&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fkhi5-2.fna&_nc_gid=7Ru0aik-tytoLzei9BWfLQ&_nc_ss=8&oh=00_AfwdhHmIMpJbWe_2HkY818GzfvtRJiOvCZ5nZe3tcr5N_w&oe=69B9857D" name="Haseeb" role="Shaitani" age="21" addr="" />
);

function MyFirstApp(){
  
  const [bg, setBg] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? "black" : "white");
  useEffect(()=>{
    document.body.style.backgroundColor = bg;
  }, [bg]);



  // const [toggle, setToggle] = useState(true);
  

  function clicked(){
    // setToggle(!toggle);
    setBg(prev => prev==="pink" ? "purple" : "pink");
  }
  

  return <button onClick={clicked} >Click me to change bg</button>
}

function Timer(){
  const [count, setCount] = useState(30);
  function updateCount(){
    // setCount(count--);
  }
  // useEffect(()=>{
  //   const timerId = setInterval(()=>{
  //     setCount(prev => {
  //       if(prev===0){
  //         clearInterval(timerId);
  //         return 0;
  //       }
  //       return --prev;
  //     });
  //   }, 1000);
  //    // Cleanup function to clear interval
  // return () => clearInterval(timerId); 
  // },[])
  const names = [
    "Alice", "Bob", "Charlie", "Diana", "Edward", "Fatima", "George", "Hannah", "Ivan", "Julia", "Kevin", "Laura", "Michael", "Nora", "Oscar", "Priya", "Quinn", "Haseeb", "Samuel", "Tina", "Usman", "Victoria", "William", "Xena", "Yusuf", "Zara", "Ahmed", "Bella", "Carlos", "Daisy","Shoaib"
  ]
  
  return (<center>
    <h1>Span: {count} {names[count]}</h1>
    <input type="range" value={count} max={30} min={0} onChange={(e)=>{setCount(e.target.value)}}/>
  </center>);
}

function RenderImages(){
  const images = [
    {src : "https://miro.medium.com/v2/resize:fit:1400/1*SF84OJ1rv_B6qfIwdVz7HA.jpeg", alt:"img_1"},
    {src : "https://miro.medium.com/v2/resize:fit:1400/0*vjNb49W4vkNLd8uv", alt:"img_2"},
    {src: "https://miro.medium.com/v2/resize:fit:1200/1*LaDCip1eNuv_y8v4pyKDow.png", alt:"img_3"},
    {src: "https://technostacks.com/wp-content/uploads/2021/12/React-Best-Practices-1.png", alt:"img_4"},
    {src: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220608101421/10-Best-ReactJS-Practices-For-a-Good-React-Project.jpg", alt:"img_5"},
  ]

  const imgArr = images.map((img)=>{
    return <img src={img.src} alt={img.alt}></img>
  });


  return <>
    {
      imgArr
    }
  </>
}

function Profile_cards({img=null, name=null, role=null, age=null, addr=null}){
  return <div>
    <img src={img} alt={name} />
    <h2>Name: {name}</h2>
    <strong>Role: {role}</strong>
    <strong>Age: {age}</strong>
    <p>Address: {addr}</p>
  </div>
}