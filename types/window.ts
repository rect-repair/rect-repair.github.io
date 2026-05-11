export interface WindowState {
  id: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  isVisible: boolean;
  zIndex: number;
}

export interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  initialWidth?: number;
  initialHeight?: number;
  initialX?: number;
  initialY?: number;
  onClose?: () => void;
}

export interface DesktopIconProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  x?: number;
  y?: number;
  index?: number;
  isNew?: boolean;
}
