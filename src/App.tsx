import React from 'react';
import './App.css';
import NavigationBar from './components/Nav';
import Footer from './components/Footer';
import Description from './components/Description';
import CardSection from './components/cardSection';
import { CardProps } from './components/cardSection';
import ContactMe from './components/ContactMe';
import DinoGame from './components/DinoGame';

// interface CardProps {
//   title: string;
//   image: string;
//   description: string;
//   onClick: boolean;
// };

const projects: CardProps[] =
[ {title: "title here",image:'src here', description:"desc here", onClick:false, github:"linkkkkkkkkkk", website:"website"},
  {title: "CMS Website", image: 'src', description: "built a cms website and .....", onClick:false}
];

const education: CardProps[] = [{title:"Red River College Polytech", image:"./rrc.jpg", description:"Graduated Red River College with a Gpa of 4.0 and worked on languages like HTML, CSS, JavaScript, React PHP, SQL etc.", onClick:false}]

const workExp:CardProps[] = [{title:"Project Name", image:"./math.png", description:"good problems , where problems are meant to be good", onClick:false}]

const divStyle:any = {
  //backgroundColor: "gray",
  padding: "10px",
  margin: "20px auto",
  width: "80%"
}


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Description/>
      {/* <DinoGame/> */}

      <div style={divStyle}>
        <h1 className='font-effect-outline text-6xl text-yellow-300'>Work Experience</h1>

        <div><CardSection data={workExp}/></div>
      </div>

      <div style={divStyle}>
        <h1 className=' font-effect-outline text-6xl text-yellow-300 w-auto'>Education</h1>
        <CardSection data={education}/>
      </div>

    <div style={divStyle}>
      <h1 className=' font-effect-outline text-6xl text-yellow-300 '>Projects</h1>
      <CardSection data={projects} />
    </div>



    <DinoGame/>

    <div>
      <h1 className=' font-effect-outline text-6xl text-yellow-300'>Let's Connect...</h1>
      <ContactMe/>
    </div>

      <Footer />

    </div>
  );
}

export default App;
