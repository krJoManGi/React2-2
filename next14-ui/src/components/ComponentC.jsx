export default function ComponentC({foo}) {
    return (
        <>
            <h1>ComponentC</h1>
            <h2>ComponentB에서 {foo.message}</h2>
        </>
    )
}