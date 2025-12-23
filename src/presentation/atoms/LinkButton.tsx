import { Button } from "./Button";
import Link from "next/link";
import { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  ariaLabel: string;
} & Omit<React.ComponentProps<typeof Button>, "variant">;

export function LinkButton({
  href,
  children,
  ariaLabel,
  className,
  ...buttonProps
}: LinkButtonProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <a className={className}>
        {" "}
        {/* El className va aquí en el <a> */}
        <Button variant="link" aria-label={ariaLabel} {...buttonProps}>
          {children}
        </Button>
      </a>
    </Link>
  );
}
