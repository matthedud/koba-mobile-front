import React from "react"

const PhotoTake = () => {
  const amera = navigator.mediaDevices.getUserMedia({
    video: {
      minAspectRatio: 1.333,
      minFrameRate: 30,
      width: 1280,
      heigth: 720,
      facingMode: {
        exact: "environment",
      },
    },
  })
  return (
    <div>
      PhotoTake
      <input type="file" accept="image/x-png,image/jpeg,image/gif" />
      <button onClick={()=>amera}>Show my face</button>
    </div>
  )
}

export default PhotoTake
