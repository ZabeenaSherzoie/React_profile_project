import Row from "./Row"
export default function AccountDetailsCard({details}){
    <div className="card infoCard">
        <h2 className="cardTitle">Account Details</h2>
        <div className="rows">
            <Row label = "Role" value={details.Role}></Row>
            <Row label = "Status" value={<span className = 'pill'>{details[label]} </span>}></Row>
            <Row label = "Verification" value={<span className = 'verified'>Verified</span>}></Row>
        </div>
    </div>

}