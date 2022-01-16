import {useSelector} from "react-redux";

function Footer(){
    const {footer_first, footer_second} = useSelector(state => state.condition_reducer)

    return (
        <footer className={"footer"}>
            <div className={"footer__block"}>
                <p className={"footer__info"}>
                    {footer_first}
                    <br/>
                    {footer_second}
                </p>
            </div>
        </footer>
    );
}

export default Footer;