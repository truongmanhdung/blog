"use client";
import Profile from "./components/profile";
import LayoutProfile from "./layouts/layoutProfile";

export default function Home() {
  return (
    <main className="h-full">
      <LayoutProfile>
        <Profile />
      </LayoutProfile>
    </main>
  );
}
