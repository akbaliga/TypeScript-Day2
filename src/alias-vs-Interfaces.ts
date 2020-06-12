type ButtonProps = {
  isBold: boolean;
  buttonLabel: string;
};

type PopoverButtonProps = ButtonProps & {
  children: Array<string>;
};

interface BtnProps {
  isBold: boolean;
  buttonLabel: string;
}

interface PopoverBtnProps extends BtnProps {
  children: Array<string>;
}

interface Array<T> {
  last: () => T
}

            