"use client"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[360px] h-[800px] bg-gray-50 relative overflow-hidden shadow-2xl">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-[42px] bg-white flex items-center justify-between px-5">
          <div className="text-xs font-medium">9:41</div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
          </div>
        </div>

        {/* Header */}
        <div className="absolute top-[42px] left-0 right-0 h-[49px] bg-white flex items-center px-4">
          <h1 className="text-[19px] font-bold text-black">Profil</h1>
        </div>

        {/* Profile Section */}
        <div className="absolute top-[107px] left-4 right-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
            <div>
              <h2 className="text-[15px] font-medium text-black">George Lee</h2>
              <p className="text-[13px] text-black">Lee.George@mail.com</p>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="absolute top-[178px] left-4 right-4">
          <h3 className="text-[15px] font-medium text-black mb-6">Menu</h3>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Pengaturan Akun */}
            <button className="w-full h-14 flex items-center px-4 hover:bg-gray-50 transition-colors">
              <div className="w-6 h-6 bg-gray-50 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="ml-4 text-[13px] text-black flex-1 text-left">Pengaturan Akun</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Ubah Kata sandi */}
            <button className="w-full h-14 flex items-center px-4 hover:bg-gray-50 transition-colors border-t border-gray-100">
              <div className="w-6 h-6 bg-gray-50 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="ml-4 text-[13px] text-black flex-1 text-left">Ubah Kata sandi</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Reward Poin */}
            <button className="w-full h-14 flex items-center px-4 hover:bg-gray-50 transition-colors border-t border-gray-100">
              <div className="w-6 h-6 bg-gray-50 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="ml-4 text-[13px] text-black flex-1 text-left">Reward Poin</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="absolute top-[409px] left-4 right-4">
          <h3 className="text-[15px] font-medium text-black mb-6">Info</h3>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Bantuan */}
            <button className="w-full h-14 flex items-center px-4 hover:bg-gray-50 transition-colors">
              <div className="w-6 h-6 bg-gray-50 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="ml-4 text-[13px] text-black flex-1 text-left">Bantuan</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Syarat & Ketentuan */}
            <button className="w-full h-14 flex items-center px-4 hover:bg-gray-50 transition-colors border-t border-gray-100">
              <div className="w-6 h-6 bg-gray-50 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="ml-4 text-[13px] text-black flex-1 text-left">Syarat & Ketentuan</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Kebijakan Privasi */}
            <button className="w-full h-14 flex items-center px-4 hover:bg-gray-50 transition-colors border-t border-gray-100">
              <div className="w-6 h-6 bg-gray-50 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="ml-4 text-[13px] text-black flex-1 text-left">Kebijakan Privasi</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <div className="absolute top-[641px] left-4 right-4">
          <button className="w-full h-10 bg-[#396EB0] rounded-lg flex items-center justify-center hover:bg-[#2d5a92] transition-colors">
            <span className="text-[13px] font-medium text-white tracking-wider">KELUAR</span>
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#FDFDFD] border-t border-gray-200 shadow-lg">
          <div className="flex h-full">
            {/* Beranda */}
            <button className="flex-1 flex flex-col items-center justify-center gap-1 hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-[13px] text-black">Beranda</span>
            </button>

            {/* Riwayat */}
            <button className="flex-1 flex flex-col items-center justify-center gap-1 hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-[13px] text-black">Riwayat</span>
            </button>

            {/* Profil */}
            <button className="flex-1 flex flex-col items-center justify-center gap-1">
              <div className="w-8 h-8 bg-[#396EB0] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="text-[13px] text-[#396EB0] font-bold">Profil</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
