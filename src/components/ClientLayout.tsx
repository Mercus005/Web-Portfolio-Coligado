"use client";

import { useState } from "react";
import LandingIntro from "./LandingIntro";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <LandingIntro onFinish={() => setShowIntro(false)} />}
      {!showIntro && children}
    </>
  );
}
