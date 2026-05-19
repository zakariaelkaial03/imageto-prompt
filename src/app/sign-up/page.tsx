import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4 text-ink">
      <div className="w-full max-w-sm">
        <h1 className="mb-2 text-[28px] font-semibold leading-[1.25] text-ink">Create your account</h1>
        <p className="mb-8 text-[14px] leading-[1.5] text-slate">
          Start generating prompts for free today.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-[14px] font-medium text-charcoal">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Jane Doe"
              className="w-full h-[44px] rounded-[8px] border border-hairline-strong bg-canvas px-4 text-[16px] text-ink placeholder-stone outline-none focus:border-2 focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-[14px] font-medium text-charcoal">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full h-[44px] rounded-[8px] border border-hairline-strong bg-canvas px-4 text-[16px] text-ink placeholder-stone outline-none focus:border-2 focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-[14px] font-medium text-charcoal">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full h-[44px] rounded-[8px] border border-hairline-strong bg-canvas px-4 text-[16px] text-ink placeholder-stone outline-none focus:border-2 focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-[8px] bg-primary py-[10px] text-[14px] font-medium text-white transition-colors hover:bg-primary-pressed"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-[14px] text-slate">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-link-blue hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
