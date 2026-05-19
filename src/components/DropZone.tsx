"use client";

import { useRef, useState, DragEvent, ChangeEvent } from "react";

interface DropZoneProps {
  onFileSelect: (file: File) => void;
}

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_BYTES = 5 * 1024 * 1024;

export default function DropZone({ onFileSelect }: DropZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function validate(file: File): string | null {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      return "Only JPG, PNG, and WebP files are accepted.";
    }
    if (file.size > MAX_BYTES) {
      return "File must be under 5 MB.";
    }
    return null;
  }

  function handleFile(file: File) {
    const msg = validate(file);
    if (msg) {
      setError(msg);
      return;
    }
    setError(null);
    onFileSelect(file);
  }

  function onDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(true);
  }

  function onDragLeave(e: DragEvent<HTMLDivElement>) {
    // only clear when leaving the zone itself, not a child element
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragging(false);
    }
  }

  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    // reset so the same file can be re-selected after an error
    e.target.value = "";
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        role="button"
        tabIndex={0}
        aria-label="Drop zone: click or drag an image here"
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={[
          "flex flex-col items-center justify-center gap-4",
          "w-full max-w-lg min-h-56 rounded-[12px]",
          "border-2 border-dashed cursor-pointer select-none",
          "transition-colors duration-200",
          isDragging
            ? "border-primary bg-tint-lavender"
            : "border-hairline-strong bg-surface hover:border-ink hover:bg-surface-soft",
        ].join(" ")}
      >
        {/* Upload icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-12 h-12 ${isDragging ? "text-primary" : "text-stone"}`}
          aria-hidden
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>

        <div className="text-center px-4">
          <p className={`text-[16px] font-medium ${isDragging ? "text-primary" : "text-charcoal"}`}>
            Drop your art image here or click to upload
          </p>
          <p className="mt-1 text-[14px] text-steel">JPG, PNG, WebP · max 5 MB</p>
        </div>
      </div>

      {error && (
        <p role="alert" className="text-[14px] text-semantic-error">
          {error}
        </p>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={onInputChange}
      />
    </div>
  );
}
