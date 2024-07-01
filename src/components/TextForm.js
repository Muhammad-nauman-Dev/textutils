import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was clicked'+text)
    let newtext = text.toUpperCase()
    setText(newtext)
    props.showAlert('Converted to UPPER CASE','success')
  }
  const handleLowClick = () => {
    // console.log('Uppercase was clicked'+text)
    let newtext = text.toLocaleLowerCase()
    setText(newtext)
    props.showAlert('Converted to lowercase','success')
  
  }
  const clearText = () => {
    // console.log('clearTxt was clicked'+text)
    let newtext = ""
    setText(newtext)
    props.showAlert('Text area cleared','success')
  }
  const handleOnChange = (event) => {
    // console.log('On Change')
    setText(event.target.value)
  }
  const clearExtraSpaces = (event) => {

    let newtext = text.replace(/\s+/g, ' ').trim()
    setText(newtext)
    props.showAlert('Extra spaces removed','success')
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges()
    props.showAlert('Text Coppied','success')
  }
  // const wordCount = () => {
  //   if (text.trim() === '') {
  //     return 0;
  //   }
  //   return text.trim().split(/\s+/).length;
  // }


  const [text, setText] = useState('Enter Text here')

  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2 className='mb-2'>{props.heading}</h2>
        <div className="mb-3">
          <label className="form-label">Enter Your Text Here</label>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        {/* <div className="row">
          <div className="col-md-3">
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPER CASE</button>
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary" onClick={handleLowClick}>Convert to lowercase</button>
          </div>
          <div className="col-md-2 mx-2 ">
            <button className="btn btn-warning  " onClick={clearExtraSpaces}>RemoveExtraSpaces</button>
          </div>
          <div className="col-md-2 mx-5">
            <button className="btn btn-warning  " onClick={clearText}>ClearTextArea</button>
          </div>
          <div className="col-md-2 my-2">
            <button className="btn btn-warning  " onClick={handleCopy}>Coppy</button>
          </div>
        </div> */}
          <div className="">
         
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to UPPER CASE</button>
          
        
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleLowClick}>Convert to lowercase</button>
          
          
            <button disabled={text.length===0} className="btn btn-warning mx-1 my-1 " onClick={clearExtraSpaces}>RemoveExtraSpaces</button>
          
         
            <button disabled={text.length===0} className="btn btn-warning mx-1 my-1 " onClick={clearText}>ClearTextArea</button>
          
          
            <button  disabled={text.length===0} className="btn btn-warning mx-1 my-1 " onClick={handleCopy}>Coppy</button>
          
        </div>


      </div>
      {/* you can also use this line to count the words in the array */}
      {/* {text.split("").filter((element)=>{return element.length!==0 }).length} */}
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").filter((element)=>{return element.length!== 0 }).length}</b> words , <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!== 0 }).length}</b> minutes to read words </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the above text Box to preview '}</p>
      </div>
    </>
  )
}
