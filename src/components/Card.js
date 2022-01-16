import {getAltText, getBestRendition} from "@giphy/js-util";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {delete_like, save_object} from "../store/state_controller_slice";
import {useEffect, useState} from "react";
import {styles} from "../styles/conditions";


function Card({gif, index, height, width, filter}){
    const bestRendition = getBestRendition(gif.images, width, height)
    const rendition = gif.images[bestRendition.renditionName]

    const dispatch = useDispatch()
    const [condition, setCondition] = useState(styles.default)
    const { gifs_objs } = useSelector((state) => state.fetch_reducer)
    const { objects, filtered } = useSelector((state) => state.controller_reducer)

    useEffect(() => {
        const obj = objects.find(k => k.index === index);
        if (filtered){
            if (!filter){
                setCondition(styles.dislike)
            }
        }
        else{
            if (obj === undefined){
                setCondition(styles.default)
            }
        }
    }, [gifs_objs])

    const onLikeHandle = () => {
        if (condition === styles.like) {
            dispatch(delete_like(index))
            setCondition(styles.default)
        }
        else {
            dispatch(save_object({
                index : index,
                like: true,
                dislike: false
            }))
            setCondition(styles.like)
        }
    }

    const onDislikeHandle = () => {
        if (condition === styles.like) {
            dispatch(delete_like(index))
        }

        dispatch(save_object({
            index : index,
            like: false,
            dislike: true
        }))

        setCondition(styles.dislike)
    }

    return (
        <div className={"card"} style={condition}>
            <div className={"card__gif-wrapper"}>
                <picture className={"card__gif"} key={index}>
                    <source type="image/webp" srcSet={rendition.webp} />
                    <img
                        src={rendition.url}
                        width={width}
                        height={height}
                        alt={gif.toString()}/>
                </picture>
                <div className={"card__like"} onClick={onLikeHandle}/>
                <div className={"card__dislike"} onClick={onDislikeHandle}/>
            </div>
            <div className={"card__info-wrapper"}>
                <span className={"card__info"}>
                    {getAltText(gif)}
                </span>
            </div>
        </div>
    )
}

Card.propTypes = {
    gif: PropTypes.element.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
};

export default Card;