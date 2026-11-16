"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
	const [copied, setCopied] = useState(false);
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (timer.current) clearTimeout(timer.current);
		};
	}, []);

	async function copy() {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			if (timer.current) clearTimeout(timer.current);
			timer.current = setTimeout(() => setCopied(false), 2000);
		} catch {
			window.location.href = `mailto:${email}`;
		}
	}

	return (
		<button
			type="button"
			onClick={copy}
			aria-label={copied ? "Email address copied" : "Copy email address"}
			className="btn-frame shrink-0"
		>
			{copied ? (
				<Check aria-hidden className="h-3.5 w-3.5 text-accent" />
			) : (
				<Copy aria-hidden className="h-3.5 w-3.5" />
			)}
			{copied ? "Copied" : "Copy email"}
			<span aria-live="polite" className="sr-only">
				{copied ? "Email address copied to clipboard" : ""}
			</span>
		</button>
	);
}
