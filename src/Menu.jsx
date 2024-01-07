export function Menu({ onSelect, videoNames }) {
    return (
        <form onClick={onSelect}>
            {videoNames.map((value, i) => (
                <div className="video-inputs">
                    <input key={i} type="radio" name="src" value={value} />
                    {value}
                </div>
            ))}
        </form>
    )
}