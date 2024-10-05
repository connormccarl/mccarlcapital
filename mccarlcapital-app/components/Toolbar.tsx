import React from 'react'
import { type Editor } from '@tiptap/react';
import { Bold, Strikethrough, Italic, List, ListOrdered, Heading2, Underline, Quote, Undo, Redo, Code } from 'lucide-react'

type Props = {
    editor: Editor | null;
    content: string;
}

const Toolbar = ({ editor, content }: Props) => {
    if(!editor) return null;

  return (
    <div className='sticky top-16 z-40 px-4 pb-2 bg-white flex justify-between items-start gap-5 w-full flex-wrap'>
        <div className='flex justify-start items-center gap-1 w-full lg:w-10/12 flex-wrap'>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleBold().run();
                }}
                className={
                    editor.isActive("bold")
                        ? "bg-gold text-white p-2 rounded-lg"
                        : "text-black p-2"
                }
            >
                <Bold className='w-5 h-5' />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleItalic().run();
                }}
                className={
                    editor.isActive("italic")
                        ? "bg-gold text-white p-2 rounded-lg"
                        : "text-black p-2"
                }
            >
                <Italic className='w-5 h-5' />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleUnderline().run();
                }}
                className={
                    editor.isActive("underline")
                        ? "bg-gold text-white p-2 rounded-lg"
                        : "text-black p-2"
                }
            >
                <Underline className='w-5 h-5' />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleStrike().run();
                }}
                className={
                    editor.isActive("strike")
                        ? "bg-gold text-white p-2 rounded-lg"
                        : "text-black p-2"
                }
            >
                <Strikethrough className='w-5 h-5' />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleHeading({ level: 2 }).run();
                }}
                className={
                    editor.isActive("heading", { level: 2 })
                        ? "bg-gold text-white p-2 rounded-lg"
                        : "text-black p-2"
                }
            >
                <Heading2 className='w-5 h-5' />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleBulletList().run();
                }}
                className={
                    editor.isActive("bulletList")
                        ? "bg-gold text-white p-2 rounded-lg"
                        : "text-black p-2"
                }
            >
                <List className='w-5 h-5' />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleOrderedList().run();
                }}
                className={
                    editor.isActive("orderedList")
                        ? "bg-gold text-white p-2 rounded-lg"
                        : "text-black p-2"
                }
            >
                <ListOrdered className='w-5 h-5' />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleBlockquote().run();
                }}
                className={
                    editor.isActive("blockquote")
                        ? "bg-gold text-white p-2 rounded-lg"
                        : "text-black p-2"
                }
            >
                <Quote className='w-5 h-5' />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleCode().run();
                }}
                className={
                    editor.isActive("code")
                        ? "bg-gold text-white p-2 rounded-lg"
                        : "text-black p-2"
                }
            >
                <Code className='w-5 h-5' />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().undo().run();
                }}
                className={
                    editor.isActive("undo")
                        ? "bg-gold text-white p-2 rounded-lg"
                        : "text-black p-2"
                }
            >
                <Undo className='w-5 h-5' />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().redo().run();
                }}
                className={
                    editor.isActive("redo")
                        ? "bg-gold text-white p-2 rounded-lg"
                        : "text-black p-2"
                }
            >
                <Redo className='w-5 h-5' />
            </button>
        </div>
    </div>
  )
}

export default Toolbar