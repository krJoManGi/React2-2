export default function fooId() {
    return (
        <h1>
            Foo {props.params.fooId} / {props.searchParams.country}
        </h1>
    )
}