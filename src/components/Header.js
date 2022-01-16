import {useSelector} from "react-redux";

function Header(){
    const {header} = useSelector(state => state.condition_reducer)
    return (
        <header className={"header"}>
            <h1 className={"header__title"}>
                {header}
            </h1>
        </header>
    );
}

export default Header;