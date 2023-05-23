import { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function Navigationbar() {
  return (
    <nav className="flex h-10 w-full justify-around items-center">
      <a href="/categories/business">Business</a>
      <a href="/categories/science">Science</a>
      <a href="/categories/entertainment">Entertainment</a>
      <a href="/categories/general">General</a>
      <a href="/categories/health">Health</a>
      <a href="/categories/science">Science</a>
      <a href="/categories/sports">Sports</a>
      <a href="/categories/technology">Technology</a>
      <div className="text-white">
        <a href="/">
          <button className="bg-blue-500 rounded-md px-2 py-1 mr-2">Home</button>
        </a>
        <a href="/search">
          <button className="bg-blue-500 rounded-md px-2 py-1">Search</button>
        </a>
      </div>
    </nav>
  );
}
