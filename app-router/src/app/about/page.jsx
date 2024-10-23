import Image from "next/image"
import foo from 'public/images/abc.jpg'

export default function About() {
    return (
        <>
            <h1>About Page</h1>
            <Image src='images/abc.jpg' alt="이름" width={300} height={3500}></Image>
            <Image src={foo} alt="이름" width={300} height={3500}></Image>
        </>
    )
}