import axios from "axios";

import { SHOWCASE_IMAGE_DIMENSIONS } from "../constants/constants";
import { constructErrorMessage } from "../utils/utils";

const fetchRandomImage = async (): Promise<{
  data: any;
  isSuccess: boolean;
}> => {
  try {
    const {
      config: { url },
    } = await axios.get(
      `${process.env.REACT_APP_API_KEY}/${SHOWCASE_IMAGE_DIMENSIONS.width}/${SHOWCASE_IMAGE_DIMENSIONS.height}`
    );

    return { data: url, isSuccess: true };
  } catch (error: any) {
    constructErrorMessage(
      "fetchRandomImage",
      "ImageService",
      "ts",
      error.message
    );

    return { data: "", isSuccess: false };
  }
};

export { fetchRandomImage };
