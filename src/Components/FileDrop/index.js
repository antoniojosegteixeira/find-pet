import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./styles";

const FileDrop = ({ files, setFiles }) => {
  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    fileRejections,
  } = useDropzone({
    accept: "image/*",
    maxFiles: 5,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...styles.baseStyle,
      ...(isDragAccept ? styles.acceptStyle : {}),
      ...(isDragReject ? styles.rejectStyle : {}),
    }),
    [isDragAccept, isDragReject]
  );

  /// Image thumbnails
  const thumbnails = files.map((file) => {
    return (
      <li key={file.path} style={styles.imageList}>
        <img src={file.preview} alt="" style={styles.image} />
      </li>
    );
  });

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>
          {isDragReject
            ? "Arquivo não suportado"
            : "Clique ou arraste um arquivo"}
        </p>
        {fileRejections.length > 0 &&
          fileRejections[0]?.errors[0]?.code === "too-many-files" && (
            <span>Limite máximo de imagens: 5</span>
          )}
      </div>
      <aside>
        <ul style={styles.thumbsContainer}>{thumbnails}</ul>
      </aside>
    </div>
  );
};

export default FileDrop;
