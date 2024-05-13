import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  active?: boolean;
  size?: 'sm' | 'lg';
}
