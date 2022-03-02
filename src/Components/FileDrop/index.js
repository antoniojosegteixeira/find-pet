import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./styles";

const FileDrop = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      accept: "image/*",
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

  const thumbnails = files.map((file) => {
    console.log(file);
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
      </div>
      <aside>
        <ul style={styles.thumbsContainer}>{thumbnails}</ul>
      </aside>
    </div>
  );
};

export default FileDrop;
