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
    <div className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="mb-2 text-[28px] font-semibold leading-[1.25] text-ink">Generator</h1>
        <p className="mb-10 text-[16px] leading-[1.55] text-slate">
          Upload an image to generate a detailed AI art prompt.
        </p>

        <DropZone onFileSelect={handleFileSelect} />

        {state === "loading" && (
          <div className="mt-8 flex items-center gap-3 text-slate">
            <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            <span className="text-[14px]">Analyzing image…</span>
          </div>
        )}

        {state === "error" && (
          <div className="mt-8 rounded-[8px] border border-semantic-error/30 bg-semantic-error/10 p-4 text-[14px] text-semantic-error">
            {errorMsg}
          </div>
        )}

        {state === "done" && prompt && (
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-[11px] font-semibold uppercase tracking-[1px] text-stone">
                Generated Prompt
              </h2>
              <button
                onClick={handleCopy}
                className="rounded-[8px] border border-hairline-strong px-3 py-[6px] text-[13px] font-medium text-slate transition-colors hover:border-ink hover:text-ink"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <pre className="mt-3 whitespace-pre-wrap rounded-[12px] border border-hairline bg-surface p-6 text-[14px] leading-[1.55] text-charcoal">
              {prompt}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
