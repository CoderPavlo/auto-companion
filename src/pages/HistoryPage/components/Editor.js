import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';

Quill.register('modules/imageResize', ImageResize);

const Editor = ({ theme, placeholder, editorHtml, setEditorHtml }) => {
    const handleChange = (html) => {
        setEditorHtml(html);
        console.log(html);
    };

    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image'],
            ['clean'],
        ],
        clipboard: {
            matchVisual: false,
        },
        imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize'],
        },
    };

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
    ];

    const buttonColor = theme.palette.text.primary;

    return (
        <>
            <ReactQuill
                theme="snow"
                onChange={handleChange}
                value={editorHtml}
                modules={modules}
                formats={formats}
                bounds={'#root'}
                placeholder={placeholder}
                className="custom-quill"
            />

            <style>
                {`.custom-quill .ql-editor::before {
                    color: ${theme.palette.secondary.main};
                }

                .ql-snow .ql-fill, .ql-snow .ql-stroke.ql-fill {
                    fill: ${buttonColor}
                }
                .ql-snow .ql-picker {
                    color: ${buttonColor};
                }
                .ql-snow .ql-stroke {
                    stroke: ${buttonColor};
                }
                .ql-snow .ql-picker-options {
                    background-color: ${theme.palette.background.default};
                }
                
                `}
            </style>
        </>
    );
};

export default Editor;
