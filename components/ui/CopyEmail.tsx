"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Status = "idle" | "copied" | "failed";

export function CopyEmail({ email }: { email: string }) {
	const [status, setStatus] = useState<Status>("idle");
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (timer.current) clearTimeout(timer.current);
		};
	}, []);

	function reset(next: Status, after: number) {
		setStatus(next);
		if (timer.current) clearTimeout(timer.current);
		timer.current = setTimeout(() => setStatus("idle"), after);
	}

	async function copy() {
		try {
			await navigator.clipboard.writeText(email);
			reset("copied", 2000);
		} catch {
			reset("failed", 5000);
		}
	}

	return (
		<span className="inline-flex flex-wrap items-center gap-3">
			<button
				type="button"
				onClick={copy}
				aria-label={status === "copied" ? "Copied" : "Copy email address"}
				className="btn-frame shrink-0"
			>
				{status === "copied" ? (
					<Check aria-hidden className="h-3.5 w-3.5 text-accent" />
				) : (
					<Copy aria-hidden className="h-3.5 w-3.5" />
				)}
				{status === "copied" ? "Copied" : "Copy email"}
				<span aria-live="polite" className="sr-only">
					{status === "copied" ? "Email address copied to clipboard" : ""}
				</span>
			</button>
			{status === "failed" ? (
				<span role="status" className="text-xs leading-snug text-muted">
					Couldn&apos;t copy — select the address above
				</span>
			) : null}
		</span>
	);
}
