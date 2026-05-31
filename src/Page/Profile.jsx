export default function Profile() {
  return (
    <div className="flex flex-col gap-4">
      {/* Profile Header Card */}
      <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#1a1a1a]">
        {/* Banner */}
        <div className="h-48 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-900"></div>

        {/* Profile Content */}
        <div className="px-6 pb-6 pt-6">
          <h1 className="text-3xl font-bold text-white">
            ธวัชชัย ดาแก้ว
          </h1>

          <p className="mt-1 text-lg text-gray-300">
            Full Stack Developer | React • Node.js • MongoDB • PostgreSQL
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Bangkok, Thailand •{" "}
            <span className="cursor-pointer font-semibold text-blue-400 hover:underline">
              ข้อมูลติดต่อ
            </span>
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button className="rounded-full bg-blue-600 px-4 py-1.5 font-semibold text-white transition-colors hover:bg-blue-700">
              เปิดรับโอกาสงาน
            </button>

            <button className="rounded-full border border-blue-400 px-4 py-1.5 font-semibold text-blue-400 transition-colors hover:bg-blue-400/10">
              เพิ่มส่วนในโปรไฟล์
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="rounded-xl border border-gray-800 bg-[#1a1a1a] p-6">
        <h2 className="mb-4 text-xl font-bold text-white">
          เกี่ยวกับ
        </h2>

        <p className="leading-8 text-gray-400">
          Full Stack Developer ที่มีพื้นฐานด้าน Digital Marketing
          และกำลังสร้างประสบการณ์ด้าน Web Application Development
          ด้วยเทคโนโลยีสมัยใหม่
          <br />
          <br />
          มีความสนใจในการพัฒนาระบบด้วย React, Node.js, Express,
          MongoDB และ PostgreSQL รวมถึงการออกแบบ REST API,
          Database Design และ Full Stack Architecture
          <br />
          <br />
          ปัจจุบันกำลังพัฒนาโปรเจกต์ KINETIX แพลตฟอร์มเช่ารองเท้าวิ่ง
          และ Football Hub ระบบคอมมูนิตี้ฟุตบอล ร้านค้าอุปกรณ์กีฬา
          และระบบจองสนามฟุตบอลแบบครบวงจร
        </p>
      </div>

      {/* Skills */}
      <div className="rounded-xl border border-gray-800 bg-[#1a1a1a] p-6">
        <h2 className="mb-4 text-xl font-bold text-white">
          ทักษะ
        </h2>

        <div className="flex flex-wrap gap-2">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "Tailwind CSS",
            "Git",
            "GitHub",
            "REST API",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="rounded-xl border border-gray-800 bg-[#1a1a1a] p-6">
        <h2 className="mb-4 text-xl font-bold text-white">
          โปรเจกต์
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-white">
              KINETIX
            </h3>
            <p className="text-sm text-gray-400">
              Shoe Rental Platform สำหรับนักวิ่ง พัฒนาด้วย MERN Stack
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Football Hub
            </h3>
            <p className="text-sm text-gray-400">
              ระบบคอมมูนิตี้ฟุตบอล ร้านค้าอุปกรณ์กีฬา และจองสนามฟุตบอล
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              FENG PIXEL WORLD
            </h3>
            <p className="text-sm text-gray-400">
              Portfolio Website สไตล์ Pixel Art สำหรับสาย Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}