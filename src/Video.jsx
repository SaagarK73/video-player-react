export function Video( {videoSrc} ) {
    return (
        <div>
            <video loop controls autostart="true" autoPlay muted src={videoSrc}></video>
        </div>
    )
}