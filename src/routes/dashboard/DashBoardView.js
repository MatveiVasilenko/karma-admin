import {useState} from "react";
import BoardModal from "./components/BoardModal";
import Stats from "./modules/stats/Stats";
import Stream from "./modules/stream/Stream";

const DashBoardView = () => {

    const [userModal, setUserModal] = useState(false)

    return (
    <>
        <div>
            <div>
                <Stats />
            </div>
            <div>
                <Stream />
            </div>            
        </div>
        <div onClick={() => setUserModal(true)}>Создать новый поток</div>
        <BoardModal 
            userModal={userModal}
            setUserModal={setUserModal}
        />
    </>
    )
}

export default DashBoardView