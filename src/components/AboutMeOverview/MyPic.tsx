import Image from "next/image"
import ShujaPic from "@/lib/me.png"

const MyPic = () => {
    return <div className="flex justify-center items-center max-w-xl bg-primary-one rounded-full">
        <Image className="p-10 rounded-full" alt="shuja" src={ShujaPic} />
    </div>
}

export default MyPic