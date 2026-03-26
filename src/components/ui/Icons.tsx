import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const IconBase = ({ size = 24, children, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="m5 12 5 5L20 7" />
  </IconBase>
);

export const CopyIcon = (props: IconProps) => (
  <IconBase {...props}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V6a2 2 0 0 1 2-2h9" />
  </IconBase>
);

export const DownloadIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </IconBase>
);

export const WrenchIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M14.7 6.3a4 4 0 0 0-5.37 5.37L4 17v3h3l5.33-5.33a4 4 0 0 0 5.37-5.37l-2.1 2.1a1.5 1.5 0 0 1-2.12 0l-.88-.88a1.5 1.5 0 0 1 0-2.12z" />
  </IconBase>
);

export const ExternalLinkIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M14 5h5v5" />
    <path d="M10 14 19 5" />
    <path d="M19 14v5H5V5h5" />
  </IconBase>
);

export const ChevronRightIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="m9 18 6-6-6-6" />
  </IconBase>
);

export const ChevronLeftIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="m15 18-6-6 6-6" />
  </IconBase>
);

export const MessageCircleIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M7 18.5A9 9 0 1 1 12 21l-5 1.5z" />
  </IconBase>
);

export const BugIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M9 9h6" />
    <path d="M10 3h4" />
    <path d="M12 17v4" />
    <path d="M8 6 6 4" />
    <path d="m16 6 2-2" />
    <path d="M7 12H3" />
    <path d="M21 12h-4" />
    <rect x="7" y="7" width="10" height="10" rx="5" />
  </IconBase>
);

export const TerminalIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="m4 17 6-6-6-6" />
    <path d="M12 19h8" />
  </IconBase>
);

export const ShieldCheckIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M12 3 6 6v5c0 5 3.5 8.5 6 10 2.5-1.5 6-5 6-10V6z" />
    <path d="m9.5 12 1.75 1.75L14.5 10.5" />
  </IconBase>
);

export const AlertTriangleIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M12 3 2.5 19h19z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </IconBase>
);

export const InfoIcon = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 10v6" />
    <path d="M12 7h.01" />
  </IconBase>
);

export const MenuIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </IconBase>
);

export const XIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </IconBase>
);

export const CalendarDaysIcon = (props: IconProps) => (
  <IconBase {...props}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4" />
    <path d="M8 3v4" />
    <path d="M3 10h18" />
    <path d="M8 14h.01" />
    <path d="M12 14h.01" />
    <path d="M16 14h.01" />
    <path d="M8 18h.01" />
    <path d="M12 18h.01" />
    <path d="M16 18h.01" />
  </IconBase>
);

export const HeartIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="m12 20.5-1.2-1.1C5.1 14.2 2 11.4 2 7.9 2 5.1 4.2 3 7 3c1.6 0 3.1.7 4 1.9C11.9 3.7 13.4 3 15 3c2.8 0 5 2.1 5 4.9 0 3.5-3.1 6.3-8.8 11.5z" />
  </IconBase>
);
