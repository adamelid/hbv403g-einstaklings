import { useParams } from "react-router-dom";
import Mylla from "../components/Mylla.js";

function GamePage() {
    const params = useParams();
    var { slug } = params;
    slug = slug.replaceAll("-"," ")
    return (
        <div>
            <h1>{slug}</h1>
            <Mylla />   
        </div>
    );
};
export default GamePage;