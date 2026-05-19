"use client";

import { useState } from "react";
import DropZone from "@/components/DropZone";

type State = "idle" | "loading" | "done" | "error";

export default function GeneratorPage() {
  const [state, setState] = useState<State>("idle");
  const [prompt, setPrompt] = useState("");
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleFileSelect(file: File) {
    setState("loading");
    setPrompt("");
    setErrorMsg("");

    const form = new FormData();
    form.append("image", file);

    try {
      const res = await fetch("/api/analyze", { method: "POST", body: form });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setPrompt(data.prompt ?? "");
      setState("done");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-bold">Generator</h1>
        <p className="mb-10 text-white/50">
          Upload an image to generate a detailed AI art prompt.
        </p>

        <DropZone onFileSelect={handleFileSelect} />

        {state === "loading" && (
          <div className="mt-8 flex items-center gap-3 text-white/60">
            <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-violet-400 border-t-transparent" />
            Analyzing image…
          </div>
        )}

        {state === "error" && (
          <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            {errorMsg}
          </div>
        )}

        {state === "done" && prompt && (
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-white/40">
                Generated Prompt
              </h2>
              <button
                onClick={handleCopy}
                className="rounded-lg border border-white/20 px-3 py-1 text-xs text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <pre className="mt-3 whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-white/90">
              {prompt}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
