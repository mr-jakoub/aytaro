import { useEffect } from "react"
import Course from "./Course"

const Courses = ({ courses, filter = false }) => {
    return(
        <div className="posts">
            <div className="header my-1 d-none">
                <p className="text-sm svg-icon text-bold">Courses&nbsp;&nbsp;
                    <svg viewBox="0 0 512 512">
                        <g>
                            <g>
                                <path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792
                                    H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083
                                    c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z
                                    "/>
                            </g>
                        </g>
                    </svg>
                </p>
                <div className="filters">
                    <button className="text-bold btn active">Opinions</button>
                    <button className="text-bold btn">Rooms</button>
                </div>
            </div>
            {courses.map(course => <Course key={course._id} comments={courses} course={course} />)}
        </div>
    )
}
export default Courses