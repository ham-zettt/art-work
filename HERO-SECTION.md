You are given a task to integrate an existing React component in the codebase

**IMPORTANT – DO NOT TOUCH THE NAVIGATION BAR**

This project ALREADY has its own navigation bar. This task is ONLY about adding the Hero Section and the Brand Slider below it.

- Do NOT create a new Navbar / Header component.
- Do NOT create `hero-01-utils/header.tsx`, and do NOT import `Header` or `NavigationSection` anywhere.
- Do NOT install or add the shadcn `navigation-menu` or `sheet` components, nor `@radix-ui/react-navigation-menu`, `@radix-ui/react-dialog` or `@radix-ui/react-icons` for navbar purposes.
- Do NOT modify, replace, restyle, or re-wire the existing navbar (links, mobile menu, logo, buttons, layout, z-index, etc.).
- If any file, import, or prop mentions navigation/header/menu, remove it from the Hero integration instead of recreating it.

The codebase should support:

- shadcn project structure
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles.
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:

```tsx
hero-01.tsx
import HeroSection from "@/components/ui/hero-01-utils/hero";
import BrandSlider, {
  BrandList,
} from "@/components/ui/hero-01-utils/brand-slider";
import type { AvatarList } from "@/components/ui/hero-01-utils/hero";

export default function AgencyHeroSection() {
  const avatarList: AvatarList[] = [
    {
      image:
        "https://cdn.21st.dev/assets/localized/59a2b5a0dfc1531e2d1ea42d71ae8615f37582e1f8a17e4a1b1aff9afc7ef878.jpg",
    },
    {
      image:
        "https://cdn.21st.dev/assets/localized/c7097eeb66ad097b6e5f9dbb95ae857cd6b55c0ad398c1ea84f3ab90a02c631e.jpg",
    },
    {
      image:
        "https://cdn.21st.dev/assets/localized/c70d48e47d3a2d79ad07d16bff3aa3cff686580be031b6102cad73a15b47d8fd.jpg",
    },
    {
      image:
        "https://cdn.21st.dev/assets/localized/51c9ed392f6e7fce7fd85a78648e3e06bfdcd91999ab5fa48485888231589abf.jpg",
    },
  ];

  const brandList: BrandList[] = [
    {
      image:
        "https://cdn.21st.dev/assets/localized/d824c259df6b2b2962fbef96e68a6877cab689b19246e3dc34ac9e7b144d32bd.svg",
      lightimg:
        "https://cdn.21st.dev/assets/localized/15cd724e2a038ed1415820ee25349eac7dfadec7f9359ae3800c13856ecb8b13.svg",
      name: "Brand 1",
    },
    {
      image:
        "https://cdn.21st.dev/assets/localized/266083df0c7d0633f145889af4700d18e62b8f2c068fd8ab73d5a94b87a5a5cb.svg",
      lightimg:
        "https://cdn.21st.dev/assets/localized/ae83ac635485a392bac5c1723e98d6820d3587f762fdbde63cd462d7edea7c0d.svg",
      name: "Brand 2",
    },
    {
      image:
        "https://cdn.21st.dev/assets/localized/91d1c562d12ba69aa7525d3782c6c6223b90e302073d59769dfce665ab9a83b7.svg",
      lightimg:
        "https://cdn.21st.dev/assets/localized/23d52f6aa5bbc765b65d5253b6578ed0e9213956a21be149f679cc79e2b0259e.svg",
      name: "Brand 3",
    },
    {
      image:
        "https://cdn.21st.dev/assets/localized/f50b06ae2b7bf86d199b0ac986a47442f4a198d2f6dd81a9fe83c43022608498.svg",
      lightimg:
        "https://cdn.21st.dev/assets/localized/4cd93b1d1133feffdf8eba4431f93c14b538120c74285f39fe7ad1c6e48f7b53.svg",
      name: "Brand 4",
    },
    {
      image:
        "https://cdn.21st.dev/assets/localized/3ad67ddda671655df765a507c9bcc7b67e4138a1ffe903ace17cef99c5c972a3.svg",
      lightimg:
        "https://cdn.21st.dev/assets/localized/6ee9f831a7c1cb87c14308a9d687fbd5fb2f319abee03d306b78730421410354.svg",
      name: "Brand 5",
    },
  ];

  return (
    <div className="relative">
      <main>
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
      </main>
    </div>
  );
}


demo.tsx
import HeroOne from "@/components/ui/hero-01";

export default function HeroOneDemo() {
  return <HeroOne />;
}

```

Copy-paste these files for dependencies:

```tsx
shadcn / button;
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

```tsx
shadcn / input;
import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

export { Input };
```

```tsx
shadcn / label;
("use client");

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
	"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
		VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cn(labelVariants(), className)}
		{...props}
	/>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
```

Install NPM dependencies:

```bash
@radix-ui/react-slot, class-variance-authority, lucide-react, @radix-ui/react-label
```

Implementation Guidelines

1.  Analyze the component structure and identify all required dependencies
2.  Review the component's argumens and state
3.  Identify any required context providers or hooks and install them
4.  Questions to Ask

- What data/props will be passed to this component?
- Are there any specific state management requirements?
- Are there any required assets (images, icons, etc.)?
- What is the expected responsive behavior?
- What is the best place to use this component in the app? (Render it directly below the existing navbar, e.g. in the page/layout that already renders it.)
- Is the existing navbar `fixed`/`sticky`/`absolute`, and what is its height? (Used only to adjust the Hero's top spacing; never to change the navbar.)

Steps to integrate 0. Copy paste all the code above in the correct directories

1.  Install external dependencies
2.  Fill image assets with Unsplash stock images you know exist
3.  Use lucide-react icons for svgs or logos if component requires them
4.  Do not add any navbar/header code. Make sure `AgencyHeroSection` renders only `<HeroSection />` and `<BrandSlider />` inside `<main>`
5.  If the existing navbar is fixed/sticky and overlaps the Hero, only adjust the top padding/margin of the Hero (e.g. `pt-*`) to match the navbar height. Do not edit the navbar itself
6.  Verify there are no leftover references to `Header`, `NavigationSection`, `navigationData`, `NavigationMenu`, or `Sheet` in the new files, and that the build/type-check passes