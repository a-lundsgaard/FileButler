import React, { useState, useEffect } from 'react'

interface Props {
  placeholder: string,
  value: string,
  title: string | JSX.Element
}

export default function Textarea({ placeholder, value, title }: Props) {

  return (
    <div className="space-y-0 mb-4 mt-7 ">
      <label className="form-label inline-block mb-4">
        {title}
      </label>
      <textarea
        readOnly
        className="
          h-[20vh]
          resize-none
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 

        id="exampleFormControlTextarea1"
        rows={3}
        placeholder={placeholder}
        //onChange={ (e) => handleChange(e.target.value) }
        value={value}
      ></textarea>
    </div>
  )
}
