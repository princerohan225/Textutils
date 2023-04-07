import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, settext] = useState('');

    const handleUpCase = () => {
        let new_text = text.toUpperCase();
        // console.log(new_text)
        settext(new_text)
        if (props.mode !== 'dark') {
            props.showAlert('Converted to UpperCase', 'success')

        }
        else {
            props.showAlert('Converted to UpperCase', 'dark')
        }
    }

    const handlelowercase = () => {
        let low_text = text.toLowerCase();
        // console.log(low_text)
        settext(low_text)
        if (props.mode !== 'dark') {
            props.showAlert('Converted to LowerCase', 'success')

        }
        else {
            props.showAlert('Converted to LowerCase', 'dark')
        }
    }

    const handleLength = () => {
        let text_length = text.length;
        // console.log(text_length);
        settext('Total Characters: ' + text_length)
        if (props.mode !== 'dark') {
            props.showAlert(`Total Character ${text_length}`, 'success')

        }
        else {
            props.showAlert(`Total Character ${text_length}`, 'dark')
        }
    }

    const handleCopyText = () => {
        let copy_text = document.getElementById('mybtn');
        copy_text.select();
        // copy_text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copy_text.value);
        document.getSelection().removeAllRanges()
        if (props.mode !== 'dark') {
            props.showAlert('Copy to Clipboard', 'success')

        }
        else {
            props.showAlert('Copy to Clipboard', 'dark')
        }
    }

    const handleClear = () => {
        let clear_text = '';
        settext(clear_text);
        if (props.mode !== 'dark') {
            props.showAlert('Text is Clear', 'success')

        }
        else {
            props.showAlert('Text is Clear', 'dark')
        }
    }

    const handleExtraSpace = () => {
        // let ExtraSpace = /[ ]+/g;
        let ExtraSpace= text.replace(/\s+/g, ' ').trim()
        settext(ExtraSpace);
        if (props.mode !== 'dark') {
            props.showAlert('Extra Space is Removed', 'success')

        }
        else {
            props.showAlert('Extra Space is Removed', 'dark')
        }
    }

    const handleonChange = (event) => {
        // console.log('On Change')
        settext(event.target.value)
    }

    return (

        <>

            <div className='container my-3' style={{ color: props.mode !== 'dark' ? 'black' : 'white' }}>

                <h3 className='mb-4'>{props.Heading}</h3>

                <div className="mb-3">

                    <textarea className="form-control my-2" onChange={handleonChange} id="mybtn" rows="5" value={text} placeholder='Enter your Text Here.'></textarea>

                    <button className={`${props.mode !== 'dark' ? 'btn btn-primary' : 'btn btn-dark'} mx-1 my-1`} disabled={text.length === 0} onClick={handleUpCase}>Upper Case</button>

                    <button className={`${props.mode !== 'dark' ? 'btn btn-primary' : 'btn btn-dark'} mx-1 my-1`} disabled={text.length === 0} onClick={handlelowercase}>Lower Case</button>

                    <button className={`${props.mode !== 'dark' ? 'btn btn-primary' : 'btn btn-dark'} mx-1 my-1`} disabled={text.length === 0} onClick={handleLength}>Character Length</button>

                    <button className={`${props.mode !== 'dark' ? 'btn btn-primary' : 'btn btn-dark'} mx-1 my-1`} disabled={text.length === 0} onClick={handleCopyText}>Copy Text</button>

                    <button className={`${props.mode !== 'dark' ? 'btn btn-primary' : 'btn btn-dark'} mx-1 my-1`} disabled={text.length === 0} onClick={handleClear}>Clear Text</button>

                    <button className={`${props.mode !== 'dark' ? 'btn btn-primary' : 'btn btn-dark'} mx-1 my-1`} disabled={text.length === 0} onClick={handleExtraSpace}>Remove ExtraSpace</button>
                </div>
            </div>

            <div className='container' style={{ color: props.mode !== 'dark' ? 'black' : 'white' }}>
                <h2>Text Summary...</h2>

                <p>{text.split(' ').filter((element) => { return element.length !== 0 }).length} words and {text.length} character.</p>

                <p> {(0.008) * text.split(' ').filter((element) => {
                    return element.length !== 0
                }).length} Minutes Read.</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to Preview.'}</p>

            </div>
            <hr style={{ color: props.mode !== 'dark' ? 'black' : 'white' }}></hr>


        </>
    );
}