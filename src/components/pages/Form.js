import React from 'react';
import { useForm } from "react-hook-form";


export default function Form() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const Submit = (submission) => {
        console.log(submission);
        alert(JSON.stringify(submission));
        reset();
    }
    // console.log(useForm())
    // console.log(register("sdff"))
    return (<>
        <div className="App">
            <form onSubmit={handleSubmit(Submit)}>
                <div>
                    <h1 style={{ "color": "purple", "backgroundColor": "" }}>Submit-Comment</h1>
                    <div className='align'>
                        <label style={{ color: 'green', }}><b>Rating</b></label>
                    </div>
                    <input type="number" name='rating' placeholder='rate us betn 1 to 5' style={{ width: '100%' }} {...register("rating", {
                        required: { value: true, message: 'give a rating' },
                        minLength: { value: 1, message: ' rating must be at least 1 ' },
                        maxLength: { value: 5, message: 'rating must not exceed 5 ' }

                    })} />
                    {errors.rating && (<div className='color'>{errors.rating.message}</div>)}


                </div>
                <div>
                    <div className='align'>
                        <label style={{ color: 'green', }}><b>Your Name</b></label>
                    </div>
                    <input type="text" name='firstName' placeholder='Name' style={{ width: '100%' }}{...register("firstName", {
                        required: { value: true, message: 'The firstname field is required' },
                        minLength: { value: 4, message: ' username must be at least 4 characters' },
                        maxLength: { value: 15, message: 'Username must not exceed 15 characters' }
                    })} />


                    {errors.firstName && (<div className='color'>{errors.firstName.message}</div>)}
                    {/* <button type='Submit'>submit</button> */}
                </div>

                <div>
                    <div className='align'>
                        <label style={{ color: 'green', }}><b>Comment</b></label>
                    </div>
                    <textarea name='textarea' placeholder="we would love your thoughts,plz comment!" rows="6" cols="40" width='100%' {...register("comment", {
                        required: { value: true, message: ' comment is required' },
                        maxLength: { value: 100, message: 'length should be less than 100' }
                    })} />
                    {errors.comment && (<div className='color'>{errors.comment.message}</div>)}



                    <div>
                        <button type='Submit' style={{ backgroundColor: 'blue' }}>submit</button>

                    </div>
                </div>
            </form>
        </div>
    </>
    )
}