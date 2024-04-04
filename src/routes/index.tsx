import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { greet } from "wasm-package";
import { Aside } from "~/components/Aside";
import { Header } from "~/components/Header";

export default component$(() => {
  return (
    <div class="h-full w-full bg-white dark:bg-gray-800">
      <Header />
      <Aside />
      <main class="p-4 pt-20 sm:ml-64">
        <button
          onClick$={() => {
            greet("gioboa!");
          }}
        >
          click
        </button>
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
