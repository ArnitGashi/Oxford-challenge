import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { COMPANY_SERVICES_MOCK } from "../../data/data";
import {
  getRandomImage,
  setHasImage,
  setTitle,
} from "../../store/imageDataSlice";

const useCompanyServices = () => {
  const dispatch = useDispatch();

  const handleImageDisplay = useCallback((title: string) => {
    dispatch(setHasImage(false));
    dispatch(setTitle(title));

    dispatch(getRandomImage() as any);
  }, [dispatch]);

  useEffect(() => {
    const [firstItem] = COMPANY_SERVICES_MOCK;

    handleImageDisplay(firstItem.title);
  }, [handleImageDisplay]);

  return { handleImageDisplay };
};

export default useCompanyServices;
