'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'
import Underline from "@tiptap/extension-underline"

const Tiptap = ({ content, onChange, className }: any) => {
    const editor = useEditor({
        extensions: [StarterKit, Underline],
        editorProps: {
            attributes: {
                class: `${className} prose flex flex-col px-3 py-2 min-h-56 justify-start text-black items-start w-full gap-3 text-[16px] outline-none rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gold-400`,
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        immediatelyRender: false,
        shouldRerenderOnTransaction: false
    })

    return (
        <div className='w-full'>
            <Toolbar editor={editor} content={content} />
            <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
        </div>
    )
}

export default Tiptap
