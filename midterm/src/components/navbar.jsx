import Link from "next/link";

export default function Navbar() {
    return (
        <>
            {/* page.js로 이동 */}
            <Link href={'/'}> 
            HOME
            </Link>
            <br />
            {/* about/page.js로 이동 */}
            <Link href={'/About'}>
            About
            </Link>
            <br />
            {/* contact/page.js로 이동 */}
            <Link href={'/Contact'}>
            Contact
            </Link>
            <br />
            {/* sulg/page.js로 이동 */}
            <Link href={'/slug'}>
            slug
            </Link>
        </>
    )
}