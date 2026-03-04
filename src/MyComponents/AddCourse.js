import React, { useState } from 'react'

const AddCourse = (props) => {

    const [name,setName] = useState("");
    const [desc,setDesc] = useState("");
    const [fee,setFee] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!name || !desc || !fee){
            alert("Name or Description or Fee cannot be blank");
            return;
        }
        // console.log("Length of courses "+props.courses.length);
        let newSrno=props.courses.length + 1;// it's length of courses so we have to add one for new serial number.
        props.addCourse(newSrno,name,desc,fee)
        setName('')
        setDesc('')
        setFee(0)
    }

    return (
        <div className="container my-3">
            <h4>Add New Course</h4>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="name" />
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="fee" className="form-label">Fee</label>
                    <input type="number" value={fee} onChange={(e)=>setFee(e.target.value)} className="form-control" id="fee"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Course</button>
            </form>
        </div>
    )
}

export default AddCourse
