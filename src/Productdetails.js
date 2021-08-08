import React from 'react';
import classes from './Productdetails.module.css';

const Productdetails =(props) =>{
    console.log(props.data);
    const coloroptions = props.data.colorOptions.map((item, pos)=>{
        const classArray = [classes.Productimag]
        if (pos===props.currentpreviewimagepos){
            classArray.push(classes.Selectedimage);
        }
        return(
            <img key={pos} className={[classArray.join (' ')]} src={item.imageUrl} alt={item.styleName} 
            onClick={()=>props.onclickcolor(pos)}></img>
        );
    })

    const featurelist1 = props.data.featureList.map((item,pos)=>{
        const classArray =[classes.Featureitem]
        if (pos==1 && props.showbeatsection){
            classArray.push(classes.selectedfeaureitem);
        }else if(pos==0 && !props.showbeatsection){
            classArray.push(classes.selectedfeaureitem)
        }
        return(
            <button onClick={()=>props.onfeatureitemclick(pos)} key={pos} className={classArray.join(' ')}>{item}</button>
        )
    })
    return(
        <div className={classes.Productdata}>
          <h1 className={classes.Producttitle}>{props.data.title}</h1>
          <p className={classes.Productdesc}>{props.data.description}</p>
          <h3 className={classes.selectionheading}>Select Color</h3>
          <div>
            {/* <img className={[classes.Productimag, classes.Selectedimage].join(' ')} src="https://imgur.com/PTgQlim.png" alt="Red watch"></img>
            
            <img className={classes.Productimag} src="https://imgur.com/Mplj1YR.png" alt="Blue watch"></img>
            <img className={classes.Productimag} src="https://imgur.com/xSIK4M8.png" alt="Purple watch"></img>
            <img className={classes.Productimag} src="https://imgur.com/xSIK4M8.png" alt="Purple watch"></img>  */}
            {coloroptions}
          </div>
          <h3 className={classes.selectionheading}>Features</h3>
          <div>
            {/* <button className={classes.Featureitem} style={{backgroundColor: "grey"}}>Time</button>
            <button className={classes.Featureitem}>Heart Rate</button> */}
            {featurelist1}
          </div>
          <button className={classes.buynowbutton}>Buy Now</button>
        </div>
    )
}
export default Productdetails;