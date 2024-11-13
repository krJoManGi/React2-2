import ComponentA from '../../components/ComponentA'

export default function PropsFlow() {

    const data = { id: 1, name: 'wook', message: 'Hello World' }

    return (
        <>
            <h1>PropsFlow</h1>
            <ComponentA foo={data} />
        </>
    )
}