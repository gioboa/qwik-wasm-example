import { component$ } from "@builder.io/qwik";
import { Fibonacci } from "./icons/Fibonacci";

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
            <button class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <Fibonacci />
              <span class="ms-3 hidden md:block">Fibonacci</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
});
