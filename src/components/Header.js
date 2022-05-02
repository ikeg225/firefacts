import logo from '../images/firewatch.webp';
import '../css/header.css';

export default function Header() {
    return (
        <header>
            <div className="headerContent">
                <div className="leftHeader">
                    <img src={logo} alt="firewatch logo" />
                    <h1>FIREFACTS</h1>
                </div>
                <div className="rightHeader">
                    <a href="#firePrep"><h1>PREP</h1></a>
                    <a href="#fireEcology"><h1>ECOLOGY</h1></a>
                    <a href="#fireProtocols"><h1>PROTOCOLS</h1></a>
                    <a href="#fireRecovery"><h1>RECOVERY</h1></a>
                    <a href="#getInvolved"><h1>GET INVOLVED</h1></a>
                </div>
            </div>
        </header>
    )
}