import Aavtar from "./Aavtar";
type UserInfoProps = {
  className?: string;
};
const UserInfo: React.FC<UserInfoProps> = ({ className }) => {
  return (
    <div className="flex px-4 py-2 items-center gap-3 border-b pb-3 ">
      <Aavtar className={className} />
      <div>
        <p className="text-sm font-semibold ">Md Tofaal Ahmed</p>
        <p className="text-xs dark:text-slate-300">tofaal91522@gmail.com</p>
      </div>
    </div>
  );
};

export default UserInfo;
