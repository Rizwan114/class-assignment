import Link from "next/link"

function Contact (){
    return (
        <div className="a">
            <h1 className="sn">contact</h1>
            <br />

            
            <ul>
                <li className="i">Linkdin</li> 
                <li className="i">Facebook</li>
                <li className="i">Email</li>
                <Link href = "contact/help" target="_blank" className="i">Help</Link>
            </ul>

            
        </div>
    )
}

export default Contact

