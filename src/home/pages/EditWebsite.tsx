import { useParams } from "react-router-dom";
import { useWebsiteFormStore } from "@/store/useWebsiteFormStore";
import AddWebsite from "./AddWebsite"; // reuse form component
import type { FormValues } from "./AddWebsite";

const EditWebsite = () => {
  const { id } = useParams();
  const entries = useWebsiteFormStore((state) => state.formEntries);

  const entryToEdit = entries.find((entry) => entry.id === id);

  if (!entryToEdit) return <div>Website not found</div>;

  return <AddWebsite initialValues={entryToEdit as FormValues} />;
};

export default EditWebsite;
