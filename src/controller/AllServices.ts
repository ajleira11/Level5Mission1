const errorMessage = {
  invalidModelName: "Please provide a valid model name",
  invalidModelName1: "Model can contain numbers but with letters",
  emptyModelName: "Model should not be empty",
  invalidYear: "Year must be 4 digits",
  negativeYear: "Year must be a positive number",
  emptyYear: "Year should not be empty",
  nonNumericYear: "Year must be a number",
};

export const carValue = (model: string, year: number) => {
  const refinedModel = checkModel(model);
  const refinedYear = checkYear(year);
  if (
    refinedModel === errorMessage.invalidModelName ||
    refinedModel === errorMessage.invalidModelName1 ||
    refinedModel === errorMessage.emptyModelName
  ) {
    return { Error: refinedModel };
  }

  if (
    refinedYear === errorMessage.invalidYear ||
    refinedYear === errorMessage.negativeYear ||
    refinedYear === errorMessage.emptyYear ||
    refinedYear === errorMessage.nonNumericYear
  ) {
    return { Error: refinedYear };
  }

  // Convert the model to uppercase
  const uppercasedModel: string = model.toUpperCase();
  // Remove spaces and any other characters that are not uppercase letters
  const cleanedModel: string = uppercasedModel.replace(/[^A-Z]/g, "");
  // Calculate the Car_value by summing the positions of alphabets, multiplying by 100, and adding the year value
  interface CarValue {
    carValue: number;
  }
  let carValue1: CarValue = {
    carValue: 0,
  };

  for (let i = 0; i < cleanedModel.length; i++) {
    const charCodeA = "A".charCodeAt(0);
    const charCode = cleanedModel.charCodeAt(i) - charCodeA + 1;
    carValue1.carValue += charCode;
  }

  carValue1.carValue = carValue1.carValue * 100 + year;

  return carValue1;
};

const checkModel = (model: string) => {
  if (typeof model === "string") {
    if (model.length == 0) {
      return errorMessage.emptyModelName;
    }
    const convertModeltoNumber = parseInt(model);
    if (!isNaN(convertModeltoNumber)) {
      return errorMessage.invalidModelName1;
    }
    return convertModeltoNumber;
  } else {
    return errorMessage.invalidModelName;
  }
};

const checkYear = (year: number) => {
  const numericRegex = /^[0-9]+$/;
  const tempYear: string = year.toString();

  if (!year) {
    return errorMessage.emptyYear;
  }

  if (typeof year === "string") {
    return errorMessage.nonNumericYear;
  }

  if (year < 0) {
    return errorMessage.negativeYear;
  }
  if (tempYear.length === 4) {
    const newYear = parseInt(tempYear);
    return newYear;
  } else {
    return errorMessage.invalidYear;
  }
};

//Risk Rating

const notARiskyDriver: string = "You are not a risky driver";

export const riskRating = (claimHistory: string) => {
  const claimHistoryToArray: string[] = claimHistory.toLowerCase().split(" ");
  const riskyWord: string[] = ["collide", "crash", "scratch", "bump", "smash"];

  interface RiskRating {
    risk_rating: number;
  }

  let riskRating1: RiskRating = {
    risk_rating: 0,
  };

  //nested mapping
  //map through the list of claims history
  claimHistoryToArray.map((word: string) => {
    //map through the list of risky words
    riskyWord.map((value: string) => {
      //check if the claim history contains the risky word if not proceed with next risky word
      if (word.includes(value)) {
        riskRating1.risk_rating += 1;
      }
    });
  });
  if (riskRating1.risk_rating === 0) {
    return {
      message: notARiskyDriver,
    };
  }
  return riskRating1;
};
