function Skills(){
    const skills = ["JavaScript","React","CSS","HTML","Nodejs"];
    return(
        <div style={{marginBottom: "10px"}}
        class="box-border heigth-100  border-2 p-4 width-100 ">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill,index)=> (<li key={index}>{skill}</li>
            ))}
            </ul>
        </div>

    )
}
export default Skills;