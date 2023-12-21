import classes from './DinoGame.module.css';

function DinoGame(){
  return <div >
    <div  className={classes.dino}><img src="./trex.png" alt="" /></div>
    <div className={classes.cactus}></div>
  </div>
}

export default DinoGame;