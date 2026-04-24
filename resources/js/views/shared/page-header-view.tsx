import Heading from '@/components/typography/heading';
import type { HeadingProps } from '@/components/typography/heading';

export type PageHeaderViewProps = HeadingProps & {
    className?: string;
};

export function PageHeaderView({
    className,
    ...props
}: PageHeaderViewProps) {
    return (
        <div className={className}>
            <Heading {...props} />
        </div>
    );
}