const constructErrorMessage = (
  functionName: string,
  fileName: string,
  fileExt: string,
  errorMessage: string
): any => {
  try {
    const currentMoment = new Date();

    const errorInfo = `${currentMoment} Error in ${functionName} func in ${fileName}.${fileExt} file ${errorMessage}`;

    return console.error(errorInfo);
  } catch (error: any) {
    console.error(
      `${new Date()} Error in constructErrorMessage func in globalFunctions.ts file ${
        error.message
      }`
    );
  }
};


export {
    constructErrorMessage
}
