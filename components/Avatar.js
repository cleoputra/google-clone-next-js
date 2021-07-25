import Image from "next/image";

function Avatar({url, className}) {
    return (
        <Image 
        loading="lazy"
        src={url}
        className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
        alt="Profile picture" />
    )
}

export default Avatar
