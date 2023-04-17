import React from "react";
import { Input, Button } from "@material-tailwind/react";
 
export default function NewsLetter() {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  
  return (
    <div className="my-10 flex flex-col w-full max-w-[36rem] mx-auto items-start gap-2">
      <Input
        type="email"
        label="Email Address"
        value={email}
        onChange={onChange}
        className="py-6 px-4 bg-white"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        disabled={!email}
        className="mt-4 md:mt-0 py-3.5 px-8  bg-pink-600 text-white"
      >
        Subscribe
      </Button>
    </div>
  );
}