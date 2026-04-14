"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type SmartLinkProps = {
  href: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export const SmartLink = React.forwardRef<HTMLAnchorElement, SmartLinkProps>(
  (
    { href, disabled = false, className, children, target, rel, ariaLabel },
    ref
  ) => {
    const isInternal = href.startsWith("/");

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const anchorProps = {
      ref,
      onClick: handleClick,
      "aria-disabled": disabled,
      tabIndex: disabled ? -1 : 0,
      "aria-label": ariaLabel,
      className: cn(
        "relative rounded-xl border border-white/20 bg-secondary p-2 text-foreground transition-colors",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        disabled
          ? "cursor-not-allowed opacity-35 grayscale"
          : "hover:bg-accent hover:text-white hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-offset-background",
        className
      ),
    } as const;

    if (isInternal) {
      return (
        <Link href={href} legacyBehavior passHref>
          <a {...anchorProps}>{children}</a>
        </Link>
      );
    }

    return (
      <a
        href={href}
        {...anchorProps}
        target={disabled ? undefined : target ?? "_blank"}
        rel={disabled ? undefined : rel ?? "noopener noreferrer"}
      >
        {children}
      </a>
    );
  }
);

SmartLink.displayName = "SmartLink";