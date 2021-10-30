import { useContext } from "react";
import { UserContext } from "../../context";

const Dashboard = () => {
    const [state, setState] = useContext(UserContext);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="display-1 text-center">
                        Dashboard page
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Dashboard