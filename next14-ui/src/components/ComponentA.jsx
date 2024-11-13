import ComponentB from "./ComponentB"

export default function ComponentA({foo}) {
    return (
        <>
            <h1>ComponentA</h1>
            <h2>ComponentA에서 {foo.id}</h2>
            <ComponentB bar={foo}/>
        </>
    )
}