import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
type AavtarProps = {
  className?: string;
};
const Aavtar = ({ className }: AavtarProps) => {
  return (
    <Avatar className={`${className}  hover:animate-pulse`}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>P</AvatarFallback>
    </Avatar>
  );
};

export default Aavtar;
