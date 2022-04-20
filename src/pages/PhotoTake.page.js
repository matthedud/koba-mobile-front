import React, { useRef } from "react"
import ButtonComp from "../components/buttons/ButtonComp"
import ButtonFormGroupe from "../components/buttons/ButtonFormGroupe"

const PhotoTake = () => {
  const videoRef = useRef()
  const cavasRef = useRef()
  const photoRef = useRef()
  let height = 500
  let width = 400

  const turnCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { optional: [{ facingMode: "environment" }] },
    })
    const videoTracks = stream.getVideoTracks()
    const track = videoTracks[0]
    alert(`Getting video from: ${track.label}`)
    videoRef.current.srcObject = stream
    console.log({ videoRef })
    height = videoRef.current.videoHeight
    width = videoRef.current.videoWidth
    console.log({ height, width })
    setTimeout(() => {
      track.stop()
    }, 10 * 1000)
  }
  function clearphoto() {
    var context = cavasRef.current.getContext("2d")
    context.fillStyle = "#AAA"
    context.fillRect(0, 0, cavasRef.current.width, cavasRef.current.height)

    var data = cavasRef.current.toDataURL("image/png")
    photoRef.current.setAttribute("src", data)
  }

  function takepicture() {
    var context = cavasRef.current.getContext("2d")
    // if (width && height) {
    cavasRef.current.width = videoRef.current.videoWidth
    cavasRef.current.height = videoRef.current.videoHeight
    context.drawImage(
      videoRef.current,
      0,
      0,
      videoRef.current.videoWidth,
      videoRef.current.videoHeight
    )

    var data = cavasRef.current.toDataURL("image/png")
    photoRef.current.setAttribute("src", data)
    // } else {
    //   clearphoto();
    // }
  }

  return (
    <div>
      Take Photo
      <input type="file" accept="image/x-png,image/jpeg,image/gif" />
      {/* <video ref={videoRef} autoPlay></video>
      <canvas ref={cavasRef} id="canvas">
        <div className="output">
          <img ref={photoRef} id="photo" alt="The screen capture will appear in this box." />
        </div>
      </canvas>
      <ButtonFormGroupe>
        <ButtonComp onClick={turnCamera}>Show my face</ButtonComp>
        <ButtonComp onClick={takepicture}>take Photo</ButtonComp>
      </ButtonFormGroupe> */}
    </div>
  )
}

export default PhotoTake
