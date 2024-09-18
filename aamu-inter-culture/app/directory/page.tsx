import Image from "next/image";
import { StudentDirectory } from "../../components/StudentDirectory";

export default function DirectoryPage() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/logo/aamuwelcomecenter.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>
      <div className="relative z-10">
        <StudentDirectory />
      </div>
    </div>
  );
}
