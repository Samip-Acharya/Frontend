import {Bookmark} from 'lucide-react'

function Card(props){
    return (
        <div className="card">
            <div>
                <div id="top">
                <img src={props.info.brandLogo} alt="" />
                <button><span>Save</span><Bookmark size={15}/></button>
            </div>
            <div id="center">
                <h2>{props.info.brandName} &nbsp;<span>{props.info.posted}</span></h2>
                <p>{props.info.role}</p>
                <div>
                    <h3>Full Time</h3>
                    <h3>{props.info.level}</h3>
                </div>
            </div>
            </div>
           
            <div id="bottom">
                <div>
                    <h3>{props.info.pay}</h3>
                    <p>{props.info.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card; 