import { UserContext } from "../context";
import { useContext } from "react";

const Home = () => {

    const [state, setState] = useContext(UserContext)
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="display-1 text-center py-5" >Home</h1>

                    <img src="/images/image.jpg" alt="image" />

                </div>

            </div>

        </div>
    )
}
export default Home;