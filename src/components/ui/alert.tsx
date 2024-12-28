import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '../../lib/utils'

// Import specific icons from lucide-react for different alert types
import {
    CheckCircle,
    AlertCircle,
    Info,
    XCircle,
    Bell,
    Star,
    HelpCircle,
    Circle,
} from 'lucide-react'

export const alertVariants = cva(
    'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
    {
        variants: {
            variant: {
                default: 'bg-background text-foreground border-border',

                // Structured Variants using CSS Variables for Alert Colors
                success:
                    'bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))] border-[hsl(var(--success))]',
                failure:
                    'bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] border-[hsl(var(--destructive))]',
                warning:
                    'bg-[hsl(var(--warning))] text-[hsl(var(--warning-foreground))] border-[hsl(var(--warning))]',
                info: 'bg-[hsl(var(--info))] text-[hsl(var(--info-foreground))] border-[hsl(var(--info))]',
                result: 'bg-[hsl(var(--result))] text-[hsl(var(--result-foreground))] border-[hsl(var(--result))]',
                action: 'bg-[hsl(var(--action))] text-[hsl(var(--action-foreground))] border-[hsl(var(--action))]',
                tertiary:
                    'bg-[hsl(var(--tertiary))] text-[hsl(var(--tertiary-foreground))] border-[hsl(var(--tertiary))]',
                status: 'bg-[hsl(var(--status))] text-[hsl(var(--status-foreground))] border-[hsl(var(--status))]',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
)

const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => {
    // Select the appropriate icon based on the alert variant
    const Icon = {
        success: CheckCircle,
        failure: XCircle,
        warning: AlertCircle,
        info: Info,
        result: Star,
        action: Bell,
        tertiary: HelpCircle,
        status: Circle,
        default: Info,
    }[variant || 'default'] // Use 'default' icon if no variant specified

    return (
        <div
            ref={ref}
            role="alert"
            className={cn(alertVariants({ variant }), className)}
            {...props}
        >
            <Icon className="h-5 w-5 text-foreground-muted" />{' '}
            {/* Icon displayed within alert */}
            {props.children}
        </div>
    )
})
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn(
            'mb-1 font-medium leading-none tracking-tight',
            className,
        )}
        {...props}
    />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('text-sm [&_p]:leading-relaxed', className)}
        {...props}
    />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertDescription, AlertTitle }
