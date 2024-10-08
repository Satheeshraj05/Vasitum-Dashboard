import * as React from "react";
import { cn } from "../../lib/utils.ts";

// Card component
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "rounded-lg border bg-card text-card-foreground shadow-sm",
                className
            )}
            {...props}
        />
    )
);
Card.displayName = "Card";

// CardHeader component
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex flex-col space-y-1.5 p-6", className)}
            {...props}
        />
    )
);
CardHeader.displayName = "CardHeader";

// CardTitle component
const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, children, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn(
                "text-2xl font-semibold leading-none tracking-tight",
                className
            )}
            {...props}
        >
            {children}
        </h3>
    )
);
CardTitle.displayName = "CardTitle";

// CardDescription component
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, children, ...props }, ref) => (
        <p
            ref={ref}
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        >
            {children}
        </p>
    )
);
CardDescription.displayName = "CardDescription";

// CardContent component
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
    )
);
CardContent.displayName = "CardContent";

// CardFooter component
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex items-center p-6 pt-0", className)}
            {...props}
        />
    )
);
CardFooter.displayName = "CardFooter";

// Export components
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };