"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";

export default function LoginForm({ className }: { className?: string }) {
  return (
    <form className={`flex max-w-md flex-col gap-4 ${className && className}`}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      {/* message box */}
      <div className="">
        {/* <p className="text-zinc-800 pl-2 mb-2 dark:text-blue-200">It is just a message</p> */}
        {/* <p className="text-zinc-800 pl-2 mb-2 dark:text-blue-200">It is another message</p> */}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
