import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/components/Header";
import { HorizontalMirror } from "~/components/icons/HorizontalMirror";
import { Rotate } from "~/components/icons/Rotate";
import { VerticalMirror } from "~/components/icons/VerticalMirror";

export default component$(() => {
  return (
    <div class="h-full w-full bg-white dark:bg-gray-800">
      <Header />

      <aside
        id="logo-sidebar"
        class="fixed left-0 top-0 z-40 mt-14 h-screen w-64 -translate-x-full border-r border-gray-200 transition-transform dark:border-gray-700 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full overflow-y-auto px-3 pb-4 pt-6">
          <ul class="space-y-2 font-medium">
            <li>
              <button
                class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick$={() => console.log("rotate")}
              >
                <Rotate />
                <span class="ms-3">Rotate</span>
              </button>
            </li>
            <li>
              <button
                class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick$={() => console.log("VerticalMirror")}
              >
                <VerticalMirror />
                <span class="ms-3">Vertical Mirror</span>
              </button>
            </li>
            <li>
              <button
                class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick$={() => console.log("HorizontalMirror")}
              >
                <HorizontalMirror />
                <span class="ms-3">Horizontal Mirror</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

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
