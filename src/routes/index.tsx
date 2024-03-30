import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Aside } from "~/components/Aside";
import { Header } from "~/components/Header";

export default component$(() => {
  return (
    <div class="h-full w-full bg-white dark:bg-gray-800">
      <Header />
      <Aside />
      <main class="p-4 sm:ml-64"></main>
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
