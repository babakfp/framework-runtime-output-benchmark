import { createSignal } from "solid-js"

export default () => {
    const [count, setCount] = createSignal(0)

    return (
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count()}
        </button>
    )
}
