import React from 'react';
import classes from './Productpreview.module.css';

const Productpreview = (props) =>{
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    return(
        <div className={classes.Productpreview}>
          {/* <img src="https://image.shutterstock.com/image-vector/digital-wristwatch-blank-background-vector-260nw-453347410.jpg" alt="watch logo"></img> */}
          <img src={props.currentpreviewimage} alt="image"></img>

          {
              props.showbeatsection ? <div className={classes.Heartbeatsection}>
              <i className="fas fa-heartbeat"></i>
              <p>78</p> 
            </div> : 
            <div className={classes.Timesection}>
            <p>{`${currentHour}: ${currentMinute}`}</p>
          </div>
          }
          
          
        </div>
    )
}

export default Productpreview;