import React, { useMemo } from 'react';

import { useDropzone } from 'react-dropzone';
import {
    Typography,
    Paper
} from '@mui/material'

const ImageInput = ({ language, theme, selectedImage, setSelectedImage }) => {

    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];

            // Перевірка розширення файлу
            const isImage = file.type.startsWith('image/');

            if (isImage) {
                setSelectedImage(file);
            } else {
                alert('Можна вибрати тільки зображення.');
            }
        }
    });

    const style = useMemo(() => {
        const baseStyle = {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            borderWidth: 2,
            borderRadius: 2,
            borderColor: theme.palette.secondary.main,
            borderStyle: 'dashed',
            backgroundColor: theme.palette.background.default,
            color: selectedImage? theme.palette.text.primary : theme.palette.secondary.main,
            outline: 'none',
            transition: 'border .24s ease-in-out'
        };

        const focusedStyle = {
            borderColor: theme.palette.primary.main,
        };

        const acceptStyle = {
            borderColor: theme.palette.success.main,
        };

        const rejectStyle = {
            borderColor: theme.palette.error.main,
        };

        return {
            ...baseStyle,
            ...(isFocused ? focusedStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {})
        };
    }, [isFocused, isDragAccept, isDragReject, theme, selectedImage]);

    const content = {
        uk: {
            selectedImage: 'Вибране зображення: ',
            notselectedImage: "Виберіть зображення для вашого аватару",
        },
        en: {
            selectedImage: 'Selected image: ',
            notselectedImage: "Select an image for your avatar",
        }
    }

    return (
        <Paper elevation={3} >
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <Typography variant="body1">
                    {selectedImage ? `${content[language].selectedImage} ${selectedImage.name}` : content[language].notselectedImage}
                </Typography>
            </div>
        </Paper>
    )
}

export default ImageInput