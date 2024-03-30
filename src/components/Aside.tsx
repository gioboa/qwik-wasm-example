import { component$ } from "@builder.io/qwik";
import { HorizontalMirror } from "./icons/HorizontalMirror";
import { Rotate } from "./icons/Rotate";
import { VerticalMirror } from "./icons/VerticalMirror";

export const Aside = component$(() => {
  return (
    <aside
      id="logo-sidebar"
      class="fixed left-0 top-0 z-40 mt-14 h-screen w-20 translate-x-0 border-r border-gray-200 pl-2 transition-transform dark:border-gray-700 md:w-64"
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
              <span class="ms-3 hidden md:block">Rotate</span>
            </button>
          </li>
          <li>
            <button
              class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick$={() => console.log("VerticalMirror")}
            >
              <VerticalMirror />
              <span class="ms-3 hidden md:block">Vertical Mirror</span>
            </button>
          </li>
          <li>
            <button
              class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick$={() => console.log("HorizontalMirror")}
            >
              <HorizontalMirror />
              <span class="ms-3 hidden md:block">Horizontal Mirror</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
});
