import { component$ } from "@builder.io/qwik";
import { Qwik } from "./icons/Qwik";

export const Header = component$(() => {
  return (
    <nav class="fixed top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <a href="/" class="ms-2 flex md:me-24">
              <Qwik />
              <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl">
                Qwik Image Editor with Rust ( WASM )
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
});
