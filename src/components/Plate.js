import Card from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {back_gifs, fetch_gifs_api, filter_gifs} from "../store/fetch_slice";

function Plate(){
    const { gifs_objs } = useSelector((state) => state.fetch_reducer)
    const { objects, filtered } = useSelector((state) => state.controller_reducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetch_gifs_api())
    }, [])

    useEffect(() => {
        if (filtered) {
            dispatch(filter_gifs(objects))
        }
        else {
            dispatch(back_gifs())
        }
    }, [filtered])

    return (
        <div className={"plate"}>
            {gifs_objs.map((obj) => {
                return <Card gif={obj.gif} height={400} width={400} index={obj.index} filter={obj.filter}/>
            })}
        </div>
    );
}

export default Plate;