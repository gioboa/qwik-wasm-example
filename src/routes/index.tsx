import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import init, { fib } from "wasm-package";
import { Aside } from "~/components/Aside";
import { Header } from "~/components/Header";

export default component$(() => {
  const timeSig = useSignal(0);
  const resultSig = useSignal("");
  const fibonacciNumSig = useSignal<number>(1);

  return (
    <div class="h-full w-full bg-white dark:bg-gray-800">
      <Header />
      <Aside />
      <main class="p-4 pt-20 text-center text-gray-900 dark:text-white sm:ml-64">
        <h1 class="pb-4 text-3xl">Fibonacci with Rust</h1>
        <h2 class="pb-8 text-xl">Calculation time: {timeSig.value} ms</h2>
        <input
          class="mr-4 h-[32px] w-10 text-gray-900"
          value={fibonacciNumSig.value}
          onInput$={(_, el) => (fibonacciNumSig.value = parseInt(el.value))}
        />
        <button
          class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick$={() => {
            // init will reuse a cached version if present
            init().then(() => {
              const startTime = performance.now();
              resultSig.value = fib(fibonacciNumSig.value).toString();
              timeSig.value = performance.now() - startTime;
            });
          }}
        >
          Calculate
        </button>
        <div class="py-6 text-lg">
          {resultSig.value && `Result ${resultSig.value}`}
        </div>
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Image Editor",
  meta: [
    {
      name: "description",
      content: "Qwik Image Editor with WASM",
    },
  ],
};
