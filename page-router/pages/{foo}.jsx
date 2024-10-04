import { useRouter } from "next/router"

export default function Foo(foo) {
    const router = useRouter()
    const { foo } = router.query
    console.log(foo)

    return (
        <>
            <h1>foo : {foo}</h1>
        </>
    )
}