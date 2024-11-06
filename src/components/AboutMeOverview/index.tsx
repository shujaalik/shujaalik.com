import VisibleOnScreenView from "../VisibleOnScreenView"
import Companies from "./Companies"
import MyInfo from "./MyInfo"
import MyPic from "./MyPic"

const AboutMeOverview = () => {
    return <div className="flex flex-col gap-20 justify-around items-center">
        <div className="flex flex-col w-screen gap-20 justify-around items-center">
            <VisibleOnScreenView>
                <MyPic />
            </VisibleOnScreenView>
            <MyInfo />
        </div>
        <VisibleOnScreenView>
            <Companies />
        </VisibleOnScreenView>
    </div>
}

export default AboutMeOverview