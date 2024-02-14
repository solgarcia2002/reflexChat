'use client'

const ChatForm = () => {
    return <form className="w-100 bg-customCyan p-5 flex gap-8 " onSubmit={() => { }}>
        <input className="size-full text-2x p-5 rounded-lg " autoFocus />
        <button className="
        flex
        text-15x
        text-white
        font-black
        justify-center
        bg-customGreen 
        rounded-full 
        p-5"> {' > '}</button>
    </form>
}

export default ChatForm