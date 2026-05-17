'use client'
const Loading = () => {
  return (
    <div className="fixed bg-accent w-full h-full z-40 left-0 right-0 top-0 flex items-center justify-center">
      <span className="loading loading-infinity loading-sm"></span>
    </div>
  )
}

export default Loading
