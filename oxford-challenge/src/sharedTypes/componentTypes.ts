export type ProfileType = {
  avatarImageClass: string;
  title: string;
  subTitle: string;
};

export type WrappedIconType = {
  bgColorClass: string;
  iconColorClass: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
};
