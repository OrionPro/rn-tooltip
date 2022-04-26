import * as React from 'react';
import { StyleProp, ViewStyle, TouchableOpacityProps } from 'react-native';

type Props = {
  popover?: React.ReactElement<{}>;
  withCloseIcon?: boolean,
  closeIconRender?: React.ReactElement<{}>;
  closeIconColor?: string;
  closeIconBackgroundColor?: string;
  withPointer?: boolean,
  height?: number | string,
  width?: number | string,
  containerStyle?: StyleProp<ViewStyle>;
  pointerColor?: string,
  pointerStyle?: StyleProp<ViewStyle>,
  onClose?: () => void,
  onOpen?: () => void,
  withOverlay?: boolean,
  closeOnOverlay?: boolean,
  closeOnPopover?: boolean,
  tooltipOffset?: number,
  mainPadding?: number,
  mainBorderRadius?: number,
  overlayColor?: string,
  backgroundColor?: string,
  highlightColor?: string,
  toggleWrapperProps?: TouchableOpacityProps,
  actionType: 'press' | 'longPress' | 'none',
  position: 'center'
};

export default class Tooltip extends React.Component<Props, any> {
  toggleTooltip: () => void;
}
