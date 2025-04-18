import { component$, useSignal } from "@builder.io/qwik"

export const App = component$(() => {
    const count = useSignal(0)

    return (
        <button onClick$={() => (count.value += 1)}>
            count is {count.value}
        </button>
    )
})
