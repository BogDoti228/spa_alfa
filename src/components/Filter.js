import {useDispatch, useSelector} from "react-redux";
import {update_filter} from "../store/state_controller_slice";
import {useEffect, useState} from "react";
import {styles} from "../styles/conditions";
import {change_filter} from "../store/condition_slice";

function Filter(){
    const dispatch = useDispatch()
    const {filtered} = useSelector(state => state.controller_reducer)
    const [condition, setCondition] = useState(styles.unchecked);
    const {filter} = useSelector(state => state.condition_reducer)

    useEffect(() => {
        dispatch(change_filter(filtered))
    },[filtered])

    const handleOnClick = () => {
        if (!filtered){
            dispatch(update_filter(true))
            setCondition(styles.checked)
        }
        else {
            dispatch(update_filter(false))
            setCondition(styles.unchecked)
        }
    }

    const handleOver = () => {
        if (filtered){
            setCondition(styles.checked_hover)
        }
        else {
            setCondition(styles.unchecked_hover)
        }
    }

    const handleOut = () => {
        if (filtered){
            setCondition(styles.checked)
        }
        else {
            setCondition(styles.unchecked)
        }
    }

    return (
        <div className={"filter"} style={condition} onMouseOver={handleOver} onMouseOut={handleOut} onClick={handleOnClick}>
            <span className={"filter__label"}>
                {filter}
            </span>
        </div>
    );
}

export default Filter;