import Filter from "./Filter";
import Plate from "./Plate";
import {useSelector} from "react-redux";

function Content(){
    const {catalog} = useSelector(state => state.condition_reducer)
    return (
        <main className={"content"}>
            <div className={"catalog"}>
                <div className={"catalog__header"}>
                    <h1 className={"catalog__title"}>
                        {catalog}
                    </h1>
                    <Filter/>
                </div>
                <Plate/>
            </div>
        </main>
    );
}

export default Content;