import "./like.css";
import foto from "./img/JesusA.jpg";
import { useState } from "react";

export const Tarea2 = () => {

    const [likes, setLikes] = useState(0);
  

    const LikesP = () => {
        if (likes > 0) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
    };
    return (
        <div className="like-container">
            <div className="like-publicacion">
                <img src={foto} alt="Imagen de la publicacion" />
                <div className="like-button">
                    <input className="like-heart" id="heart" type="checkbox" onChange={LikesP} />
                    <label className="like-label" htmlFor="heart">
                        <svg
                            className="like-icon"
                            fillRule="nonzero"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
                            ></path>
                        </svg>
                    </label>
                    <span className="like-count like-count-two">{likes}</span>
                </div>
            </div>
        </div>
    )
}
