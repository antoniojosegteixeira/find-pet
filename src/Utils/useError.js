import { useSnackbar } from "notistack";

export default function Error() {
  const { enqueueSnackbar } = useSnackbar();

  return <div>Error</div>;
}
