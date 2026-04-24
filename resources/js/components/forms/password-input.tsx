import { Eye, EyeOff } from 'lucide-react';
import { forwardRef, useState } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export type PasswordInputProps = Omit<
    ComponentPropsWithoutRef<'input'>,
    'type'
>;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <Input
                type={showPassword ? 'text' : 'password'}
                className={cn('pr-10', className)}
                ref={ref}
                {...props}
            />
            <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 text-muted-foreground hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
            >
                {showPassword ? (
                    <EyeOff className="size-4" />
                ) : (
                    <Eye className="size-4" />
                )}
            </button>
        </div>
    );
    },
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
