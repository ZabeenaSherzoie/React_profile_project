export default function StatCard ({title, bigValue, footerText, icon}){
    return(
        <div className="card StatCard">
            <div className="statTop">
                <p className="statTitle">
                    {title}
                </p>
                {icon ? <span className="statIcon">{icon}</span>: null }
            </div>
            {bigValue ? <span className="statIcon">{icon}</span>: null }
            <p className="statFooter">
                {footerText}
            </p>

        </div>
    )
}