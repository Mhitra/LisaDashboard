import { RiMenu3Line } from 'react-icons/ri';
import { useRouter } from 'next/router';

export const Appbar = ({ guild }) => {
  const router = useRouter();

  return (
    <div className="bg-gray-900 flex items-center justify-between px-3 py-2">
      <div className="flex-initial flex items-center ml-8 cursor-pointer" onClick={() => router.push('/guilds')}>
        <RiMenu3Line size={36} className="mr-2" />
        <p className="text-white">Menu</p>
      </div>
      <div>
        <p className="text-white">{guild?.name}</p>
      </div>
    </div>
  );
};
