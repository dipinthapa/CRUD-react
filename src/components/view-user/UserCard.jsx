import {
  HiMail,
  HiPhone,
  HiGlobe,
  HiLocationMarker,
  HiBriefcase,
} from "react-icons/hi";



export default function UserCard({user, onDelete, onEdit, navigate}) {


  return (
    <>
    
    <section className="">
      <div className=" bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 w-full max-w-sm">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-[linear-gradient(45deg,#685EFF,#AA48FF)] flex items-center justify-center font-semibold text-white text-lg shrink-0">
              {user?.name[0]}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {user.name}
              </p>
              <p className="text-sm text-gray-400">@{user.username}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className=" pt-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <HiMail className="text-gray-400 shrink-0 text-base" />
              <span className="text-sm text-gray-700">{user.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <HiPhone className="text-gray-400 shrink-0 text-base" />
              <span className="text-sm text-gray-700">{user.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <HiGlobe className="text-gray-400 shrink-0 text-base" />
              <span className="text-sm text-gray-700">{user.website}</span>
            </div>
            <div className="flex items-start gap-3">
              <HiLocationMarker className="text-gray-400 shrink-0 text-base mt-0.5" />
              <span className="text-sm text-gray-700 leading-relaxed">
                {user.address?.street}, {user.address?.suite}, 
                <span className="block">{user.address?.city} </span>
                
              </span>
            </div>
          </div>

          {/* Company */}
          <div className="border-t border-gray-100 mt-4 pt-4 flex items-center gap-3">
            <HiBriefcase className="text-gray-400 shrink-0 text-base" />
            <div>
              <p className="text-sm font-medium text-gray-800">
                {user.company?.name}
              </p>
              <p className="text-xs text-gray-400">{user.company?.catchPhrase}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-5">
            <button
              onClick={() => onEdit(user, navigate)}
              className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(user.id)}
              className="flex-1 py-2.5 bg-red-700 hover:bg-red-500 text-white text-sm font-medium rounded-xl transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
    
    </>
    
  );
}
