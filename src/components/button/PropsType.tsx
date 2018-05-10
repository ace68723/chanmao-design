export interface ButtonPropsType {
  type?: 'primary' | 'warning' | 'ghost' | 'bottom' | 'tab';
  size?: 'large' | 'small';
  disabled?: boolean;
  loading?: boolean;
  whiteLoading?: boolean;
  tabSelected?: boolean;
}
