import { Bookmark, Users, Newspaper, Calendar } from "lucide-react";

const LinkedInSidebar = () => {
  return (
    <div className="w-full flex flex-col gap-2 font-sans text-sm">
      {/* Profile Card */}
      <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 overflow-hidden shadow-sm">
        <div className="h-14 bg-gray-800 relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent"></div>
        </div>

        <div className="px-4 pb-4 flex flex-col items-start">
          {/* Profile Image */}
          <div className="relative -mt-8 mb-2">
            <div className="w-[72px] h-[72px] rounded-full border-2 border-[#1a1a1a] bg-gray-700 flex items-center justify-center text-white text-2xl font-bold">
              T
            </div>
          </div>

          <h2 className="text-lg font-bold text-white leading-tight">
            Thawatchai Drakeao
          </h2>

          <p className="text-gray-400 mt-1 leading-normal">
            Frontend Developer | React | Vite
          </p>

          <p className="text-gray-500 text-xs mt-2">
            Bangkok, Thailand
          </p>

          <div className="flex items-center gap-2 mt-4">
            <span className="font-semibold text-gray-300">
              YellowNex Project
            </span>
          </div>
        </div>
      </div>

      {/* Premium Promo Card */}
      <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-3 shadow-sm">
        <p className="text-gray-400 text-xs">
          สร้างความโดดเด่นต่อเจ้าหน้าที่สรรหาด้วยคุณลักษณะพิเศษและข้อมูลเชิงลึก
        </p>
        <div className="flex items-center gap-2 mt-2 font-semibold text-gray-200 hover:text-blue-400 cursor-pointer transition-colors">
          <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
          ลองใช้ Premium ในราคา ฿0
        </div>
      </div>

      {/* Connections Card */}
      <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-3 shadow-sm flex justify-between items-start hover:bg-gray-800 cursor-pointer transition-colors">
        <div>
          <p className="font-bold text-gray-200">คนรู้จัก</p>
          <p className="text-gray-400 text-xs">ขยายเครือข่ายของคุณ</p>
        </div>
        <span className="text-blue-400 font-bold">1</span>
      </div>

      {/* Navigation Menu Card */}
      <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 py-2 shadow-sm">
        <MenuItem
          icon={<Bookmark size={18} fill="currentColor" />}
          label="รายการที่บันทึกแล้ว"
        />
        <MenuItem icon={<Users size={18} />} label="กลุ่ม" />
        <MenuItem icon={<Newspaper size={18} />} label="จดหมายข่าว" />
        <MenuItem icon={<Calendar size={18} />} label="กิจกรรม" />
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 cursor-pointer transition-colors">
    <span className="text-gray-400">{icon}</span>
    <span className="font-bold text-gray-300">{label}</span>
  </div>
);

export default LinkedInSidebar;