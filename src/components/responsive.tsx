import * as React from 'react';
// import * as typestyle from 'typestyle';
// import { processGLSProps, processFlexProp, useGLSDefaults } from '../internal/utils';
// import { horizontal, endJustified, centerJustified, center, end } from '../styles/flex';
import { HorizontalProps } from './horizontal';
import { VerticalProps } from './vertical';

export interface ResponsiveProps extends React.HTMLProps<HTMLDivElement> {
  /** 
   * windowWidth <= breakpoint : it is vertical (mobile)
   * else                      : it is horizontal (desktop)
   **/
  breakpoint?: number;

  /** Horizontal mode configuration */
  horizontal?: HorizontalProps;

  /** Vertical mode configuration */
  verticalMode?: VerticalProps;
}

// /** 
//  * Layout out children horizontally with a margin between them
//  */
// export const Responsive: React.FC<ResponsiveProps> = (props) => {
//   const {
//     className,
//     ...otherProps } = processGLSProps(props);

//   const { horizontalSpacing } = useGLSDefaults();

//   const klass =
//     typestyle.classes(
//       className,
//       typestyle.style(
//         processFlexProp(props),
//         horizontal,
//         horizontallySpaced(props.spacing == null ? horizontalSpacing : props.spacing),
//         horizontalAlign == 'right' && endJustified,
//         horizontalAlign == 'center' && centerJustified,
//         verticalAlign == 'center' && center,
//         verticalAlign == 'bottom' && end,
//       )
//     );
//   return <div {...otherProps} className={klass} data-comment='Responsive' />;
// }
// Responsive.displayName = 'Responsive';