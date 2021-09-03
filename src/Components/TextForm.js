import React,{useState} from 'react'
// {useState}  is called hooks in react 
export default function TextForm(props) {
    
    const handleOnChange=(event)=>{
  
// console.log('on Change');
setText(event.target.value)

    }
    const handleUpClick=()=>{
        // console.log('The uppercase clicked'+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success")
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase;
        setText(newText); 
        props.showAlert("Converted to upper case", "success")
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText); 
        props.showAlert("Converted to upper case", "success")

    }
    const handleCopy=()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard", "success")

    }
    const handleExtraSpaces=()=>{
        let myArr = text.split(/[ ]+/);
        setText(myArr.join(" "));
        props.showAlert("Reomved Extra Spaces", "success")

    }
    // const handleColorClick=()=>{
    //     let newText={myStle};
    //     setText(newText); 
    // }
 
    const [text, setText] = useState('')
    // here text is s simppley text and setText is a function we cannot change the value using text  but using the setText 
    // setText="No you have not to enter value";  //invalid
    // text='new text'   //invalid
    // setText("No you cannot enter the value here");
    // let myStle={
    //  color:'red',
    //  backgroundColor:'blue'       
    // }
    // }
    return (
        <>
       
        <div style={{color:props.mode==='light'?'black':'white'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white' ,color:props.mode==='light'?'black':'white'}}  id="myBox" rows="1"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
{/* <button className="btn btn-primary mx-1" onClick={handleColorClick}>Check name limit</button> */}
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h1 className="my-3">Your text summary</h1>
            <p>{text.split(" ").length} words read and {text.length} characters read</p>
            <p>{.008*text.split(" ").length} minutes read word and {.008*text.length} minutes read chracters</p>
            <h2>Previw</h2>
            <p>{text.length>0?text:"Enter something to in the text box to preview here"}</p>
        </div>
 

        </>
    )
}
