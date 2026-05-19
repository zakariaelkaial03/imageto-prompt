import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-4 text-[#ededed]">
      <div className="w-full max-w-sm">
        <h1 className="mb-2 text-2xl font-bold text-white">Create your account</h1>
        <p className="mb-8 text-sm text-white/50">
          Start generating prompts for free today.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-white/70">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Jane Doe"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-white/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm text-white/70">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/40">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-violet-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
