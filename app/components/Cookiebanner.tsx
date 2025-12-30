"use client";
import { useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(true);

  return show ? (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-between items-center">
      <span>Wij gebruiken cookies om de site goed te laten werken.</span>
      <button
        className="bg-green-500 px-4 py-2 rounded"
        onClick={() => setShow(false)}
      >
        Accepteer
      </button>
    </div>
  ) : null;
}
