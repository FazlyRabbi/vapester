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
    <div className="relative flex w-full max-w-[24rem]">
      <Menu placement="bottom-start">
        <MenuHandler>
          <Button
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
          >
          search
          </Button>
        </MenuHandler>
        <MenuList className="max-h-[20rem] max-w-[18rem]">
         
        </MenuList>
      </Menu>
      <Input
        type="tel"
        placeholder="Mobile Number"
        className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-blue-500"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
    </div>
  );
}