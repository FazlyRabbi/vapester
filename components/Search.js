import React from "react";

import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export default function Search() {

  return (
    <form>
      <div class="relative">
        <button class="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
        <input type="search" id="default-search" class="block w-full p-3 pl-10 text-sm text-white border border-gray-900 bg-[#393939] outline-none" placeholder="Search Mockups, Logos..." required />
      </div>
    </form>
  );
}