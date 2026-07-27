import React from 'react'

const InputField = ({ placeholder, name, register, error, type = 'text' }) => {
  return (
    <div>
        <input
        type={type}
          {...register(name)}
          placeholder={placeholder}
          className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all duration-150 focus:outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-200 focus:ring-indigo-500"
          }`}
        />
        {error && (
          <p className="text-xs text-red-500 mt-1">{error.message}</p>
        )}
      </div>
  )
}

export default InputField
