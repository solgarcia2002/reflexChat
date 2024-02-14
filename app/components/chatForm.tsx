'use client'

type ChatFormProps = {
    onChangeInput: (e: React.FormEvent<HTMLInputElement>)=> void,
    onClickButton: ()=> void,
}

const ChatForm = ({onChangeInput, onClickButton}: ChatFormProps) => {
    return <div className="w-100 bg-customCyan p-5 flex gap-8 " >
        <input className="size-full text-2x p-5 rounded-lg " autoFocus  onChange={onChangeInput}/>
        <button className="
        flex
        text-15x
        text-white
        font-black
        justify-center
        bg-customGreen 
        rounded-full 
        p-5" 
        onClick={onClickButton}> {' > '}</button>
    </div>
}

export default ChatForm