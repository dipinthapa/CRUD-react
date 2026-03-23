import { HiMail, HiPhone, HiGlobe, HiLocationMarker, HiBriefcase } from "react-icons/hi";
 
export default function View() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 w-full max-w-sm">
 
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-full bg-[linear-gradient(45deg,#685EFF,#AA48FF)] flex items-center justify-center font-semibold text-white text-lg shrink-0">
            L
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Leanne Graham</p>
            <p className="text-sm text-gray-400">@Bret</p>
          </div>
        </div>
 
        {/* Contact Info */}
        <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <HiMail className="text-gray-400 shrink-0 text-base" />
            <span className="text-sm text-gray-700">Sincere@april.biz</span>
          </div>
          <div className="flex items-center gap-3">
            <HiPhone className="text-gray-400 shrink-0 text-base" />
            <span className="text-sm text-gray-700">1-770-736-8031 x56442</span>
          </div>
          <div className="flex items-center gap-3">
            <HiGlobe className="text-gray-400 shrink-0 text-base" />
            <span className="text-sm text-gray-700">hildegard.org</span>
          </div>
          <div className="flex items-start gap-3">
            <HiLocationMarker className="text-gray-400 shrink-0 text-base mt-0.5" />
            <span className="text-sm text-gray-700 leading-relaxed">
              Kulas Light, Apt. 556<br />
              Gwenborough, 92998-3874
            </span>
          </div>
        </div>
 
        {/* Company */}
        <div className="border-t border-gray-100 mt-4 pt-4 flex items-center gap-3">
          <HiBriefcase className="text-gray-400 shrink-0 text-base" />
          <div>
            <p className="text-sm font-medium text-gray-800">Romaguera-Crona</p>
            <p className="text-xs text-gray-400">Multi-layered client-server neural-net</p>
          </div>
        </div>
 
        {/* Actions */}
        <div className="flex gap-3 mt-5">
          <button className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition-colors">
            View
          </button>
          
        </div>
 
      </div>
    </div>
  );
}