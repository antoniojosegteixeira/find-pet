import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./styles";

const FileDrop = () => {
  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({ accept: "image/*" });

  const style = useMemo(
    () => ({
      ...styles.baseStyle,
      ...(isDragAccept ? styles.acceptStyle : {}),
      ...(isDragReject ? styles.rejectStyle : {}),
    }),
    [isDragAccept, isDragReject]
  );

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
    </div>
  );
};

export default FileDrop;
