import Card from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {back_gifs, fetch_gifs_api, filter_gifs} from "../store/fetch_slice";
import {useMediaPredicate} from "react-media-hook";

function Plate(){
    let height = 400;
    let width = 400;
    const isIphoneX = useMediaPredicate("(width : 375px)")
    if (isIphoneX) {
        height = 355;
        width = 355;
    }
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
                return <Card gif={obj.gif} height={height} width={width} index={obj.index} filter={obj.filter}/>
            })}
        </div>
    );
}

export default Plate;